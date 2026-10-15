import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Where messages go and who they come from. Override in the deployment
// environment; the sandbox sender only delivers to the Resend account owner
// until a domain is verified in Resend.
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "rajdeep.sah@washburn.edu";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTHS: Record<keyof ContactPayload, number> = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};
const MAX_BODY_BYTES = 20_000;

// Submissions faster than this after the form rendered are almost certainly bots.
const MIN_FILL_TIME_MS = 3000;

// Best-effort per-IP rate limit. State lives in this server instance only, so
// it slows down a single abuser rather than guaranteeing a global limit.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    requestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  if (requestLog.size > 5000) {
    for (const [key, times] of requestLog) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) requestLog.delete(key);
    }
  }
  return false;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Collapse line breaks and strip control characters (for single-line fields). */
function toSingleLine(value: string): string {
  return value.replace(/[\r\n\t]+/g, " ").replace(/[\u0000-\u001f\u007f]/g, "");
}

function badRequest(error: string) {
  return NextResponse.json({ success: false, error }, { status: 400 });
}

export async function POST(request: Request) {
  if (!resend) {
    console.error("Missing RESEND_API_KEY environment variable");
    return NextResponse.json(
      { success: false, error: "internal error" },
      { status: 500 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many messages. Please try again in a few minutes.",
      },
      { status: 429 },
    );
  }

  const rawBody = await request.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, error: "Message is too long." },
      { status: 413 },
    );
  }

  let body: Partial<ContactPayload> & {
    website?: unknown;
    startedAt?: unknown;
  };

  try {
    body = JSON.parse(rawBody);
  } catch {
    return badRequest("Invalid JSON payload");
  }

  // Honeypot / timing trap: pretend success so bots don't adapt.
  const filledHoneypot =
    typeof body.website === "string" && body.website.trim() !== "";
  const tooFast =
    typeof body.startedAt === "number" &&
    Date.now() - body.startedAt < MIN_FILL_TIME_MS;
  if (filledHoneypot || tooFast) {
    return NextResponse.json({ success: true });
  }

  const requiredFields = Object.keys(MAX_LENGTHS) as (keyof ContactPayload)[];

  const missingFields = requiredFields.filter((field) => {
    const value = body?.[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingFields.length > 0) {
    return badRequest(`Missing or invalid fields: ${missingFields.join(", ")}`);
  }

  const payload = {
    name: toSingleLine((body.name as string).trim()),
    email: (body.email as string).trim(),
    subject: toSingleLine((body.subject as string).trim()),
    message: (body.message as string).trim(),
  };

  const tooLong = requiredFields.filter(
    (field) => payload[field].length > MAX_LENGTHS[field],
  );
  if (tooLong.length > 0) {
    return badRequest(`Too long: ${tooLong.join(", ")}`);
  }

  if (!emailPattern.test(payload.email)) {
    return badRequest("Please provide a valid email address.");
  }

  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    subject: escapeHtml(payload.subject),
    message: escapeHtml(payload.message),
  };

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: payload.email,
      subject: `New Portfolio Contact: ${payload.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Subject:</strong> ${safe.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safe.message}</p>
        </div>
      `,
      text: `
New Portfolio Contact

Name: ${payload.name}
Email: ${payload.email}
Subject: ${payload.subject}

Message:
${payload.message}
      `,
    });

    if (error) {
      console.error("Resend email error", error);
      return NextResponse.json(
        { success: false, error: "internal error" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error while sending contact email", error);
    return NextResponse.json(
      { success: false, error: "internal error" },
      { status: 500 },
    );
  }
}

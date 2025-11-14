import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!resend) {
    console.error('Missing RESEND_API_KEY environment variable');
    return NextResponse.json(
      { success: false, error: 'internal error' },
      { status: 500 }
    );
  }

  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch (error) {
    console.error('Invalid JSON body received for contact form', error);
    return NextResponse.json(
      { success: false, error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  const requiredFields: (keyof ContactPayload)[] = [
    'name',
    'email',
    'subject',
    'message'
  ];

  const missingFields = requiredFields.filter((field) => {
    const value = body?.[field];
    return typeof value !== 'string' || value.trim().length === 0;
  });

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        success: false,
        error: `Missing or invalid fields: ${missingFields.join(', ')}`
      },
      { status: 400 }
    );
  }

  const payload = body as ContactPayload;

  if (!emailPattern.test(payload.email.trim())) {
    return NextResponse.json(
      { success: false, error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  try {
      const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'rajdeepofficialework@gmail.com',
        replyTo: payload.email.trim(),
      subject: `New Portfolio Contact: ${payload.subject.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Subject:</strong> ${payload.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${payload.message}</p>
        </div>
      `,
      text: `
New Portfolio Contact

Name: ${payload.name}
Email: ${payload.email}
Subject: ${payload.subject}

Message:
${payload.message}
      `
    });

    if (error) {
      console.error('Resend email error', error);
      return NextResponse.json(
        { success: false, error: 'internal error' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error while sending contact email', error);
    return NextResponse.json(
      { success: false, error: 'internal error' },
      { status: 500 }
    );
  }
}


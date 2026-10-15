"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

type ContactResponse = {
  success: boolean;
  error?: string;
};

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Keep in sync with the limits in src/app/api/contact/route.ts.
const MAX_LENGTHS: Record<keyof ContactFormData, number> = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};

const fields: {
  name: keyof ContactFormData;
  label: string;
  type?: string;
  autoComplete?: string;
  placeholder: string;
}[] = [
  {
    name: "name",
    label: "Name",
    autoComplete: "name",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    placeholder: "your.email@example.com",
  },
  { name: "subject", label: "Subject", placeholder: "What's this about?" },
];

const inputClass =
  "w-full px-4 py-3 border border-soft rounded-xl bg-surface text-primary placeholder:text-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent aria-[invalid=true]:border-red-500";

const validateForm = (values: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  // Spam traps checked by the API: a hidden field humans never fill in, and
  // the time the form first rendered.
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldName = e.target.name as keyof ContactFormData;
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    setFormErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setFeedbackMessage("");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      setSubmitStatus("error");
      setFeedbackMessage(
        "Please correct the highlighted fields before resubmitting.",
      );
      const firstInvalid = Object.keys(validationErrors)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website: honeypot,
          startedAt: startedAt.current,
        }),
      });

      let data: ContactResponse | null = null;
      try {
        data = await response.json();
      } catch {
        // ignore JSON parsing errors and fall back to status handling below
      }

      if (!response.ok || !data?.success) {
        // Show validation / rate-limit messages; hide internal server errors.
        throw new Error(
          response.status < 500 && data?.error
            ? data.error
            : "Sorry, your message couldn't be sent right now. Please email me directly instead.",
        );
      }

      setSubmitStatus("success");
      setFeedbackMessage(
        "Thank you! Your message has been sent. I'll get back to you soon.",
      );
      setFormData(initialFormState);
    } catch (error) {
      setSubmitStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Sorry, there was an error sending your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorProps = (field: keyof ContactFormData) => ({
    "aria-invalid": Boolean(formErrors[field]),
    "aria-describedby": formErrors[field] ? `${field}-error` : undefined,
  });

  const errorText = (field: keyof ContactFormData) =>
    formErrors[field] && (
      <p
        id={`${field}-error`}
        className="mt-2 text-sm text-red-600 dark:text-red-400"
      >
        {formErrors[field]}
      </p>
    );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {fields.slice(0, 2).map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-secondary mb-2"
            >
              {field.label} <span aria-hidden="true">*</span>
            </label>
            <input
              type={field.type ?? "text"}
              id={field.name}
              name={field.name}
              autoComplete={field.autoComplete}
              value={formData[field.name]}
              onChange={handleInputChange}
              required
              maxLength={MAX_LENGTHS[field.name]}
              placeholder={field.placeholder}
              className={inputClass}
              {...errorProps(field.name)}
            />
            {errorText(field.name)}
          </div>
        ))}
      </div>

      {fields.slice(2).map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-secondary mb-2"
          >
            {field.label} <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required
            maxLength={MAX_LENGTHS[field.name]}
            placeholder={field.placeholder}
            className={inputClass}
            {...errorProps(field.name)}
          />
          {errorText(field.name)}
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-secondary mb-2"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          maxLength={MAX_LENGTHS.message}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-y min-h-32`}
          {...errorProps("message")}
        />
        {errorText("message")}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-6 py-3 btn-premium font-medium gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span
              aria-hidden="true"
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      <div role="status" aria-live="polite">
        {feedbackMessage && (
          <p
            className={`p-4 rounded-xl text-sm animate-fade-up ${
              submitStatus === "success"
                ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                : "bg-red-500/10 text-red-700 dark:text-red-400"
            }`}
          >
            {feedbackMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

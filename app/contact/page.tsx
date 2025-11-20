"use client";

import React, { useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  smsConsent: boolean;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle checkbox separately
    if (
      e.target instanceof HTMLInputElement &&
      e.target.type === "checkbox"
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const subject = `New Contact Form Submission from ${formData.name || "Atlas AI Website"}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}

SMS Consent: ${formData.smsConsent ? "Yes" : "No"}
      `.trim();

      const mailtoLink = `mailto:info@atlasaimarketing.co?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Trigger the user's email client
      window.location.href = mailtoLink;

      setStatus("sent");
    } catch (error) {
      console.error("Error building mailto link:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Let us know how we can help you move forward with AI powered
            marketing, branding, and growth strategy.
          </p>
        </section>

        {/* Top CTA cards */}
        <section className="mb-12 grid gap-8 md:grid-cols-3">
          {/* Schedule a Call */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Schedule a Call
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Book a complimentary 30 minute strategy session to discuss your goals.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#001F54] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#003077]"
            >
              Book Now
            </a>
          </div>

          {/* Email Us */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Email Us</h2>
            <p className="mt-2 text-sm text-slate-600">
              Send us an email and we will get back to you within 24 hours.
            </p>
            <a
              href="mailto:info@atlasaimarketing.co"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#001F54] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#003077]"
            >
              info@atlasaimarketing.co
            </a>
          </div>

          {/* Call Us */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Call Us</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prefer to talk? Give us a call during business hours.
            </p>
            <a
              href="tel:18325839000"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#001F54] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#003077]"
            >
              832-583-9000
            </a>
          </div>
        </section>

        {/* Form section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Share a bit about your company and what you are trying to solve.
            Someone from the Atlas AI team will follow up.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#001F54]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#001F54]"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#001F54]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#001F54]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:outline-none focus:ring-1 focus:ring-[#001F54]"
              />
            </div>

            {/* SMS consent with embedded Privacy Policy link (option C) */}
            <div className="flex items-start gap-2">
              <input
                id="smsConsent"
                name="smsConsent"
                type="checkbox"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#001F54] focus:ring-[#001F54]"
              />
              <label
                htmlFor="smsConsent"
                className="text-xs text-slate-600"
              >
                I agree to receive SMS messages from Atlas AI Growth & Marketing
                Agency related to appointments, reminders, and important service
                updates. Standard message and data rates may apply. You can reply
                STOP at any time to opt out. See our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-[#001F54] underline hover:text-[#003077]"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-[#001F54] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#003077] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              {status === "sent" && (
                <p className="text-xs text-emerald-600">
                  Thank you. Your message is ready to send from your email client.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-600">
                  Something went wrong building the email. Please email{" "}
                  <a
                    href="mailto:info@atlasaimarketing.co"
                    className="underline"
                  >
                    info@atlasaimarketing.co
                  </a>{" "}
                  directly.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

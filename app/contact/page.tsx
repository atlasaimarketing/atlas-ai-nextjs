"use client";

import React, { useState } from "react";
import Link from "next/link";

type FormStatus = "idle" | "sending" | "sent" | "error";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  smsConsent: boolean;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  // ✅ This fixes the "checked does not exist" error
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    // If this is the checkbox, use "checked"
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const checked = target.checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      // All normal text/textarea fields use "value"
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const subject =
        formData.name?.trim().length > 0
          ? `New contact form submission from ${formData.name}`
          : "New contact form submission from Atlas AI site";

      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Company: ${formData.company}`,
        "",
        "Message:",
        formData.message,
        "",
        `SMS consent: ${formData.smsConsent ? "Yes" : "No"}`,
      ];

      const body = encodeURIComponent(bodyLines.join("\n"));

      window.location.href = `mailto:info@atlasaimarketing.co?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // Dark blue button style for the 3 cards + submit
  const buttonBase =
    "inline-flex items-center justify-center w-full rounded-none border-b-4 border-[#001f4f] bg-[#003b8e] px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#002f73] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#003b8e]";

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top intro */}
        <section className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">
            Get in touch with Atlas AI
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Tell us what you are building and where you feel stuck. We will help
            you connect the dots between brand, marketing, and AI so growth
            feels more organized and less chaotic.
          </p>
        </section>

        {/* 3 contact options */}
        <section className="mb-10 grid gap-6 md:grid-cols-3">
          {/* Schedule a Call */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Schedule a Call
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Book a complimentary 30 minute strategy session to walk through
              your goals and questions.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              className={`mt-4 ${buttonBase}`}
            >
              Book Now
            </a>
          </div>

          {/* Email Us */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Email Us</h2>
            <p className="mt-2 text-sm text-slate-700">
              Prefer to send details by email. Share where you are now, where
              you want to go, and your timeline.
            </p>
            <a
              href="mailto:info@atlasaimarketing.co"
              className={`mt-4 ${buttonBase}`}
            >
              info@atlasaimarketing.co
            </a>
          </div>

          {/* Call Us */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Call Us</h2>
            <p className="mt-2 text-sm text-slate-700">
              Want to talk it out. Call during business hours and we will point
              you in the right direction.
            </p>
            <a href="tel:18325839000" className={`mt-4 ${buttonBase}`}>
              832-583-9000
            </a>
          </div>
        </section>

        {/* Form section */}
        <section className="grid items-start gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          {/* Left copy */}
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-900">
              Send us a message
            </h2>
            <p className="mb-3 text-sm text-slate-700">
              Use this form if you have questions about working with Atlas AI,
              want a custom proposal, or are not sure which offer fits your
              situation yet.
            </p>
            <p className="text-xs text-slate-500">
              Everything stays confidential and is only used to understand your
              needs. Once you submit, we will review your message and follow up
              by email within one to two business days.
            </p>
          </div>

          {/* Actual form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#003b8e] focus:outline-none focus:ring-1 focus:ring-[#003b8e]"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-800">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#003b8e] focus:outline-none focus:ring-1 focus:ring-[#003b8e]"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Email */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#003b8e] focus:outline-none focus:ring-1 focus:ring-[#003b8e]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-800">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#003b8e] focus:outline-none focus:ring-1 focus:ring-[#003b8e]"
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-800">
                How can we help
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#003b8e] focus:outline-none focus:ring-1 focus:ring-[#003b8e]"
                placeholder="Share anything that will help us prepare."
                required
              />
            </div>

            {/* SMS consent with Privacy link */}
            <div className="flex items-start gap-2">
              <input
                id="smsConsent"
                type="checkbox"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#003b8e] focus:ring-[#003b8e]"
              />
              <label
                htmlFor="smsConsent"
                className="text-[11px] leading-snug text-slate-600"
              >
                I agree that Atlas AI and its brands may contact me by SMS or
                phone at the number I provide about services, updates, and
                appointments. Message and data rates may apply. You can reply
                STOP at any time to opt out. See our{" "}
                <Link
                  href="/privacy#sms-consent"
                  className="font-semibold text-[#003b8e] underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={`${buttonBase} mt-2 w-auto px-6`}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message sent"
                : status === "error"
                ? "Try again"
                : "Send Message"}
            </button>

            {status === "error" && (
              <p className="mt-1 text-xs text-red-600">
                Something went wrong. You can also email{" "}
                <a
                  href="mailto:info@atlasaimarketing.co"
                  className="font-semibold text-[#003b8e]"
                >
                  info@atlasaimarketing.co
                </a>
                .
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}

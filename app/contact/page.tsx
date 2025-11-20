"use client";

import React, { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

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

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" && "checked" in e.target ? e.target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !!checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const subject = `New Atlas AI Contact: ${formData.name || ""}`;
    const consentText = formData.smsConsent
      ? "SMS consent: YES"
      : "SMS consent: NO";

    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company: ${formData.company}`,
      "",
      "Message:",
      formData.message,
      "",
      consentText,
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));

    // This opens the user's email client with the form details
    window.location.href = `mailto:info@atlasaimarketing.co?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    setStatus("sent");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top section with three cards */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in touch with Atlas AI
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Tell us what you are building and where you feel stuck. We will help
            you connect the dots between brand, marketing, and AI so growth feels
            more organized and less chaotic.
          </p>

          {/* Three contact options */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Schedule a Call */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Schedule a Call
                </h2>
                <p className="text-sm text-gray-600">
                  Book a complimentary 30 minute strategy session to walk through
                  your goals and questions.
                </p>
              </div>
              <Link
                href="https://calendly.com/atlasaimarketing-info/30min"
                className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition"
              >
                Book Now
              </Link>
            </div>

            {/* Email Us */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h2>
                <p className="text-sm text-gray-600">
                  Prefer to send details by email. Share where you are now, where
                  you want to go, and your timeline.
                </p>
              </div>
              <Link
                href="mailto:info@atlasaimarketing.co"
                className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition break-all"
              >
                info@atlasaimarketing.co
              </Link>
            </div>

            {/* Call Us */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Call Us
                </h2>
                <p className="text-sm text-gray-600">
                  Want to talk it out. Call during business hours and we will
                  point you in the right direction.
                </p>
              </div>
              <a
                href="tel:18325839000"
                className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition"
              >
                832-583-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">
          {/* Left text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-4">
              Use this form if you have questions about working with Atlas AI,
              want a custom proposal, or you are not sure which offer fits your
              situation yet.
            </p>
            <p className="text-gray-600 mb-4">
              You can share as much context as you feel comfortable with.
              Everything stays confidential and is only used to understand your
              needs.
            </p>
            <p className="text-sm text-gray-500">
              Once you submit, we will review your message and follow up by email
              within one to two business days.
            </p>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share a bit about your goals, current challenges, and any timelines or budgets you are working with."
                  required
                />
              </div>

              {/* SMS consent */}
              <div className="flex items-start gap-2">
                <input
                  id="smsConsent"
                  type="checkbox"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="smsConsent"
                  className="text-xs text-gray-600 leading-relaxed"
                >
                  I agree that Atlas AI and its brands may contact me by SMS or
                  phone at the number I provided about services, updates, and
                  appointments. Message and data rates may apply. You can reply
                  STOP at any time to opt out.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message sent"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

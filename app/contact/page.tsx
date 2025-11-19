"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const subject =
        formData.name.trim().length > 0
          ? `New Contact Form Submission from ${formData.name}`
          : "New Contact Form Submission";

      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Company: ${formData.company}`,
        `SMS Consent: ${formData.smsConsent ? "Yes" : "No"}`,
        "",
        "Message:",
        formData.message,
      ];

      const mailto = `mailto:info@atlasaimarketing.co?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F7FB]">

      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#001F54]">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let’s connect about your growth and systems
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            Whether you are ready to build an AI powered marketing system or need clearer messaging, this is where we start.
          </p>
        </div>
      </section>

      {/* 3 Contact Options */}
      <section className="bg-[#F5F7FB]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Schedule a Call */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6EFFE] text-[#001F54] text-2xl">
                📅
              </div>
              <h2 className="text-xl font-semibold">Schedule a Call</h2>
              <p className="mt-3 text-sm text-gray-600">
                Book a complimentary 30 minute strategy session.
              </p>
              <a
                href="https://calendly.com/atlasaimarketing-info/30min"
                className="inline-block mt-6 px-6 py-3 rounded-md bg-[#001F54] text-white font-semibold hover:bg-[#00337A] transition"
              >
                Book Now
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6EFFE] text-[#001F54] text-2xl">
                ✉️
              </div>
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="mt-3 text-sm text-gray-600">
                We respond within one business day.
              </p>
              <a
                href="mailto:info@atlasaimarketing.co"
                className="inline-block mt-6 px-6 py-3 rounded-md bg-[#001F54] text-white font-semibold hover:bg-[#00337A] transition"
              >
                info@atlasaimarketing.co
              </a>
            </div>

            {/* Call */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6EFFE] text-[#001F54] text-2xl">
                📞
              </div>
              <h2 className="text-xl font-semibold">Call Us</h2>
              <p className="mt-3 text-sm text-gray-600">
                Available during business hours.
              </p>
              <a
                href="tel:8325839000"
                className="inline-block mt-6 px-6 py-3 rounded-md bg-[#001F54] text-white font-semibold hover:bg-[#00337A] transition"
              >
                832-583-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center">Send Us a Message</h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Tell us about your company and goals.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 rounded-2xl bg-[#F5F7FB] p-8 shadow-sm"
          >
            {/* 2-column fields */}
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["name", "Name"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["company", "Company"],
              ].map(([id, label]) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type="text"
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:ring-[#001F54]"
                    required={id === "name" || id === "email"}
                  />
                </div>
              ))}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-[#001F54] focus:ring-[#001F54]"
                required
              />
            </div>

            {/* SMS Consent */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#001F54] focus:ring-[#001F54]"
              />
              <label className="text-xs text-gray-600 leading-5">
                I give Atlas AI permission to contact me by SMS or email about appointments and project updates.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-md bg-[#001F54] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#00337A] disabled:opacity-60 transition"
            >
              {status === "sending" ? "Opening Email…" : "Open Email Draft"}
            </button>

            {status === "sent" && (
              <p className="text-xs text-green-600">
                Your email draft should now be open.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-600">
                Something went wrong. Email us directly at info@atlasaimarketing.co.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

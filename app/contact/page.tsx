"use client";

import type React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });

  const [status, setStatus] = useState<"" | "sending" | "sent" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "smsConsent"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // This just builds the email body for now.
      const mailto = `mailto:info@atlasaimarketing.co?subject=New contact from ${encodeURIComponent(
        formData.name || "Website visitor"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
SMS Consent: ${formData.smsConsent ? "Yes" : "No"}

Message:
${formData.message}`
      )}`;

      window.location.href = mailto;
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Top header / intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001F54] mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl">
            Let us know how we can help you move forward with AI powered
            marketing, branding, and growth strategy.
          </p>
        </div>
      </section>

      {/* Three main contact options */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          {/* Schedule a Call */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-[#001F54] mb-2">
              Schedule a Call
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Book a complimentary 30 minute strategy session to discuss your
              goals.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#001F54] text-white text-sm font-semibold hover:bg-[#002b7a] transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Email us */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-[#001F54] mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Send us an email and we will get back to you within 24 hours.
            </p>
            <a
              href="mailto:info@atlasaimarketing.co"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#001F54] text-white text-sm font-semibold hover:bg-[#002b7a] transition-colors"
            >
              info@atlasaimarketing.co
            </a>
          </div>

          {/* Call us */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-[#001F54] mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Prefer to talk? Give us a call during business hours.
            </p>
            <a
              href="tel:18325839000"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#001F54] text-white text-sm font-semibold hover:bg-[#002b7a] transition-colors"
            >
              832-583-9000
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001F54] mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Share a bit about your company and what you are trying to solve.
            Someone from the Atlas AI team will follow up.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F54]"
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F54]"
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How can we help?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001F54] resize-vertical"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="smsConsent"
                type="checkbox"
                name="smsConsent"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 border-gray-300 rounded text-[#001F54] focus:ring-[#001F54]"
              />
              <label
                htmlFor="smsConsent"
                className="text-xs md:text-sm text-gray-600"
              >
                I agree to receive SMS messages from Atlas AI Growth & Marketing
                Agency related to appointments, reminders, and important service
                updates. Standard message and data rates may apply. You can
                reply STOP at any time to opt out.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#001F54] text-white text-sm font-semibold hover:bg-[#002b7a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-green-600">
                Thank you. Your email app should open in a moment.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. You can also email{" "}
                <a
                  href="mailto:info@atlasaimarketing.co"
                  className="underline"
                >
                  info@atlasaimarketing.co
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

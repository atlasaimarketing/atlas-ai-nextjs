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

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: target.value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company || "N/A"}\nMessage: ${formData.message}\n\nSMS Consent: ${formData.smsConsent ? "Yes" : "No"}`
    );

    window.location.href = `mailto:info@atlasaimarketing.co?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to transform your business with AI-powered solutions? Let's talk.
          </h1>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schedule a Call */}
            <div className="text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-3">Schedule a Call</h3>
              <p className="text-gray-600 mb-6">
                Book a complimentary 30-minute strategy session to discuss your goals.
              </p>
              <a
                href="https://calendly.com/atlasaimarketing-info/30min"
                className="inline-block bg-[#09BEFC] hover:bg-[#0aa3db] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Book Now
              </a>
            </div>

            {/* Email Us */}
            <div className="text-center">
              <div className="text-6xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-3">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@atlasaimarketing.co"
                className="inline-block bg-[#06316D] hover:bg-[#052654] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                info@atlasaimarketing.co
              </a>
            </div>

            {/* Call Us */}
            <div className="text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-3">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Prefer to talk? Give us a call during business hours.
              </p>
              <a
                href="tel:832-583-9000"
                className="inline-block bg-[#06316D] hover:bg-[#052654] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                832-583-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#06316D] mb-8 text-center">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:border-transparent"
                    placeholder="(555 ) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:border-transparent"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {/* SMS Consent */}
              <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-md">
                <input
                  type="checkbox"
                  id="smsConsent"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-[#09BEFC] border-gray-300 rounded focus:ring-[#09BEFC]"
                />
                <label htmlFor="smsConsent" className="text-sm text-gray-700">
                  By providing your phone number and checking this box, you consent to receive text messages from Atlas AI Growth & Marketing Agency regarding your inquiry, appointment confirmations, etc. Message frequency may vary. Message and data rates may apply. For assistance, reply HELP or contact 832-583-9000. To stop receiving messages, reply STOP. No further messages will be sent. For details, see our{" "}
                  <Link href="/privacy" className="text-[#09BEFC] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#06316D] hover:bg-[#052654] text-white font-bold py-4 px-6 rounded-md transition-colors text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

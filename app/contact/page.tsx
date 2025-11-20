"use client";

import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
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
      <section className="bg-gradient-to-br from-[#06316D] to-[#09BEFC] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-white/90">
            Ready to transform your business with AI-powered solutions? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Schedule a Call Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-4">Schedule a Call</h3>
              <p className="text-gray-600 mb-6">
                Book a complimentary 30-minute strategy session to discuss your goals.
              </p>
              <a
                href="https://calendly.com/atlasaimarketing-info/30min"
                className="inline-block bg-[#09BEFC] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#08a8e0] transition-colors"
              >
                Book Now
              </a>
            </div>

            {/* Email Us Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-6xl mb-6">✉️</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@atlasaimarketing.co"
                className="inline-block bg-[#06316D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#052654] transition-colors"
              >
                info@atlasaimarketing.co
              </a>
            </div>

            {/* Call Us Card */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-xl font-bold text-[#06316D] mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">
                Prefer to talk? Give us a call during business hours.
              </p>
              <a
                href="tel:832-583-9000"
                className="inline-block bg-[#06316D] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#052654] transition-colors"
              >
                832-583-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - PROPERLY CENTERED */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#06316D] mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#06316D] font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e ) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#06316D] font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[#06316D] font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#06316D] font-semibold mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#06316D] font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#09BEFC] focus:outline-none"
                  required
                />
              </div>

              {/* SMS Consent Checkbox */}
              <div className="flex items-start space-x-3 p-4 bg-gray-100 rounded-md border border-gray-200">
                <input
                  id="smsConsent"
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                  className="mt-1 h-4 w-4 text-[#09BEFC] border-gray-300 rounded focus:ring-[#09BEFC]"
                />
                <label htmlFor="smsConsent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  By providing your phone number and checking this box, you consent to receive text messages from Atlas AI Growth & Marketing Agency regarding your inquiry, appointment confirmations, etc. Message frequency may vary. Message and data rates may apply. For assistance, reply HELP or contact 832-583-9000. To stop receiving messages, reply STOP. No further messages will be sent. For details, see our{" "}
                  <Link href="/privacy" className="text-[#09BEFC] hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#09BEFC] hover:bg-[#08a8e0] text-white font-semibold text-lg py-6 rounded-md transition-colors"
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

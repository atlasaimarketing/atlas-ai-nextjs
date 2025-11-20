"use client";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#001F54] mb-6">
          Privacy Policy
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Last updated: October 31, 2025
        </p>

        {/* Body Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">

          <p>
            Atlas AI Growth & Marketing Agency (“we”, “our”, or “us”) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use,
            and protect your information when you visit our website or interact with our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you contact us, 
              subscribe to our newsletter, submit forms, or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services; 
              communicate with you; and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              Cookies & Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking tools to enhance your browsing experience 
              and analyze website traffic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              Data Sharing
            </h2>
            <p>
              We do not sell your information. We may share limited data with trusted service 
              providers who help us operate our business. These partners are required to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              SMS Communications
            </h2>
            <p>
              If you opt in to receive SMS messages, you agree that Atlas AI and its associated brands 
              may contact you at the number you provided with service updates, reminders, and appointments. 
              Message and data rates may apply. You can reply STOP at any time to opt out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              Your Choices
            </h2>
            <p>
              You may request access to or deletion of your personal information by contacting us. 
              You may also opt out of marketing messages at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001F54] mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, email us at{" "}
              <a href="mailto:info@atlasaimarketing.co" className="text-[#001F54] underline">
                info@atlasaimarketing.co
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}

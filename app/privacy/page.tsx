import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#003b8e] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-blue-200">Last updated: November 2025</p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10 text-gray-800 leading-relaxed">

        {/* 1. Who we are */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Who we are</h2>
          <p className="mb-3">
            Atlas AI Growth & Marketing Agency (“Atlas AI”, “we”, “our”, “us”) provides
            consulting, branding, and AI powered marketing systems for logistics and
            service based companies. This Privacy Policy explains how we collect, use,
            and protect your information when you visit our website, contact us, or work
            with us as a client.
          </p>
        </section>

        {/* 2. Information we collect */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information we collect</h2>
          <p className="mb-3">We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact details</strong> like your name, email, phone number, and company.</li>
            <li><strong>Business details</strong> about your services, requests, and project needs.</li>
            <li><strong>Website analytics</strong> such as pages visited and general engagement data.</li>
            <li><strong>Communication history</strong> including emails, forms, and call notes.</li>
          </ul>
        </section>

        {/* 3. How we use your information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How we use your information</h2>
          <p className="mb-3">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and schedule calls.</li>
            <li>Prepare proposals or recommend services.</li>
            <li>Deliver branding, marketing, or AI consulting services.</li>
            <li>Share updates or emails you opted into.</li>
            <li>Improve our website and content.</li>
          </ul>
        </section>

        {/* 4. Sharing information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. How we share information</h2>
          <p className="mb-3">
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trusted service providers that assist with operations.</li>
            <li>Vendors or subcontractors who help deliver your project.</li>
            <li>Authorities if required by law or to protect our legal rights.</li>
          </ul>
        </section>

        {/* 5. SMS and phone consent */}
        <section id="sms-consent">
          <h2 className="text-2xl font-semibold mb-3">
            5. SMS messages and phone contact
          </h2>

          <p className="mb-3">
            If you choose to provide your phone number and opt in on our contact form,
            you agree that Atlas AI may contact you by SMS or phone for:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Appointment reminders or scheduling updates.</li>
            <li>Service related notifications.</li>
            <li>Time sensitive project updates.</li>
          </ul>

          <p className="mt-3">
            Standard message and data rates may apply.  
            You can opt out at any time by replying <span className="font-semibold">STOP</span>.
          </p>

          <p className="mt-3">
            For help, reply <span className="font-semibold">HELP</span> or email{" "}
            <a
              href="mailto:info@atlasaimarketing.co"
              className="text-[#003b8e] underline hover:no-underline"
            >
              info@atlasaimarketing.co
            </a>.
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Providing your phone number is optional and not required to work with us.
          </p>
        </section>

        {/* 6. Cookies */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Cookies and analytics</h2>
          <p>
            We may use cookies or analytics tools to understand how visitors use our
            website and to improve performance. You can block cookies in your browser
            settings if you prefer.
          </p>
        </section>

        {/* 7. Data retention */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Data retention</h2>
          <p>
            We keep your information only as long as needed for service delivery,
            communication, and legal or compliance requirements. When no longer needed,
            we delete or anonymize it where reasonable.
          </p>
        </section>

        {/* 8. Your choices */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Your choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Update or correct your information.</li>
            <li>Unsubscribe from emails using the link in our messages.</li>
            <li>Opt out of SMS by replying STOP.</li>
            <li>Request limits on how we contact you.</li>
          </ul>
        </section>

        {/* 9. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. How to contact us</h2>
          <p className="mb-2">
            If you have questions about this Privacy Policy, reach out to:
          </p>

          <p className="font-semibold">Atlas AI Growth & Marketing Agency</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@atlasaimarketing.co"
              className="text-[#003b8e] underline hover:no-underline"
            >
              info@atlasaimarketing.co
            </a>
          </p>
        </section>

        {/* 10. Policy changes */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Updates to this policy</h2>
          <p>
            We may update this Privacy Policy as our services or legal requirements
            change. When we update it, we will revise the “Last updated” date.
          </p>
        </section>
      </section>
    </main>
  );
}

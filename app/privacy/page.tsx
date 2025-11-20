"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(to bottom right, #06316D, #09BEFC)', 
        color: '#ffffff', 
        paddingTop: '5rem', 
        paddingBottom: '5rem' 
      }}>
        <div style={{ 
          maxWidth: '80rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem', 
          textAlign: 'center' 
        }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Privacy Policy & SMS Consent
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Your privacy matters to us. Learn how we protect and use your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#ffffff' }}>
        <div style={{ 
          maxWidth: '56rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem' 
        }}>
          <div style={{ lineHeight: '1.8', color: '#374151' }}>
            
            {/* Last Updated */}
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '2rem' }}>
              <strong>Last Updated:</strong> November 19, 2025
            </p>

            {/* Introduction */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Introduction
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Atlas AI Growth & Marketing Agency ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                This policy also includes specific information about our SMS/text messaging program and your consent to receive text messages from us.
              </p>
            </div>

            {/* SMS Consent Section */}
            <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '2px solid #06316D' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                SMS/Text Message Consent
              </h2>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                Program Description
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                By providing your phone number and checking the SMS consent box on our contact form, you consent to receive text messages from Atlas AI Growth & Marketing Agency. These messages may include:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Appointment confirmations and reminders</li>
                <li>Responses to your inquiries</li>
                <li>Service updates and notifications</li>
                <li>Marketing communications (if you've opted in)</li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                Message Frequency
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Message frequency may vary depending on your interaction with our services. You may receive multiple messages per week or month.
              </p>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                Message and Data Rates
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Message and data rates may apply. Standard messaging rates from your wireless carrier will apply to all SMS correspondence. Please contact your wireless carrier for details about your messaging plan.
              </p>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                How to Opt Out (STOP)
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                You can opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message you receive from us. Once you send STOP, you will receive one final confirmation message, and no further messages will be sent to your phone number.
              </p>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                Help and Support (HELP)
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                For assistance with our SMS program, reply <strong>HELP</strong> to any message, or contact us directly at:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1rem' }}>
                <li><strong>Phone:</strong> <a href="tel:832-583-9000" style={{ color: '#09BEFC', textDecoration: 'none' }}>832-583-9000</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@atlasaimarketing.co" style={{ color: '#09BEFC', textDecoration: 'none' }}>info@atlasaimarketing.co</a></li>
              </ul>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#06316D', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                Carriers Supported
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Our SMS program is supported by all major U.S. wireless carriers. We are not liable for delayed or undelivered messages.
              </p>
            </div>

            {/* Information We Collect */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We collect information that you provide directly to us, including:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Name, email address, phone number, and company name</li>
                <li>Messages and inquiries you send through our contact form</li>
                <li>SMS consent status and communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                How We Use Your Information
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We use the information we collect to:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you text messages (if you've consented)</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you updates, marketing communications, and other information (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Information Sharing and Disclosure
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>With service providers who assist us in operating our business (e.g., SMS service providers)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>

            {/* Data Security */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Your Rights and Choices
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                You have the right to:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>Opt out of SMS messages at any time by replying STOP</li>
                <li>Access, update, or delete your personal information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request a copy of the information we hold about you</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:info@atlasaimarketing.co" style={{ color: '#09BEFC', textDecoration: 'none' }}>info@atlasaimarketing.co</a> or call <a href="tel:832-583-9000" style={{ color: '#09BEFC', textDecoration: 'none' }}>832-583-9000</a>.
              </p>
            </div>

            {/* Affiliated Brands */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Affiliated Brands
              </h2>
              <p>
                Atlas AI Growth & Marketing Agency operates and is affiliated with the following brands:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                <li>The Rig on Wheels Show</li>
                <li>Faces of the Road®</li>
                <li>Rig On Wheels</li>
              </ul>
              <p>
                This Privacy Policy applies to all of these brands and their related services.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                If you have any questions about this Privacy Policy or our SMS program, please contact us:
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Atlas AI Growth & Marketing Agency</strong>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Email:</strong> <a href="mailto:info@atlasaimarketing.co" style={{ color: '#09BEFC', textDecoration: 'none' }}>info@atlasaimarketing.co</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:832-583-9000" style={{ color: '#09BEFC', textDecoration: 'none' }}>832-583-9000</a>
              </p>
            </div>

            {/* Back to Contact */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link 
                href="/contact"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#06316D',
                  color: '#ffffff',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s'
                }}
              >
                Back to Contact Page
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

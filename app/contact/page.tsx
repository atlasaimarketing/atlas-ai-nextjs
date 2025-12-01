"use client";

import { useState } from "react";
import Link from "next/link";

// Note: metadata export not supported in client components
// SEO handled by parent layout

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
            Get In Touch
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Ready to transform your business with AI-powered solutions? Let's talk.
          </p>
        </div>
      </section>

      {/* Spacing */}
      <div style={{ height: '4rem', backgroundColor: '#ffffff' }}></div>

      {/* Contact Cards Section */}
      <section style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: '#ffffff' }}>
        <div style={{ 
          maxWidth: '80rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem' 
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '72rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {/* Schedule a Call Card */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              padding: '2rem', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '3.75rem', marginBottom: '1.5rem' }}>📅</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Schedule a Call
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', flexGrow: 1 }}>
                Book a complimentary 30-minute strategy session to discuss your goals.
              </p>
              <a
                href="https://calendly.com/atlasaimarketing-info/30min"
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
                onMouseOver={(e ) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Book Now
              </a>
            </div>

            {/* Email Us Card */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              padding: '2rem', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '3.75rem', marginBottom: '1.5rem' }}>✉️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Email Us
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', flexGrow: 1 }}>
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:info@atlasaimarketing.co"
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
                  wordBreak: 'break-all',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                info@atlasaimarketing.co
              </a>
            </div>

            {/* Call Us Card */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              padding: '2rem', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '3.75rem', marginBottom: '1.5rem' }}>📞</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Call Us
              </h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', flexGrow: 1 }}>
                Prefer to talk? Give us a call during business hours.
              </p>
              <a
                href="tel:832-583-9000"
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
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                832-583-9000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div style={{ height: '4rem', backgroundColor: '#ffffff' }}></div>

      {/* Contact Form Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#ffffff' }}>
        <div style={{ 
          maxWidth: '80rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem' 
        }}>
          <div style={{ 
            maxWidth: '56rem', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            backgroundColor: '#f9fafb', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
            padding: '3rem' 
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem' }}>
                Send Us a Message
              </h2>
              <p style={{ color: '#4b5563' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name and Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', color: '#06316D', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem', 
                      backgroundColor: '#ffffff',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', color: '#06316D', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem', 
                      backgroundColor: '#ffffff',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', color: '#06316D', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem', 
                      backgroundColor: '#ffffff',
                      fontSize: '1rem'
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: 'block', color: '#06316D', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.375rem', 
                      backgroundColor: '#ffffff',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={{ display: 'block', color: '#06316D', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.375rem', 
                    backgroundColor: '#ffffff',
                    fontSize: '1rem',
                    resize: 'none'
                  }}
                  required
                />
              </div>

              {/* SMS Consent Checkbox */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '0.75rem', 
                padding: '1rem', 
                backgroundColor: '#ffffff', 
                borderRadius: '0.375rem', 
                border: '1px solid #d1d5db' 
              }}>
                <input
                  id="smsConsent"
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                  style={{ 
                    marginTop: '0.25rem', 
                    height: '1rem', 
                    width: '1rem', 
                    flexShrink: 0 
                  }}
                />
                <label htmlFor="smsConsent" style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.5', cursor: 'pointer' }}>
                  By providing your phone number and checking this box, you consent to receive text messages from Atlas AI Growth & Marketing Agency regarding your inquiry, appointment confirmations, etc. Message frequency may vary. Message and data rates may apply. For assistance, reply HELP or contact 832-583-9000. To stop receiving messages, reply STOP. No further messages will be sent. For details, see our{" "}
                  <Link href="/privacy" style={{ color: '#09BEFC', fontWeight: '500', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{ 
                  width: '100%', 
                  backgroundColor: '#06316D', 
                  color: '#ffffff', 
                  paddingTop: '1rem', 
                  paddingBottom: '1rem', 
                  borderRadius: '0.375rem', 
                  fontWeight: 'bold', 
                  fontSize: '1.125rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
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

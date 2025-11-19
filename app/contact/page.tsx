"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link with form data
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:info@atlasaimarketing.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    setStatus("sent");
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setStatus("");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        background: "linear-gradient(135deg, #001F54 0%, #003d82 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            Ready to transform your business with AI-powered solutions? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Options Section */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
            
            {/* Schedule a Call */}
            <div style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
                Schedule a Call
              </h3>
              <p style={{ color: "#666", marginBottom: "1.5rem" }}>
                Book a complimentary 30-minute strategy session to discuss your goals.
              </p>
              <Link 
                href="https://calendly.com/atlasaimarketing-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#00BFFF",
                  color: "white",
                  padding: "0.75rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                Book Now
              </Link>
            </div>

            {/* Email */}
            <div style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
                Email Us
              </h3>
              <p style={{ color: "#666", marginBottom: "1.5rem" }}>
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:info@atlasaimarketing.co"
                style={{
                  display: "inline-block",
                  backgroundColor: "#001F54",
                  color: "white",
                  padding: "0.75rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                info@atlasaimarketing.co
              </a>
            </div>

            {/* Phone */}
            <div style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📞</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
                Call Us
              </h3>
              <p style={{ color: "#666", marginBottom: "1.5rem" }}>
                Prefer to talk? Give us a call during business hours.
              </p>
              <a 
                href="tel:832-583-9000"
                style={{
                  display: "inline-block",
                  backgroundColor: "#001F54",
                  color: "white",
                  padding: "0.75rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                832-583-9000
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem", textAlign: "center" }}>
              Send Us a Message
            </h2>
            <p style={{ color: "#666", textAlign: "center", marginBottom: "2rem" }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#001F54" }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00BFFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#001F54" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00BFFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label htmlFor="phone" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#001F54" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00BFFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#001F54" }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.3s"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#00BFFF"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#001F54" }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "border-color 0.3s",
                    resize: "vertical"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#00BFFF"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  backgroundColor: status === "sent" ? "#28a745" : "#00BFFF",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background-color 0.3s"
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending" && status !== "sent") {
                    e.currentTarget.style.backgroundColor = "#0099cc";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "sent") {
                    e.currentTarget.style.backgroundColor = "#00BFFF";
                  }
                }}
              >
                {status === "sending" ? "Opening email client..." : status === "sent" ? "✓ Email client opened!" : "Send Message"}
              </button>

              {status === "sent" && (
                <p style={{ textAlign: "center", marginTop: "1rem", color: "#28a745", fontWeight: 600 }}>
                  Your email client should open with the message pre-filled. Send it to complete your submission!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}


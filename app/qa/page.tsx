"use client";

import { useState } from "react";
import Link from "next/link";

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does Atlas AI do as an AI growth and marketing agency?",
      answer:
        "Atlas AI builds brand systems, marketing workflows, and AI-enabled automation that help logistics and service-based companies grow with less complexity. The focus is on clear messaging, SEO, content development, and practical AI tools that support consistent and effective marketing.",
    },
    {
      question: "Who does Atlas AI serve?",
      answer:
        "We primarily serve logistics companies, freight brokers, trucking operations, supply chain businesses, and service-based B2B companies. Our industry expertise allows us to understand your challenges and speak your language.",
    },
    {
      question: "How is Atlas AI different from traditional marketing agencies?",
      answer:
        "We combine 15+ years of logistics industry experience with cutting-edge AI tools. We're not just marketers—we're industry insiders who understand your world. Our approach integrates AI automation, data-driven strategy, and hands-on execution to deliver faster results with lower costs.",
    },
    {
      question: "Does Atlas AI offer AI training for teams?",
      answer:
        "Yes! We provide custom AI workshops, hands-on training sessions, and ongoing enablement to help your team leverage AI tools confidently. We build capabilities that drive immediate results, not just theory.",
    },
    {
      question: "Does our team need AI experience before working with Atlas AI?",
      answer:
        "Not at all. We meet you where you are. Whether your team is AI-curious or already experimenting with tools, we tailor our approach to your current level and build from there.",
    },
    {
      question: "What services does Atlas AI offer?",
      answer:
        "We offer AI-powered brand systems, AI-driven marketing and growth, thought leadership and media influence, AI integration and automation, fractional CMO services, and team training. Visit our Services page for detailed information on each offering.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Initial improvements can be seen within 30-60 days, with significant growth typically occurring within 3-6 months. Timeline varies based on your starting point, goals, and the services you choose.",
    },
    {
      question: "How much does it cost to work with Atlas AI?",
      answer:
        "Investment varies based on scope, services, and business needs. We create custom packages tailored to your specific goals and budget. Schedule a discovery call to discuss pricing options that work for your business.",
    },
    {
      question: "Does Atlas AI work with businesses outside the logistics industry?",
      answer:
        "While logistics is our specialty, we also work with service-based B2B companies, professional services, and businesses looking to integrate AI into their marketing and operations. If you value industry expertise and AI-driven growth, we can help.",
    },
    {
      question: "How do we get started?",
      answer:
        "Schedule a complimentary discovery call to discuss your goals, challenges, and how Atlas AI can support your growth. We'll explore your needs and determine if we're a good fit. From there, we'll create a custom plan tailored to your business.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matches Contact page gradient */}
      <section
        style={{
          background: "linear-gradient(to right bottom, rgb(6, 49, 109), rgb(9, 190, 252))",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Frequently Asked Questions
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                opacity: 0.9,
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              This page covers the most common questions businesses ask about Atlas AI
              and how our solutions work. The goal is to provide clear information about
              our services, structure, and approach. If you are exploring AI driven
              marketing, branding, automation, or system support for your company, the
              answers below will help you understand what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Matches Services page container */}
      <section style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                  boxShadow: openIndex === index ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1.5rem",
                    backgroundColor: openIndex === index ? "#F9FAFB" : "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "#06316D",
                      lineHeight: "1.6",
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </span>
                  <svg
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      color: "#09BEFC",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  style={{
                    maxHeight: openIndex === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      padding: "0 2rem 1.5rem 2rem",
                      color: "#4B5563",
                      fontSize: "1.125rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Contact page gradient and button styling */}
      <section
        style={{
          background: "linear-gradient(to right bottom, rgb(6, 49, 109), rgb(9, 190, 252))",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Still Have Questions?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                opacity: 0.9,
                maxWidth: "700px",
                margin: "0 auto 2rem",
                lineHeight: "1.6",
              }}
            >
              If you have additional questions or would like to explore how Atlas AI can
              support your business, you can schedule a discovery call. You can also
              review the Services page to learn more about brand systems, SEO support,
              automation workflows, and AI driven marketing solutions.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  backgroundColor: "#09BEFC",
                  color: "#ffffff",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  borderRadius: "0.375rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  fontSize: "1.125rem",
                }}
              >
                Schedule a Discovery Call
              </Link>

              <Link
                href="/services"
                style={{
                  display: "inline-block",
                  backgroundColor: "#ffffff",
                  color: "#06316D",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem",
                  borderRadius: "0.375rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  fontSize: "1.125rem",
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

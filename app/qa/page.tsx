"use client";

import { useState } from "react";
import Link from "next/link";

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does Atlas AI do as an AI growth and marketing agency?",
      answer:
        "Atlas AI builds brand systems, marketing workflows, and practical AI tools that help logistics companies, freight brokers, trucking carriers, and service-based businesses grow with more clarity and less complexity. We focus on messaging, positioning, SEO, automation, and execution systems that support long-term growth.",
    },
    {
      question: "Who does Atlas AI serve?",
      answer:
        "Atlas AI partners with logistics and service-based organizations including trucking companies, freight brokerages, fleet owners, 3PLs, warehousing teams, and professional service companies. We work with teams that want better branding, clearer messaging, and AI-powered marketing systems without needing a full internal department.",
    },
    {
      question: "How is Atlas AI different from traditional marketing agencies?",
      answer:
        "Most agencies focus on producing content. Atlas AI focuses on building the systems behind the content. This includes messaging frameworks, brand positioning, SEO strategy, automation, AI workflows, content planning, and fractional CMO support. Instead of chasing trends, we give you a repeatable structure that supports consistent revenue and easier execution.",
    },
    {
      question: "Does Atlas AI offer AI training for teams?",
      answer:
        "Yes. We provide hands-on AI training that helps your team work faster and stay consistent. Training includes workflow design, templates, guided exercises, and customized systems that make everyday marketing tasks simpler and more efficient.",
    },
    {
      question: "Does our team need AI experience before working with Atlas AI?",
      answer:
        "No. Your team does not need any AI experience before working with us. We handle setup, workflow creation, integration, and training. Everything is designed to be simple, practical, and easy for your team to use right away.",
    },
    {
      question: "What services does Atlas AI offer?",
      answer:
        "Atlas AI provides a full suite of brand and marketing system services including: Brand clarity and messaging systems, AI-powered marketing workflows, SEO and website optimization, Content strategy and planning, Fractional CMO support, Team AI enablement and training, and Automation and workflow design. These systems are built to bring more consistency, stronger positioning, and a clear path to growth.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients begin seeing clarity, alignment, and better execution within the first 30 to 90 days. For SEO, automation, or brand redevelopment, results build over time as systems are implemented and your team begins using them consistently.",
    },
    {
      question: "How much does it cost to work with Atlas AI?",
      answer:
        "Project engagements begin around $3,000. Monthly support starts around $1,500. Fractional CMO retainers begin at $3,000 per month. Most client engagements fall in the low to mid five-figure range depending on the depth of strategy, implementation, and ongoing support.",
    },
    {
      question: "Does Atlas AI work with companies outside the logistics industry?",
      answer:
        "Yes. While logistics is our specialty, our brand and marketing systems work for any service-based business that needs stronger messaging, better execution, and practical AI support. We partner with consulting firms, agencies, healthcare organizations, and professional service teams as well.",
    },
    {
      question: "How do we get started?",
      answer:
        "You can schedule a discovery call through the contact page. During the call, we review your goals, current systems, brand positioning, and operational structure. Then we recommend the best next step and outline what your custom AI-powered marketing system would look like.",
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
                maxWidth: "900px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              This page covers the most common questions businesses ask about working with Atlas AI Growth & Marketing Agency. We specialize in helping logistics companies, freight brokers, trucking carriers, supply chain and warehousing teams, and service-based businesses build stronger brands, smarter marketing systems, and practical AI workflows that actually support growth. The answers below will help you understand how we work and what to expect.
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

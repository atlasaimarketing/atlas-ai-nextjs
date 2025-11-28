"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What does Atlas AI do as an AI growth and marketing agency?",
    answer:
      "Atlas AI builds brand systems, marketing workflows, and AI-enabled automation that help logistics and service-based companies grow with less complexity. The focus is on clear messaging, SEO, content development, and practical AI tools that support consistent and effective marketing."
  },
  {
    question: "Who does Atlas AI serve?",
    answer:
      "Atlas AI supports logistics companies, service-based businesses, and small to mid-sized teams that want stronger branding, better messaging, and AI-powered marketing systems without building an internal department."
  },
  {
    question: "How is Atlas AI different from traditional marketing agencies?",
    answer:
      "Many agencies focus only on content production. Atlas AI creates the entire system behind the content. This includes brand positioning, messaging frameworks, SEO strategy, automation, AI workflows, content strategy, and fractional CMO support. Everything is built for scalable and predictable growth."
  },
  {
    question: "Does Atlas AI offer AI training for teams?",
    answer:
      "Yes. Atlas AI provides hands on AI training that helps teams work faster and stay consistent. Training includes workflows, templates, and practical guidance that simplifies day to day marketing tasks."
  },
  {
    question: "Does our team need AI experience before working with Atlas AI?",
    answer:
      "No. Technical experience is not required. Atlas AI handles setup, workflow design, and integration. Your team receives clear guidance and support to ensure smooth adoption."
  },
  {
    question: "What services does Atlas AI offer?",
    answer:
      "Atlas AI provides brand and messaging systems, AI powered marketing and automation systems, SEO and website optimization, content strategy, fractional CMO support, and team AI training and enablement."
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Brand clarity and messaging updates often produce early improvements. SEO and automation build momentum over time. Most clients begin noticing progress within 30 to 90 days, depending on the scope of work."
  },
  {
    question: "How much does it cost to work with Atlas AI?",
    answer:
      "Project engagements begin around $3,000. Monthly support plans start around $1,500. Fractional CMO retainers begin at $3,000 per month. Recommended services are discussed during the discovery call."
  },
  {
    question: "Does Atlas AI work with businesses outside the logistics industry?",
    answer:
      "Yes. While logistics is the primary specialty, Atlas AI systems support any service based business that needs clear messaging, structured marketing, and practical AI tools."
  },
  {
    question: "How do we get started?",
    answer:
      "You can schedule a discovery call through the contact page. During the call, the team will review your goals, your brand, and your current systems, then provide a recommended next step."
  }
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-header"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <span className="faq-question">{question}</span>
        <span className="faq-arrow">{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div className="faq-body">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="faq-page">
      <div className="faq-container">
        <header className="faq-intro">
          <h1>Questions and Answers</h1>
          <p>
            This page covers the most common questions businesses ask about
            Atlas AI and how our solutions work. The goal is to provide clear
            information about our services, structure, and approach. If you are
            exploring AI driven marketing, branding, automation, or system
            support for your company, the answers below will help you
            understand what to expect.
          </p>
        </header>

        <section className="faq-list">
          {faqs.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </section>

        <section className="faq-outro">
          <p>
            If you have additional questions or would like to explore how Atlas
            AI can support your business, you can schedule a discovery call.
            You can also review the Services page to learn more about brand
            systems, SEO support, automation workflows, and AI driven marketing
            solutions.
          </p>
          <div className="faq-buttons">
            <Link href="/contact" className="btn-primary">
              Schedule a Discovery Call
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .faq-page {
          padding: 3rem 1.5rem;
        }

        .faq-container {
          max-width: 768px;
          margin: 0 auto;
        }

        .faq-intro h1 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .faq-intro p {
          color: #444;
          line-height: 1.6;
        }

        .faq-list {
          margin-top: 2rem;
        }

        .faq-item {
          border-bottom: 1px solid #e2e2e2;
          padding: 0.75rem 0;
        }

        .faq-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .faq-question {
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
        }

        .faq-arrow {
          font-size: 1.3rem;
          margin-left: 0.5rem;
        }

        .faq-body {
          margin-top: 0.5rem;
        }

        .faq-body p {
          margin: 0;
          color: #444;
          line-height: 1.6;
        }

        .faq-outro {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e2e2;
        }

        .faq-outro p {
          color: #444;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .faq-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          text-align: center;
          padding: 0.7rem 1rem;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
        }

        .btn-primary {
          background: #000;
          color: #fff;
        }

        .btn-secondary {
          border: 1px solid #ccc;
          color: #111;
          background: #fff;
        }

        @media (min-width: 640px) {
          .faq-page {
            padding: 4rem 2rem;
          }

          .faq-intro h1 {
            font-size: 2.25rem;
          }

          .faq-buttons {
            flex-direction: row;
            justify-content: flex-start;
          }

          .btn-primary,
          .btn-secondary {
            min-width: 200px;
          }
        }
      `}</style>
    </main>
  );
}

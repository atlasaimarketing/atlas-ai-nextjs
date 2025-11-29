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
      {/* Hero Section - Matches Services Page */}
      <section className="bg-gradient-to-br from-[#06316D] via-[#04254f] to-[#021633] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            This page covers the most common questions businesses ask about Atlas AI
            and how our solutions work. The goal is to provide clear information about
            our services, structure, and approach. If you are exploring AI driven
            marketing, branding, automation, or system support for your company, the
            answers below will help you understand what to expect.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#06316D] leading-relaxed pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-[#09BEFC] ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Services Page Style */}
      <section className="py-20 bg-gradient-to-br from-[#06316D] via-[#04254f] to-[#021633] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            If you have additional questions or would like to explore how Atlas AI can
            support your business, you can schedule a discovery call. You can also
            review the Services page to learn more about brand systems, SEO support,
            automation workflows, and AI driven marketing solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#09BEFC] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#08a8e0] transition-colors shadow-lg"
            >
              Schedule a Discovery Call
            </Link>

            <Link
              href="/services"
              className="inline-block bg-white text-[#06316D] px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

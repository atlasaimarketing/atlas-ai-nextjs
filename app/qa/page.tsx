"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function QA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does Atlas AI do as an AI growth and marketing agency?",
      answer: "Atlas AI builds brand systems, marketing workflows, and AI-enabled automation that help logistics and service-based companies grow with less complexity. The focus is on clear messaging, SEO, content development, and practical AI tools that support consistent and effective marketing."
    },
    {
      question: "Who does Atlas AI serve?",
      answer: "We primarily serve logistics companies, freight brokers, trucking operations, supply chain businesses, and service-based B2B companies. Our industry expertise allows us to understand your challenges and speak your language."
    },
    {
      question: "How is Atlas AI different from traditional marketing agencies?",
      answer: "We combine 15+ years of logistics industry experience with cutting-edge AI tools. We're not just marketers—we're industry insiders who understand your world. Our approach integrates AI automation, data-driven strategy, and hands-on execution to deliver faster results with lower costs."
    },
    {
      question: "Does Atlas AI offer AI training for teams?",
      answer: "Yes! We provide custom AI workshops, hands-on training sessions, and ongoing enablement to help your team leverage AI tools confidently. We build capabilities that drive immediate results, not just theory."
    },
    {
      question: "Does our team need AI experience before working with Atlas AI?",
      answer: "Not at all. We meet you where you are. Whether your team is AI-curious or already experimenting with tools, we tailor our approach to your current level and build from there."
    },
    {
      question: "What services does Atlas AI offer?",
      answer: "We offer AI-powered brand systems, AI-driven marketing and growth, thought leadership and media influence, AI integration and automation, fractional CMO services, and team training. Visit our Services page for detailed information on each offering."
    },
    {
      question: "How long does it take to see results?",
      answer: "Initial improvements can be seen within 30-60 days, with significant growth typically occurring within 3-6 months. Timeline varies based on your starting point, goals, and the services you choose."
    },
    {
      question: "How much does it cost to work with Atlas AI?",
      answer: "Investment varies based on scope, services, and business needs. We create custom packages tailored to your specific goals and budget. Schedule a discovery call to discuss pricing options that work for your business."
    },
    {
      question: "Does Atlas AI work with businesses outside the logistics industry?",
      answer: "While logistics is our specialty, we also work with service-based B2B companies, professional services, and businesses looking to integrate AI into their marketing and operations. If you value industry expertise and AI-driven growth, we can help."
    },
    {
      question: "How do we get started?",
      answer: "Schedule a complimentary discovery call to discuss your goals, challenges, and how Atlas AI can support your growth. We'll explore your needs and determine if we're a good fit. From there, we'll create a custom plan tailored to your business."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SEO: Update page title and meta description
  useEffect(() => {
    document.title = "FAQ - Atlas AI | Frequently Asked Questions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get answers to common questions about Atlas AI\'s AI-powered marketing, branding, automation, and growth services for logistics and service-based companies.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get answers to common questions about Atlas AI\'s AI-powered marketing, branding, automation, and growth services for logistics and service-based companies.';
      document.head.appendChild(meta);
    }
  }, []);

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
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.8' }}>
            This page covers the most common questions businesses ask about Atlas AI and how our solutions work. The goal is to provide clear information about our services, structure, and approach. If you are exploring AI driven marketing, branding, automation, or system support for your company, the answers below will help you understand what to expect.
          </p>
        </div>
      </section>

      {/* Spacing */}
      <div style={{ height: '4rem' }}></div>

      {/* FAQ Section */}
      <section style={{ paddingBottom: '4rem', backgroundColor: '#ffffff' }}>
        <div style={{ 
          maxWidth: '56rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem' 
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '0.5rem',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#06316D',
                    lineHeight: '1.6'
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: '#09BEFC'
                    }}
                  />
                </button>
                
                <div 
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    color: '#4b5563',
                    fontSize: '1rem',
                    lineHeight: '1.8'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div style={{ height: '2rem' }}></div>

      {/* CTA Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#f9fafb' }}>
        <div style={{ 
          maxWidth: '48rem', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          paddingLeft: '1rem', 
          paddingRight: '1rem',
          textAlign: 'center' 
        }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#06316D', marginBottom: '1rem', lineHeight: '1.3' }}>
            Still Have Questions?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.8' }}>
            If you have additional questions or would like to explore how Atlas AI can support your business, you can schedule a discovery call. You can also review the Services page to learn more about brand systems, SEO support, automation workflows, and AI driven marketing solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <a
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
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Schedule a Discovery Call
              </a>
            </Link>
            
            <Link href="/services">
              <a
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  color: '#06316D',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                  border: '2px solid #06316D',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                View Services
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Team Training & AI Enablement | Atlas AI Growth & Marketing Agency",
  description: "Empower your team to leverage AI tools and modern marketing strategies. Hands-on training, workshops, and enablement programs that drive adoption and results.",
  alternates: {
    canonical: "https://www.atlasaimarketing.co/services/team-training-ai-enablement"
  }
};

export default function TeamTrainingPage() {
  const faqs = [
    {
      question: "What is AI enablement?",
      answer: "AI enablement is the process of equipping your team with the knowledge, tools, and workflows to effectively use AI in their daily work. It's not just training on how to use ChatGPT—it's building AI literacy, identifying high-impact use cases, implementing AI tools, and creating processes that ensure consistent adoption and results."
    },
    {
      question: "Do our team members need to be technical?",
      answer: "Not at all. Our training is designed for non-technical professionals—marketers, recruiters, salespeople, operations managers. We focus on practical applications and user-friendly tools that anyone can learn, regardless of technical background."
    },
    {
      question: "How long does training take?",
      answer: "Initial training workshops typically run 2-4 hours and cover foundational concepts and immediate use cases. We also offer ongoing enablement programs (4-12 weeks) that include hands-on implementation, coaching, and continuous skill development. The timeline depends on your team size and goals."
    },
    {
      question: "What AI tools do you train on?",
      answer: "We train on the most practical and accessible AI tools for business: ChatGPT, Claude, Perplexity for research and writing; Canva AI and Midjourney for visual content; Descript for video editing; automation platforms like Zapier and Make; and industry-specific tools for logistics and recruiting. We focus on tools that deliver immediate ROI."
    },
    {
      question: "Can you customize training for our industry?",
      answer: "Absolutely. All our training programs are customized to your industry, business model, and specific use cases. For logistics companies, we focus on driver recruiting, carrier onboarding, customer communications, operations optimization, and marketing—not generic examples that don't apply to your business."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Team Training & AI Enablement",
    "provider": {
      "@type": "Organization",
      "name": "Atlas AI Growth & Marketing Agency",
      "url": "https://www.atlasaimarketing.co"
    },
    "areaServed": "US",
    "description": "Empower your team to leverage AI tools and modern marketing strategies. Hands-on training, workshops, and enablement programs that drive adoption and results.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://www.atlasaimarketing.co/services/team-training-ai-enablement"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Logistics and Transportation Companies"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <div className="min-h-screen">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Team Training & AI Enablement", href: "/services/team-training-ai-enablement" }
        ]} />
        {/* Hero Section */}
        <section style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          padding: "4rem 2rem",
          color: "white",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: 1.2
            }}>
              Team Training & AI Enablement
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.95
            }}>
              Empower your team to leverage AI tools and modern marketing strategies that drive real business results
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                backgroundColor: "#0ea5e9",
                color: "white",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block"
              }}>
                Train Your Team
              </Link>
              <Link href="/services" style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                border: "2px solid white"
              }}>
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Turn Your Team Into AI Power Users
          </h2>
          
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            AI is transforming how businesses operate—but only if your team knows how to use it. Most companies invest in AI tools, then watch them sit unused because employees don't understand how to apply them to their daily work. Training solves that problem.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Atlas AI Growth & Marketing Agency provides hands-on team training and AI enablement programs designed specifically for logistics and service-based businesses. We don't just teach theory—we help your team implement AI tools in their actual workflows, measure results, and build sustainable habits that drive long-term productivity gains.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            What's Included in Team Training & AI Enablement
          </h2>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            AI Fundamentals & Literacy Training
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            We start with the basics: what AI is, how it works, what it can and can't do, and why it matters for your business. This foundational training builds confidence and eliminates fear, so your team approaches AI with curiosity instead of resistance. No technical jargon—just practical understanding.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Hands-On Tool Training
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            We train your team on the most impactful AI tools for your business: ChatGPT for writing and research, AI design tools for visual content, automation platforms for workflow efficiency, and industry-specific tools for recruiting, operations, and customer service. Every session includes live demonstrations and hands-on practice.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Custom Use Case Development
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Generic AI training doesn't work because every business has unique needs. We work with your team to identify high-impact use cases specific to your workflows—whether that's automating driver recruiting communications, generating marketing content, analyzing operational data, or streamlining customer onboarding. We build custom prompts, templates, and workflows tailored to your business.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Implementation Support & Coaching
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Training is just the beginning. Real adoption happens when people use AI in their daily work. We provide ongoing implementation support: answering questions, troubleshooting challenges, refining workflows, and coaching team members as they build new skills. You're not left to figure it out alone.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Marketing Strategy & Execution Training
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Beyond AI tools, we train your team on modern marketing strategies that work for logistics companies: content marketing, LinkedIn thought leadership, email campaigns, SEO, paid advertising, and analytics. Your team learns not just how to execute tactics, but how to think strategically about growth.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Performance Measurement & Continuous Improvement
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            We help you measure the impact of AI adoption: time saved, quality improvements, productivity gains, and business results. Regular check-ins and performance reviews ensure your team continues to improve and discover new ways to leverage AI as the technology evolves.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Why Logistics Companies Choose Atlas AI Team Training
          </h2>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Industry-Specific Training:</strong> We don't teach generic AI skills—we focus on use cases that matter for logistics: driver recruiting, carrier onboarding, customer communications, operations optimization, and marketing. Every example, template, and workflow is relevant to your business.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Practical, Hands-On Approach:</strong> Our training is built for doers, not theorists. We focus on immediate application: your team leaves every session with tools, templates, and workflows they can use the same day. No fluff, no filler—just practical skills that drive results.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Ongoing Support & Enablement:</strong> We don't train and disappear. We provide ongoing coaching, resources, and support to ensure your team continues to grow their AI capabilities and stays current as new tools and techniques emerge.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Who Benefits Most from Team Training
          </h2>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Marketing & Sales Teams:</strong> Learn to create compelling content, automate outreach, analyze data, and execute campaigns more efficiently with AI-powered tools.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Recruiting & HR Teams:</strong> Streamline driver recruiting, automate candidate communications, improve job descriptions, and enhance the candidate experience with AI.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Operations & Leadership Teams:</strong> Use AI for data analysis, reporting, process optimization, and strategic decision-making that drives business growth.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Related Services
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem", color: "#374151" }}>
            Maximize your team's capabilities with our related services:
          </p>
          <ul style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2rem", color: "#374151", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/ai-integration-automation" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                AI Integration & Automation
              </Link> - Build custom AI systems for your business
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/fractional-cmo-growth-leadership" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Fractional CMO & Growth Leadership
              </Link> - Strategic leadership for your marketing team
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/ai-driven-marketing-growth" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                AI-Driven Marketing & Growth
              </Link> - Execute AI-powered marketing campaigns
            </li>
          </ul>

          {/* FAQ Section */}
          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#1e40af" }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#374151" }}>
                {faq.answer}
              </p>
            </div>
          ))}

          {/* CTA Section */}
          <div style={{
            marginTop: "4rem",
            padding: "2.5rem",
            backgroundColor: "#eff6ff",
            borderRadius: "0.75rem",
            textAlign: "center"
          }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem", color: "#1e3a8a" }}>
              Ready to Empower Your Team with AI?
            </h2>
            <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: "#374151" }}>
              Let's build AI capabilities that drive productivity and business growth.
            </p>
            <Link href="/contact" style={{
              backgroundColor: "#0ea5e9",
              color: "white",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block"
            }}>
              Schedule Your Team Training Strategy Session
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

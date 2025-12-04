import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Thought Leadership & Media Influence | Atlas AI Growth & Marketing Agency",
  description: "Turn your expertise into industry influence. Strategic thought leadership programs, media placement, speaking opportunities, and content that positions you as the go-to authority.",
  alternates: {
    canonical: "https://www.atlasaimarketing.co/services/thought-leadership-media"
  }
};

export default function ThoughtLeadershipPage() {
  const faqs = [
    {
      question: "What is thought leadership and why does it matter?",
      answer: "Thought leadership is the practice of positioning yourself or your company as a trusted authority in your industry. It matters because people do business with experts they know, like, and trust. When you're recognized as a thought leader, you attract better opportunities, command premium pricing, and build a competitive moat that's hard to replicate."
    },
    {
      question: "How long does it take to build thought leadership?",
      answer: "Building genuine thought leadership is a 6-12 month journey, not an overnight transformation. We typically see initial traction (media features, speaking invitations, inbound inquiries) within 90 days, with compounding momentum over time. The key is consistency—showing up with valuable insights month after month."
    },
    {
      question: "Do I need to be on social media constantly?",
      answer: "No. Quality beats quantity. We help you develop a sustainable thought leadership strategy that fits your schedule and strengths. Whether that's weekly LinkedIn posts, monthly articles, quarterly speaking engagements, or a combination—we build a plan that works for you without burning you out."
    },
    {
      question: "Can you help me get featured in industry publications?",
      answer: "Absolutely. We have established relationships with logistics and business media outlets and know exactly what editors are looking for. We'll craft compelling pitches, ghostwrite articles, and secure media placements that amplify your expertise and expand your reach."
    },
    {
      question: "What if I'm not a natural writer or speaker?",
      answer: "That's exactly why we're here. Most thought leaders aren't natural writers or speakers—they're experts who need help articulating their insights. We handle the heavy lifting: ghostwriting articles, preparing presentation decks, coaching you for interviews, and refining your messaging so you sound confident and authoritative."
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
    "serviceType": "Thought Leadership & Media Influence",
    "provider": {
      "@type": "Organization",
      "name": "Atlas AI Growth & Marketing Agency",
      "url": "https://www.atlasaimarketing.co"
    },
    "areaServed": "US",
    "description": "Turn your expertise into industry influence. Strategic thought leadership programs, media placement, speaking opportunities, and content that positions you as the go-to authority.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://www.atlasaimarketing.co/services/thought-leadership-media"
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
          { label: "Thought Leadership & Media Influence", href: "/services/thought-leadership-media" }
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
              Thought Leadership & Media Influence
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.95
            }}>
              Turn your expertise into industry influence through strategic content, media placement, and speaking opportunities
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
                Build Your Thought Leadership
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
            From Expert to Industry Authority
          </h2>
          
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            In the logistics industry, expertise alone isn't enough. The best opportunities—speaking engagements, media features, strategic partnerships, premium clients—go to the people who are known, not just those who are good. Thought leadership is how you bridge that gap.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Atlas AI Growth & Marketing Agency specializes in building thought leadership platforms for logistics and service-based professionals. Whether you're a CEO, fractional executive, consultant, or industry veteran, we help you turn your hard-earned expertise into influence, visibility, and business growth.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            What's Included in Thought Leadership & Media Influence
          </h2>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Strategic Positioning & Messaging
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Effective thought leadership starts with clarity. We work with you to define your unique point of view, core themes, target audience, and competitive differentiation. This strategic foundation ensures every article, post, and speaking opportunity reinforces your authority and builds toward your business goals.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Content Creation & Ghostwriting
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            You have the insights—we have the writing expertise. Our team creates high-quality thought leadership content including LinkedIn articles, industry op-eds, blog posts, white papers, and case studies. We interview you to capture your voice and perspective, then craft compelling narratives that position you as the go-to expert in your field.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Media Relations & Placements
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Getting featured in respected industry publications amplifies your credibility and expands your reach. We pitch editors, secure byline opportunities, coordinate podcast interviews, and position you for media commentary on trending topics. Our established relationships with logistics and business media outlets open doors that would otherwise take years to access.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Speaking Opportunities & Presentation Support
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Speaking at industry conferences, panels, and webinars establishes you as an authority and creates valuable networking opportunities. We identify relevant speaking opportunities, craft compelling proposals, develop presentation content, and coach you for delivery. Whether it's a keynote at a major conference or a panel discussion at a regional event, we help you shine.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Social Media Amplification
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Your thought leadership content deserves an audience. We optimize your LinkedIn profile, create engaging social posts, and develop content distribution strategies that maximize visibility. Our AI-powered social media tools help you maintain consistent presence without spending hours on social platforms every day.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Personal Brand Development
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Your personal brand is your professional reputation made visible. We help you develop a cohesive personal brand that aligns with your business goals—from professional photography and bio writing to media kits and speaker one-sheets. Everything you need to present yourself as a credible, authoritative industry leader.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Why Logistics Professionals Choose Atlas AI
          </h2>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Industry Credibility:</strong> Led by Kameel E. Gaines, a recognized thought leader with 15+ years in logistics and features in Forbes, Women In Trucking, and major industry conferences. We know what resonates in this industry because we've lived it.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Proven Media Relationships:</strong> We have established connections with editors, podcast hosts, and conference organizers across the logistics ecosystem. Our pitches get opened, our articles get published, and our clients get featured.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Business-Focused Strategy:</strong> We don't build thought leadership for vanity—we build it for business results. Every piece of content, every media placement, and every speaking opportunity is designed to attract the right opportunities, clients, and partnerships.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Related Services
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem", color: "#374151" }}>
            Amplify your thought leadership with our related services:
          </p>
          <ul style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2rem", color: "#374151", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/ai-powered-brand-systems" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                AI-Powered Brand Systems
              </Link> - Build a personal brand that commands attention
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/ai-driven-marketing-growth" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                AI-Driven Marketing & Growth
              </Link> - Amplify your message with strategic marketing
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/fractional-cmo-growth-leadership" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Fractional CMO & Growth Leadership
              </Link> - Strategic guidance for scaling your influence
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
              Ready to Build Your Influence?
            </h2>
            <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: "#374151" }}>
              Let's turn your expertise into industry authority and business growth.
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
              Schedule Your Thought Leadership Strategy Session
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

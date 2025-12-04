import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AI-Driven Marketing & Growth Strategies | Atlas AI Agency",
  description: "Data-backed marketing ecosystems that convert using automation, analytics, and creative strategy. Scale your logistics business with intelligent marketing systems.",
  keywords: "AI-driven marketing, marketing automation, AI marketing campaigns, growth marketing, logistics marketing automation",
  alternates: {
    canonical: "https://www.atlasaimarketing.co/services/ai-driven-marketing-growth"
  }
};

export default function AIMarketingGrowthPage() {
  const faqs = [
    {
      question: "What is AI-driven marketing?",
      answer: "AI-driven marketing combines data analytics, automation, and artificial intelligence to create marketing systems that learn, adapt, and optimize in real-time. Instead of manual campaign management, AI handles repetitive tasks, analyzes performance data, and makes intelligent recommendations—allowing your team to focus on strategy and creative execution."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most clients see measurable improvements within 60-90 days. Quick wins like automated email sequences and optimized ad targeting can show results in weeks, while comprehensive brand awareness and thought leadership campaigns build momentum over 3-6 months. We provide monthly reporting so you can track progress every step of the way."
    },
    {
      question: "Do you work with small logistics companies or just large carriers?",
      answer: "We work with logistics and service-based companies of all sizes—from independent brokerages and regional carriers to national fleets and 3PLs. Our AI-driven marketing systems are scalable and customized to your budget, goals, and growth stage."
    },
    {
      question: "What's included in your marketing services?",
      answer: "Our AI-driven marketing services include strategy development, audience research, content creation, campaign automation, paid advertising management, SEO optimization, email marketing, social media management, analytics and reporting, and ongoing optimization. We build complete marketing ecosystems—not one-off campaigns."
    },
    {
      question: "How is Atlas AI different from traditional marketing agencies?",
      answer: "Traditional agencies rely on manual processes and generic strategies. Atlas AI combines 15+ years of logistics industry expertise with cutting-edge AI technology to deliver faster results, lower costs, and smarter decision-making. We don't just run campaigns—we build intelligent marketing systems that scale with your business."
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
    "serviceType": "AI-Driven Marketing & Growth",
    "provider": {
      "@type": "Organization",
      "name": "Atlas AI Growth & Marketing Agency",
      "url": "https://www.atlasaimarketing.co"
    },
    "areaServed": "US",
    "description": "Data-backed marketing ecosystems that convert using automation, analytics, and creative strategy. Scale your logistics business with intelligent marketing systems.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://www.atlasaimarketing.co/services/ai-driven-marketing-growth"
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
          { label: "AI-Driven Marketing & Growth", href: "/services/ai-driven-marketing-growth" }
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
              AI-Driven Marketing & Growth
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.95
            }}>
              Data-backed marketing ecosystems that convert using automation, analytics, and creative strategy
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
                Get Your Marketing Strategy
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
            Marketing That Works as Hard as You Do
          </h2>
          
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            In the logistics industry, marketing isn't just about brand awareness—it's about recruiting drivers, attracting quality carriers, winning new customers, and staying competitive in a market where everyone claims to offer the same thing. But traditional marketing approaches are slow, expensive, and often disconnected from the metrics that actually matter to your business.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Atlas AI Growth & Marketing Agency builds AI-driven marketing ecosystems designed specifically for logistics, supply chain, and service-based companies. We combine strategic marketing expertise with intelligent automation, data analytics, and creative execution to deliver campaigns that don't just look good—they convert, scale, and drive measurable ROI.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            What's Included in AI-Driven Marketing & Growth
          </h2>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Strategic Marketing Planning
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Every successful marketing campaign starts with a clear strategy. We work with you to define your target audience, competitive positioning, key messaging, and growth goals. Whether you're recruiting drivers, building carrier networks, or attracting shippers, we create data-backed marketing plans that align with your business objectives.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Content Marketing & SEO
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Great content attracts the right audience and builds trust. We create SEO-optimized blog posts, case studies, recruiting materials, and thought leadership content that positions your company as an industry leader. Our AI-powered content systems accelerate production while maintaining quality and consistency across all channels.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Paid Advertising & Lead Generation
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            We manage high-performance paid advertising campaigns across Google Ads, Facebook, LinkedIn, and industry-specific platforms. Our AI-driven targeting, automated bid optimization, and conversion tracking ensure every dollar works harder. Whether you need driver applications, carrier partnerships, or customer leads, we deliver qualified prospects at scale.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Marketing Automation & Email Campaigns
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Stop manually sending emails and follow-ups. We build intelligent marketing automation systems that nurture leads, onboard new drivers, engage carriers, and re-engage inactive contacts—all on autopilot. Our AI-powered email sequences are personalized, data-driven, and optimized for maximum engagement and conversion.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Social Media Management
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Your social media presence should reflect your brand and engage your audience—not just post for the sake of posting. We create strategic social media content, manage community engagement, and leverage AI tools to optimize posting schedules, hashtags, and creative formats. From LinkedIn thought leadership to Facebook driver recruiting, we make social media work for your business.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem", color: "#1e40af" }}>
            Analytics, Reporting & Optimization
          </h3>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            Marketing without measurement is just guessing. We provide comprehensive analytics dashboards, monthly performance reports, and actionable insights that show exactly what's working and what's not. Our AI-powered analytics identify trends, predict outcomes, and recommend optimizations—so your marketing gets smarter over time.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Why Logistics Companies Choose Atlas AI Marketing
          </h2>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Industry Expertise:</strong> We've spent over 15 years in logistics and transportation. We understand driver recruiting challenges, carrier relationship dynamics, and the competitive pressures you face. Our marketing strategies are built for your industry—not generic templates.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>AI-Powered Efficiency:</strong> Our AI-driven marketing systems automate repetitive tasks, optimize campaigns in real-time, and deliver better results with less manual effort. You get enterprise-level marketing capabilities without enterprise-level costs.
          </p>

          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "#374151" }}>
            <strong>Measurable ROI:</strong> We're not interested in vanity metrics. Every campaign is tied to business outcomes—driver applications, carrier sign-ups, customer leads, and revenue growth. You'll always know exactly what you're getting for your investment.
          </p>

          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Related Services
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem", color: "#374151" }}>
            Looking for more ways to grow your business? Explore our related services:
          </p>
          <ul style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2rem", color: "#374151", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/ai-powered-brand-systems" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                AI-Powered Brand Systems
              </Link> - Build a brand that scales with intelligence
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/thought-leadership-media" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Thought Leadership & Media Influence
              </Link> - Turn experts into industry leaders
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/services/fractional-cmo-growth-leadership" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Fractional CMO & Growth Leadership
              </Link> - Strategic marketing leadership without full-time costs
            </li>
          </ul>

          {/* Related Blog Posts */}
          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem", color: "#1e3a8a" }}>
            Related Insights
          </h2>
          <p style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem", color: "#374151" }}>
            Learn more about AI marketing strategies and logistics industry trends:
          </p>
          <ul style={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2rem", color: "#374151", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/insights" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                View All Insights
              </Link> - Explore our latest articles on AI marketing and growth
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/press" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                Press & Media
              </Link> - See our thought leadership and industry recognition
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link href="/faq" style={{ color: "#0ea5e9", textDecoration: "underline" }}>
                FAQ
              </Link> - Get answers to common questions about our services
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
              Ready to Scale Your Marketing?
            </h2>
            <p style={{ fontSize: "1.125rem", marginBottom: "2rem", color: "#374151" }}>
              Let's build an AI-driven marketing ecosystem that drives real growth for your logistics business.
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
              Schedule Your Marketing Strategy Session
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

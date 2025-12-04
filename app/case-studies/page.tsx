import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Case Studies | Proven Logistics Marketing Results | Atlas AI",
  description: "See how Atlas AI helps logistics, trucking, and freight companies achieve measurable growth through AI-powered marketing strategies. Real results, real ROI.",
  keywords: "logistics marketing case studies, trucking marketing results, freight broker success stories, AI marketing ROI, logistics marketing agency results",
  openGraph: {
    title: "Case Studies | Proven Logistics Marketing Results | Atlas AI",
    description: "Real results from logistics companies using AI-powered marketing strategies.",
    url: "https://www.atlasaimarketing.co/case-studies",
    type: "website",
  },
  alternates: {
    canonical: "https://www.atlasaimarketing.co/case-studies",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Regional Trucking Company Increases Driver Applications by 240%",
      industry: "Trucking & Transportation",
      challenge: "Struggling to attract qualified CDL-A drivers in a competitive market",
      solution: "AI-driven recruitment marketing campaign with targeted ads, automated follow-up sequences, and optimized landing pages",
      results: [
        "240% increase in driver applications",
        "67% reduction in cost-per-application",
        "Filled 18 open positions in 90 days"
      ],
      metrics: {
        metric1: "240%",
        label1: "Increase in Applications",
        metric2: "67%",
        label2: "Lower Cost-Per-Lead",
        metric3: "90 Days",
        label3: "Time to Fill Positions"
      }
    },
    {
      title: "Freight Brokerage Builds Thought Leadership & Wins $2.3M in New Business",
      industry: "Freight Brokerage",
      challenge: "Needed to differentiate from competitors and establish authority in specialized freight segments",
      solution: "Comprehensive thought leadership program including LinkedIn content strategy, industry speaking engagements, and media placements",
      results: [
        "$2.3M in new business attributed to thought leadership",
        "Featured in FreightWaves and Transport Topics",
        "Invited to speak at 3 major industry conferences"
      ],
      metrics: {
        metric1: "$2.3M",
        label1: "New Business Revenue",
        metric2: "3",
        label2: "Speaking Engagements",
        metric3: "10K+",
        label3: "LinkedIn Followers Gained"
      }
    },
    {
      title: "3PL Automates Marketing & Reduces Workload by 15 Hours/Week",
      industry: "Third-Party Logistics (3PL)",
      challenge: "Small marketing team overwhelmed with manual tasks, unable to scale campaigns",
      solution: "AI-powered marketing automation system integrating CRM, email marketing, social media, and reporting",
      results: [
        "15 hours per week saved on manual tasks",
        "3x increase in email campaign volume",
        "42% improvement in lead nurturing efficiency"
      ],
      metrics: {
        metric1: "15 Hrs",
        label1: "Weekly Time Saved",
        metric2: "3x",
        label2: "Campaign Volume",
        metric3: "42%",
        label3: "Better Lead Nurturing"
      }
    },
    {
      title: "Logistics Startup Builds Brand Identity & Launches in 6 Weeks",
      industry: "Logistics Technology",
      challenge: "New company needed professional brand identity and go-to-market strategy fast",
      solution: "AI-powered brand system development including logo, visual identity, brand voice, and initial marketing assets",
      results: [
        "Complete brand system delivered in 6 weeks",
        "Successfully launched at industry trade show",
        "Generated 120+ qualified leads at launch event"
      ],
      metrics: {
        metric1: "6 Weeks",
        label1: "Time to Market",
        metric2: "120+",
        label2: "Qualified Leads",
        metric3: "100%",
        label3: "Brand Consistency"
      }
    }
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" }
      ]} />
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to right bottom, rgb(6, 49, 109), rgb(9, 190, 252))",
          paddingTop: "100px",
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
              Proven Results for Logistics Companies
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                opacity: 0.95,
                maxWidth: "900px",
                margin: "0 auto 2rem",
                lineHeight: "1.6",
              }}
            >
              See how Atlas AI helps trucking companies, freight brokers, and 3PLs achieve measurable growth through AI-powered marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section style={{ padding: "80px 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              style={{
                marginBottom: "4rem",
                padding: "3rem",
                backgroundColor: index % 2 === 0 ? "#f9fafb" : "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div style={{ marginBottom: "0.75rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#09BEFC",
                    color: "#ffffff",
                    padding: "0.375rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  {study.industry}
                </span>
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#06316D",
                  marginBottom: "2rem",
                }}
              >
                {study.title}
              </h2>

              {/* Metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "2rem",
                  marginBottom: "2rem",
                  padding: "2rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  border: "2px solid #09BEFC",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#09BEFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {study.metrics.metric1}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 600 }}>
                    {study.metrics.label1}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#09BEFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {study.metrics.metric2}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 600 }}>
                    {study.metrics.label2}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#09BEFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {study.metrics.metric3}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 600 }}>
                    {study.metrics.label3}
                  </div>
                </div>
              </div>

              {/* Challenge, Solution, Results */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#06316D",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Challenge
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4b5563" }}>
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#06316D",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Solution
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#4b5563" }}>
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#06316D",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Results
                  </h3>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "1rem", lineHeight: 1.7, color: "#4b5563" }}>
                    {study.results.map((result, i) => (
                      <li key={i} style={{ marginBottom: "0.5rem" }}>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why These Results Matter */}
      <section style={{ padding: "80px 2rem", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#06316D",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Why These Results Matter
          </h2>
          <div style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#4b5563", maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              These case studies represent real logistics companies facing real challenges—driver shortages, competitive differentiation, operational inefficiencies, and time constraints. The common thread? They all leveraged <strong>AI-powered marketing strategies</strong> to achieve measurable results.
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              At Atlas AI, we don't believe in vanity metrics or vague promises. Every campaign is built around <strong>clear objectives</strong>, <strong>data-driven decision-making</strong>, and <strong>transparent reporting</strong>. Whether you're looking to recruit more drivers, win new shippers, build thought leadership, or automate your marketing operations, we'll create a custom strategy designed to deliver ROI.
            </p>
            <p>
              Ready to see similar results for your logistics business? <Link href="/contact" style={{ color: "#0ea5e9", textDecoration: "underline", fontWeight: 600 }}>Schedule a free consultation</Link> to discuss your goals and how we can help you achieve them.
            </p>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section style={{ padding: "80px 2rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#06316D",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Services That Drive These Results
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            <Link
              href="/services/ai-driven-marketing-growth"
              style={{
                padding: "2rem",
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                AI-Driven Marketing & Growth
              </h3>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6 }}>
                Data-backed marketing ecosystems that convert using automation, analytics, and creative strategy.
              </p>
            </Link>
            <Link
              href="/services/thought-leadership-media"
              style={{
                padding: "2rem",
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                Thought Leadership & Media
              </h3>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6 }}>
                Turn your expertise into industry influence with strategic media placements and content.
              </p>
            </Link>
            <Link
              href="/services/ai-integration-automation"
              style={{
                padding: "2rem",
                backgroundColor: "#f9fafb",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                AI Integration & Automation
              </h3>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6 }}>
                Automate repetitive marketing tasks and integrate your systems for maximum efficiency.
              </p>
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                backgroundColor: "#09BEFC",
                color: "#ffffff",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "0.875rem",
                paddingBottom: "0.875rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1.125rem",
              }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Ready to Achieve Similar Results?
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
              Schedule a free consultation to discuss your marketing goals and how AI-powered strategies can help you achieve them.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#09BEFC",
                color: "#ffffff",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1.25rem",
              }}
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

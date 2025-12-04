import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Houston AI Marketing Agency | Atlas AI Growth & Marketing",
  description: "Houston-based AI marketing agency specializing in logistics, trucking, and freight companies. Expert marketing strategies, automation, and growth systems for Texas businesses.",
  keywords: "Houston AI marketing agency, Houston logistics marketing, Texas marketing agency, Houston digital marketing, Houston trucking marketing, freight broker marketing Houston",
  openGraph: {
    title: "Houston AI Marketing Agency | Atlas AI",
    description: "Houston-based AI marketing agency for logistics and trucking companies. Serving Houston, Texas and the greater Gulf Coast region.",
    url: "https://www.atlasaimarketing.co/houston",
    type: "website",
  },
  alternates: {
    canonical: "https://www.atlasaimarketing.co/houston",
  },
};

export default function HoustonPage() {
  // LocalBusiness Schema for Houston location
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Atlas AI Growth & Marketing Agency - Houston",
    "image": "https://www.atlasaimarketing.co/og-image.jpg",
    "description": "AI-powered marketing agency serving Houston logistics, trucking, and freight companies with strategic marketing, automation, and growth systems.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7604,
      "longitude": -95.3698
    },
    "url": "https://www.atlasaimarketing.co/houston",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Houston"
      },
      {
        "@type": "State",
        "name": "Texas"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 29.7604,
        "longitude": -95.3698
      },
      "geoRadius": "100 miles"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Houston", href: "/houston" }
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
                Houston AI Marketing Agency
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
                Serving Houston's logistics, trucking, and freight companies with AI-powered marketing strategies that drive real growth.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
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
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#ffffff",
                    color: "#06316D",
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
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Atlas AI in Houston */}
        <section style={{ padding: "80px 2rem", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "2rem", textAlign: "center" }}>
              Why Houston Businesses Choose Atlas AI
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
              <div style={{ padding: "2rem", backgroundColor: "#f9fafb", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                  Logistics Industry Expertise
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#4b5563" }}>
                  We understand Houston's logistics ecosystem—from the Port of Houston to I-10 freight corridors. Our marketing strategies are built specifically for trucking companies, freight brokers, 3PLs, and warehousing operations.
                </p>
              </div>
              <div style={{ padding: "2rem", backgroundColor: "#f9fafb", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                  AI-Powered Marketing Systems
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#4b5563" }}>
                  We don't just run ads—we build intelligent marketing systems that automate repetitive tasks, optimize campaigns in real-time, and deliver measurable ROI. Get enterprise-level capabilities without enterprise-level costs.
                </p>
              </div>
              <div style={{ padding: "2rem", backgroundColor: "#f9fafb", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                  Local Presence, National Reach
                </h3>
                <p style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "#4b5563" }}>
                  Based in Houston with deep roots in the Texas logistics community, we serve clients across the Gulf Coast region and nationwide. We understand local market dynamics while leveraging national best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Houston Businesses */}
        <section style={{ padding: "80px 2rem", backgroundColor: "#f9fafb" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem", textAlign: "center" }}>
              Services for Houston Logistics Companies
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#4b5563", textAlign: "center", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              Comprehensive AI-powered marketing solutions designed for Houston's transportation and logistics industry.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              <Link
                href="/services/ai-driven-marketing-growth"
                style={{
                  padding: "2rem",
                  backgroundColor: "#ffffff",
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
                href="/services/fractional-cmo-growth-leadership"
                style={{
                  padding: "2rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "2px solid #e5e7eb",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                  Fractional CMO Services
                </h3>
                <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6 }}>
                  Executive-level marketing leadership without the full-time cost. Perfect for growing Houston logistics companies.
                </p>
              </Link>
              <Link
                href="/services/ai-powered-brand-systems"
                style={{
                  padding: "2rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "2px solid #e5e7eb",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "1rem" }}>
                  AI-Powered Brand Systems
                </h3>
                <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.6 }}>
                  Build a brand that scales with intelligence—from identity design to AI-driven brand voice.
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

        {/* Houston Logistics Market Insights */}
        <section style={{ padding: "80px 2rem", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#06316D", marginBottom: "2rem" }}>
              Marketing for Houston's Logistics Industry
            </h2>
            <div style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#4b5563" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Houston is one of the largest logistics hubs in North America, home to the <strong>Port of Houston</strong>—the nation's #1 port for foreign waterborne tonnage and a critical gateway for international trade. The city's strategic location at the intersection of major interstate highways (I-10, I-45, I-69) makes it a vital distribution center for freight moving across Texas and the southern United States.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                For Houston logistics companies, effective marketing isn't just about brand awareness—it's about <strong>driver recruitment</strong>, <strong>carrier partnerships</strong>, <strong>shipper acquisition</strong>, and <strong>operational visibility</strong>. Whether you're a trucking company competing for qualified drivers, a freight broker building your carrier network, or a 3PL expanding your shipper base, you need marketing systems that deliver measurable results.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Atlas AI specializes in helping Houston logistics businesses leverage <Link href="/services/ai-driven-marketing-growth" style={{ color: "#0ea5e9", textDecoration: "underline" }}>AI-driven marketing strategies</Link> to stand out in a competitive market. Our approach combines industry expertise, local market knowledge, and cutting-edge AI technology to build marketing systems that actually work.
              </p>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#06316D", marginTop: "2rem", marginBottom: "1rem" }}>
                Industries We Serve in Houston
              </h3>
              <ul style={{ paddingLeft: "2rem", marginBottom: "1.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>Trucking Companies & Fleet Operators</li>
                <li style={{ marginBottom: "0.5rem" }}>Freight Brokerages & 3PLs</li>
                <li style={{ marginBottom: "0.5rem" }}>Warehousing & Distribution Centers</li>
                <li style={{ marginBottom: "0.5rem" }}>Port Services & Drayage Operators</li>
                <li style={{ marginBottom: "0.5rem" }}>Supply Chain Consultants</li>
                <li style={{ marginBottom: "0.5rem" }}>Logistics Technology Providers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to Grow Your Houston Logistics Business?
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
                Schedule a free consultation to discuss how AI-powered marketing can help your Houston company attract more drivers, carriers, and shippers.
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

import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About | Atlas AI Growth & Marketing Agency",
  description: "Learn about Atlas AI Growth & Marketing Agency - AI-powered marketing solutions for logistics and service-based businesses. Led by Kameel E. Gaines, Chief AI Marketing Strategist.",
  keywords: "Atlas AI, Kameel Gaines, AI marketing agency, logistics marketing, transportation marketing, Forbes Business Council",
  openGraph: {
    title: "About Atlas AI Growth & Marketing Agency",
    description: "AI-powered marketing solutions for logistics and service-based businesses. Led by Kameel E. Gaines, Forbes Business Council Member and 2025 Top Woman to Watch in Transportation.",
    url: "https://www.atlasaimarketing.co/about",
    type: "website",
    images: [
      {
        url: "https://www.atlasaimarketing.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas AI Growth & Marketing Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Atlas AI Growth & Marketing Agency",
    description: "AI-powered marketing solutions for logistics and service-based businesses.",
    images: ["https://www.atlasaimarketing.co/og-image.jpg"]
  },
  alternates: {
    canonical: 'https://www.atlasaimarketing.co/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" }
      ]} />
      
      <div style={{ padding: "6rem 2rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#001F54", marginBottom: "2rem" }}>
          About Atlas AI Growth & Marketing Agency
        </h1>
        
        <div style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#555" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Atlas AI Growth & Marketing Agency</strong> was built with one clear intention: to give service-based, logistics, and transportation companies the tools, systems, and strategy they need to grow in a world powered by artificial intelligence. Our agency brings together marketing, technology, and real industry experience to help businesses streamline operations, elevate their brand presence, and unlock consistent, measurable results.
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Companies today don't just need content. They don't just need ads. They need integrated <Link href="/services" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>AI-powered systems</Link> that think, learn, and adapt. That's where Atlas AI steps in. We help modern, ambitious companies move past outdated marketing and into a structure that makes growth predictable.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            Our Approach
          </h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            We blend AI technology with real-world strategy to build solutions that feel human, communicate clearly, and convert consistently. Every system we build is grounded in three pillars:
          </p>
          
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
            <li style={{ marginBottom: "0.75rem" }}><strong>Clarity</strong> – clean messaging, intentional branding, and a strong identity</li>
            <li style={{ marginBottom: "0.75rem" }}><strong>Precision</strong> – smart automation, efficient workflows, and data-backed decisions</li>
            <li style={{ marginBottom: "0.75rem" }}><strong>Growth</strong> – long-term systems that reduce effort while increasing return</li>
          </ul>
          
          <p style={{ marginBottom: "1.5rem" }}>
            We build with purpose, using AI as the engine and strategy as the driver. Explore our <Link href="/insights" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>insights and resources</Link> to learn more about AI-powered marketing.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            What Makes Atlas AI Different
          </h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Most agencies sell services.<br />
            <strong>Atlas AI builds systems.</strong>
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Our work is designed to help companies:
          </p>
          
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>Stand out in competitive markets</li>
            <li style={{ marginBottom: "0.75rem" }}>Automate key marketing and engagement tasks</li>
            <li style={{ marginBottom: "0.75rem" }}>Improve lead quality and conversion rates</li>
            <li style={{ marginBottom: "0.75rem" }}>Strengthen branding and digital identity</li>
            <li style={{ marginBottom: "0.75rem" }}>Scale without adding unnecessary complexity</li>
          </ul>
          
          <p style={{ marginBottom: "1.5rem" }}>
            We focus on the foundational elements companies need to grow: <Link href="/services" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>branding and messaging systems</Link>, marketing infrastructure, and AI-enhanced communication tools.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            The Industries We Serve
          </h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Although our work spans multiple sectors, our deepest expertise is in:
          </p>
          
          <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>Logistics and transportation</li>
            <li style={{ marginBottom: "0.75rem" }}>Service-based industries</li>
            <li style={{ marginBottom: "0.75rem" }}>High-risk and compliance-heavy industries</li>
            <li style={{ marginBottom: "0.75rem" }}>Companies undergoing digital transformation</li>
          </ul>
          
          <p style={{ marginBottom: "1.5rem" }}>
            These spaces require accuracy, compliance awareness, strong branding, and high trust. Our systems are built with those real-world demands in mind. Learn more about our <Link href="/case-studies" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>proven results</Link> working with logistics companies.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            Our Commitment
          </h2>
          
          <p style={{ marginBottom: "1.5rem", fontStyle: "italic", fontSize: "1.25rem", color: "#001F54" }}>
            Make growth easier for the companies that keep America moving.
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            We build with intention.<br />
            We simplify complexity.<br />
            We prioritize systems that scale.
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Atlas AI exists to help businesses grow with confidence, clarity, and smarter strategies.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            Leadership & Strategic Direction
          </h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Led by Kameel E. Gaines</strong><br />
            <em>Founder & Chief AI Marketing Strategist</em>
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Atlas AI is guided by the leadership of Kameel E. Gaines, whose background in logistics, <Link href="/services" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>AI marketing strategy</Link>, recruiting, and brand development shaped the agency's foundation. Her strategic oversight ensures that every system, every build, and every client solution is rooted in industry-specific insight and built to drive meaningful results.
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            Media & Recognition
          </h2>
          
          <p style={{ marginBottom: "1.5rem" }}>
            Kameel E. Gaines is a recognized thought leader in AI marketing, logistics innovation, and diversity in transportation. Her expertise and insights have been featured in leading industry publications and platforms.
          </p>

          <div style={{ backgroundColor: "#f9fafb", padding: "2rem", borderRadius: "8px", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
              Awards & Honors
            </h3>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "2rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>2025 Top Women to Watch in Transportation</strong> – Women in Trucking Association
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Forbes Business Council Member</strong> – Exclusive invitation-only community for successful business leaders (2023-Present)
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Former Co-Chairwoman</strong> – African American Women's Trucking Association
              </li>
            </ul>

            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem", marginTop: "2rem" }}>
              Featured In
            </h3>
            <ul style={{ marginBottom: "0", paddingLeft: "2rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Forbes</strong> – Published 10+ thought leadership articles on AI marketing, logistics innovation, and workforce development
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>FreightWaves</strong> – Featured in multiple articles and "Taking the Hire Road" video series
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Let's Talk Supply Chain Podcast</strong> – Women in Supply Chain™ episode featuring career journey and industry insights
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>The Inside Lane</strong> – Industry voice feature on female leadership transforming trucking
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>National Transportation Institute</strong> – Featured interview on driver recruiting and retention strategies
              </li>
            </ul>
          </div>

          <p style={{ marginBottom: "1.5rem" }}>
            <Link href="/press" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "600" }}>View full press coverage and media appearances →</Link>
          </p>

          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginTop: "3rem", marginBottom: "1.5rem" }}>
            Continue Exploring Atlas AI
          </h2>
          
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <Link 
              href="/services" 
              style={{ 
                padding: "0.75rem 1.5rem", 
                backgroundColor: "#007BFF", 
                color: "#fff", 
                textDecoration: "none", 
                borderRadius: "4px",
                fontWeight: "600"
              }}
            >
              View Our Services
            </Link>
            <Link 
              href="/contact" 
              style={{ 
                padding: "0.75rem 1.5rem", 
                backgroundColor: "#001F54", 
                color: "#fff", 
                textDecoration: "none", 
                borderRadius: "4px",
                fontWeight: "600"
              }}
            >
              Contact Our Team
            </Link>
            <Link 
              href="/" 
              style={{ 
                padding: "0.75rem 1.5rem", 
                border: "2px solid #001F54", 
                color: "#001F54", 
                textDecoration: "none", 
                borderRadius: "4px",
                fontWeight: "600"
              }}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Founder Authority & Recognition */}
      <div style={{ padding: "4rem 2rem", backgroundColor: "#f8f9fa", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
            Recognized by Leading Industry Organizations
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
            Kameel E. Gaines is trusted by top logistics and business organizations worldwide.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            alignItems: "center",
            justifyItems: "center"
          }}>
            <img src="/assets/trust-logos/forbes-business-council.png" alt="Forbes Business Council" style={{ width: "120px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/freightwaves.png" alt="FreightWaves" style={{ width: "140px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/women-in-trucking.png" alt="Women In Trucking Association" style={{ width: "120px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/aawta.jpg" alt="African American Women Trucking Association" style={{ width: "100px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/tmsa.jpg" alt="TMSA" style={{ width: "120px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/modex-2024.jpg" alt="MODEX 2024" style={{ width: "140px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/motive-vision.png" alt="Motive Vision Conference" style={{ width: "120px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/manifest.jpg" alt="Manifest Conference" style={{ width: "100px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/wreaths-across-america-radio.jpg" alt="Wreaths Across America Radio" style={{ width: "120px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/hd-screening-lab.jpg" alt="HD Screening Lab" style={{ width: "100px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
            <img src="/assets/trust-logos/atg-recruit.jpg" alt="ATG Solutions" style={{ width: "100px", height: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7 }} />
          </div>
        </div>
      </div>
    </main>
  );
}

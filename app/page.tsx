"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        paddingTop: "8rem",
        paddingBottom: "6rem",
        background: "linear-gradient(135deg, #001F54 0%, #003d82 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.2" }}>
            Where Industry Expertise Meets AI Innovation
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", opacity: 0.9, maxWidth: "900px", margin: "0 auto 3rem" }}>
            <strong>Atlas AI Growth & Marketing Agency</strong> helps logistics and service-based businesses grow through AI-powered branding, marketing, and automation systems.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link 
              href="https://calendly.com/atlasaimarketing-info/30min" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#00BFFF",
                color: "#001F54",
                padding: "1rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.125rem"
              }}
            >
              Schedule a Call
            </Link>
            <Link 
              href="/about" 
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.125rem",
                border: "2px solid rgba(255,255,255,0.3)"
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do - 6 Pillar Grid */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
              What We Do
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#666" }}>
              Comprehensive AI-powered solutions for modern logistics and service businesses
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                image: "/assets/brand-systems.png",
                title: "AI-Powered Brand Systems",
                description: "Brand systems that think: from identity design to AI-driven brand voice and visual frameworks."
              },
              {
                image: "/assets/marketing-growth.png",
                title: "AI-Driven Marketing & Growth",
                description: "Data-backed marketing ecosystems that convert using automation, analytics, and creative strategy."
              },
              {
                image: "/assets/thought-leadership.png",
                title: "Thought Leadership & Media Influence",
                description: "Turn experts into thought leaders with ghostwriting, media placement, and AI storytelling systems."
              },
              {
                image: "/assets/ai-integration.png",
                title: "AI Integration & Automation",
                description: "Connect your business systems into seamless digital workflows with CRMs, analytics, and intelligent agents."
              },
              {
                image: "/assets/fractional-cmo.png",
                title: "Fractional CMO & Growth Leadership",
                description: "Access AI-driven strategic marketing leadership without full-time costs."
              },
              {
                image: "/assets/team-training.png",
                title: "Team Training & AI Enablement",
                description: "Train your team to use AI with confidence through workshops, SOPs, and live enablement systems."
              }
            ].map((pillar, index) => (
              <Link key={index} href={`/services#${pillar.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} style={{ textDecoration: "none" }}>
                <div className="pillar-card" style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%"
                }}>
                  <Image 
                    src={pillar.image}
                    alt={pillar.title}
                    width={400} 
                    height={300}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                  <div style={{ padding: "1.5rem" }}>
                    <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.6" }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1.5rem" }}>
            Your Partner in the Age of AI
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#555", lineHeight: "1.8", marginBottom: "1rem" }}>
            Atlas AI is a growth and marketing agency dedicated to helping logistics, supply chain, and service-based companies modernize, scale, and automate their brand in the new era of artificial intelligence. We blend over 15 years of real-world experience in truck driver recruiting and logistics operations with cutting-edge AI innovation to deliver practical, results-driven solutions that give your business a competitive edge.
          </p>
          <p style={{ fontSize: "1.125rem", color: "#555", lineHeight: "1.8" }}>
            We are more than just a marketing agency; we are your strategic partner in growth. Our unique approach is built on three core pillars that ensure we deliver not just results, but a sustainable blueprint for your future success.
          </p>
        </div>
      </section>

      {/* The Atlas Advantage */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#001F54", textAlign: "center", marginBottom: "4rem" }}>
            The Atlas Advantage
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem"
          }}>
            {[
              { number: "1", title: "AI That Works", description: "Practical automation that drives measurable results." },
              { number: "2", title: "Industry Expertise", description: "15+ years in trucking and logistics." },
              { number: "3", title: "Future-Ready Systems", description: "Systems built for today, designed for tomorrow." }
            ].map((advantage, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#00BFFF",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem"
                }}>
                  {advantage.number}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
                  {advantage.title}
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #0D47A1 0%, #123469 50%, #001f3f 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3
        }}></div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center"
          }}>
            <div>
              <Image 
                src="/assets/founder.png" 
                alt="Kameel E. Gaines" 
                width={400} 
                height={400}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                Meet Kameel E. Gaines
              </h2>
              <p style={{ fontSize: "1.25rem", color: "#00BFFF", fontWeight: 600, marginBottom: "1.5rem" }}>
                Founder & Chief AI Marketing & Growth Strategist
              </p>
              <blockquote style={{
                fontSize: "1.125rem",
                fontStyle: "italic",
                borderLeft: "4px solid #00BFFF",
                paddingLeft: "1.5rem",
                marginBottom: "1.5rem",
                opacity: 0.9
              }}>
                "A global leader in logistics, marketing, and AI innovation; helping companies bridge experience with intelligent growth systems."
              </blockquote>
              <p style={{ marginBottom: "1rem", lineHeight: "1.8" }}>
                With over 15 years in logistics and transportation and more than 20 years in marketing and sales, Kameel E. Gaines brings a rare blend of operational depth, creative strategy, and technological foresight to every Atlas AI engagement.
              </p>
              <p style={{ marginBottom: "1rem", lineHeight: "1.8" }}>
                As the Founder & Chief AI Marketing & Growth Strategist, Kameel has helped carriers, agencies, and service-based companies modernize their brands, automate their marketing, and scale profitably using AI systems.
              </p>
              <p style={{ marginBottom: "2rem", lineHeight: "1.8" }}>
                She's also the creator and host of The Rig on Wheels Show, a leading industry podcast exploring recruitment, retention, DEI, and technology in trucking. Recognized as a Top Woman to Watch in Transportation (2025) by Women in Trucking Magazine, Kameel is redefining what leadership looks like at the intersection of logistics and innovation.
              </p>
              <Link 
                href="/contact" 
                style={{
                  display: "inline-block",
                  backgroundColor: "#00BFFF",
                  color: "#001F54",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                Learn How Kameel Can Help Your Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section style={{
        padding: "4rem 2rem",
        backgroundColor: "#f8f9fa",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontSize: "1rem",
            color: "#666",
            marginBottom: "2.5rem",
            fontWeight: 500
          }}>
            Led by a strategist trusted by organizations such as:
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            alignItems: "center",
            justifyItems: "center"
          }}>
            <Image 
              src="/assets/trust-logos/forbes-business-council.png" 
              alt="Forbes Business Council" 
              width={120} 
              height={120}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/women-in-trucking.png" 
              alt="Women In Trucking Association" 
              width={120} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/aawta.jpg" 
              alt="African American Women Trucking Association" 
              width={100} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/tmsa.jpg" 
              alt="TMSA - Transportation Marketing & Sales Association" 
              width={120} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/mats.png" 
              alt="Mid America Trucking Show" 
              width={120} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/modex.png" 
              alt="MODEX" 
              width={120} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/motive-vision.png" 
              alt="Motive Vision Conference" 
              width={120} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
            <Image 
              src="/assets/trust-logos/manifest.jpg" 
              alt="Manifest Conference" 
              width={100} 
              height={100}
              style={{ objectFit: "contain", filter: "grayscale(100%)", opacity: 0.7, transition: "all 0.3s" }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #001F54 0%, #003d82 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Let's Build the Future of Your Brand
          </h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "1rem", opacity: 0.9 }}>
            Prefer to start with a discovery email? Contact us at{" "}
            <a href="mailto:info@atlasaimarketing.co" style={{ color: "#00BFFF", textDecoration: "none" }}>
              info@atlasaimarketing.co
            </a>
          </p>
          <Link 
            href="https://calendly.com/atlasaimarketing-info/30min" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#00BFFF",
              color: "#001F54",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1.125rem",
              marginTop: "1rem"
            }}
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <style jsx>{`
        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 31, 84, 0.15) !important;
        }
      `}</style>
    </main>
  );
}


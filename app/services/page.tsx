import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "AI-Powered Brand Systems",
      tagline: "Atlas AI builds brand systems that think: from identity design to AI-driven brand voice and visual frameworks that grow with your business.",
      description: "Whether you're launching a new brand, repositioning an existing one, or modernizing your identity for the AI era, we create comprehensive brand systems that are intelligent, scalable, and deeply rooted in your industry expertise.",
      image: "/assets/brand-systems.png",
      features: [
        "Brand strategy and positioning",
        "Visual identity design and guidelines",
        "AI-driven brand voice development",
        "Website development and digital presence"
      ],
      bgColor: "white"
    },
    {
      title: "AI-Driven Marketing & Growth",
      tagline: "We design and optimize data-backed marketing ecosystems that convert using automation, analytics, and creative strategy.",
      description: "Our marketing systems work 24/7 to scale your visibility, engage your audience, and generate qualified leads. We combine strategic thinking with AI-powered execution to deliver measurable growth.",
      image: "/assets/marketing-growth.png",
      features: [
        "Marketing automation and workflows",
        "Content strategy and creation",
        "Lead generation systems",
        "Analytics, reporting, and optimization"
      ],
      bgColor: "#f9f9f9"
    },
    {
      title: "Thought Leadership & Media Influence",
      tagline: "Full-service ghostwriting, authority building, and content amplification. We turn experts into thought leaders with end-to-end writing, media placement, and AI storytelling systems.",
      description: "For founders and executives ready to become the face of their brand, we help you build authority and influence in the logistics and service industries through strategic content, media relations, and speaking opportunities.",
      image: "/assets/thought-leadership.png",
      features: [
        "Personal brand development",
        "Executive ghostwriting and content creation",
        "Media relations and PR placement",
        "Speaking opportunities and podcast bookings"
      ],
      bgColor: "white"
    },
    {
      title: "AI Integration & Automation",
      tagline: "We connect your business systems into seamless digital workflows. Includes CRMs, analytics, bots, and intelligent agents.",
      description: "From customer relationship management to intelligent automation, we build the technical infrastructure that powers modern, efficient businesses. Our solutions integrate with your existing tools and scale with your growth.",
      image: "/assets/ai-integration.png",
      features: [
        "CRM integration and optimization",
        "Analytics dashboards and reporting",
        "Workflow automation",
        "AI bots and intelligent agents"
      ],
      bgColor: "#f9f9f9",
      subsection: {
        title: "AI Bots & Intelligent Agents",
        description: "Custom-built voice and chat agents for recruiting, insurance, and sales. Our intelligent agents handle customer inquiries, qualify leads, schedule appointments, and provide 24/7 support, all while learning and improving over time."
      }
    },
    {
      title: "Fractional CMO & Growth Leadership",
      tagline: "Access AI-driven strategic marketing leadership without full-time costs.",
      description: "Get executive-level marketing strategy and leadership on a flexible, fractional basis. Perfect for growing companies that need senior marketing expertise but aren't ready for a full-time CMO. We provide strategic direction, team leadership, and growth planning powered by AI insights.",
      image: "/assets/fractional-cmo.png",
      features: [
        "Strategic marketing planning and execution",
        "Marketing team leadership and development",
        "Growth strategy and roadmap creation",
        "Budget optimization and ROI tracking"
      ],
      bgColor: "white"
    },
    {
      title: "Team Training & AI Enablement",
      tagline: "We train your team to use AI with confidence through workshops, SOPs, and live enablement systems.",
      description: "Empower your team to leverage AI tools effectively and efficiently. Our training programs are hands-on, practical, and tailored to your industry and business needs. We don't just teach theory; we build capabilities that drive immediate results.",
      image: "/assets/team-training.png",
      features: [
        "Custom AI workshops and training sessions",
        "Standard operating procedures (SOPs) development",
        "Live enablement and ongoing support",
        "AI tool selection and implementation guidance"
      ],
      bgColor: "#f9f9f9"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        background: "linear-gradient(135deg, #001F54 0%, #003d82 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Our Services
          </h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            From brand creation to AI integration, Atlas AI delivers strategy and systems that drive measurable growth.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section 
          key={index} 
          id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
          style={{ backgroundColor: service.bgColor, padding: "6rem 2rem", scrollMarginTop: "80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              gap: "4rem",
              alignItems: "center"
            }}>
              {/* Image - Left for even, Right for odd */}
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                />
              </div>

              {/* Content - Right for even, Left for odd */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1.5rem" }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: "1.125rem", color: "#333", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                  {service.tagline}
                </p>
                <p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem", lineHeight: "1.8" }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: "0.75rem", display: "flex", alignItems: "start" }}>
                      <span style={{ color: "#00BFFF", marginRight: "0.75rem", fontSize: "1.25rem" }}>✓</span>
                      <span style={{ color: "#555" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subsection for AI Integration */}
                {service.subsection && (
                  <div style={{
                    marginTop: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
                  }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#001F54", marginBottom: "1rem" }}>
                      {service.subsection.title}
                    </h3>
                    <p style={{ color: "#666", lineHeight: "1.8" }}>
                      {service.subsection.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #001F54 0%, #003d82 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.9 }}>
            Schedule a complimentary strategy call to discuss your goals.
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
              fontSize: "1.125rem"
            }}
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </main>
  );
}


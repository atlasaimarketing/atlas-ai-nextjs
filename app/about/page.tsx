import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Atlas AI Growth & Marketing Agency",
  description: "Learn about Atlas AI Growth & Marketing Agency - AI-powered marketing solutions for logistics and service-based businesses. Led by Kameel E. Gaines, Chief AI Marketing Strategist.",
};

export default function About() {
  return (
    <main style={{ padding: "6rem 2rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#001F54", marginBottom: "2rem", textAlign: "center" }}>
          About Atlas AI Growth & Marketing Agency
        </h1>
        <div style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#555" }}>
          <p style={{ marginBottom: "1.5rem" }}>
            <strong>Atlas AI Growth & Marketing Agency</strong> is a growth and marketing agency dedicated to helping logistics, supply chain, and service-based companies modernize, scale, and automate their brand in the new era of artificial intelligence.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            We blend over 15 years of real-world experience in truck driver recruiting and logistics operations with cutting-edge AI innovation to deliver practical, results-driven solutions that give your business a competitive edge.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Led by <strong>Kameel E. Gaines</strong>, Founder & Chief AI Marketing Strategist, our agency brings together marketing, technology, and real industry experience to help businesses streamline operations, elevate their brand presence, and unlock consistent, measurable results.
          </p>
        </div>
      </div>
    </main>
  );
}

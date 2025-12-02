import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#001f3f",
      color: "white",
      padding: "3rem 2rem 2rem",
      marginTop: "4rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        {/* Company Info */}
        <div>
          <Image 
            src="/assets/logo.png" 
            alt="Atlas AI" 
            width={60} 
            height={60}
            style={{ marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
            <strong>Atlas AI Growth & Marketing Agency</strong><br />
            Spring, Texas<br />
            <a href="mailto:info@atlasaimarketing.co" style={{ color: "#00BFFF", textDecoration: "none" }}>info@atlasaimarketing.co</a><br />
            <a href="tel:+18325839000" style={{ color: "#00BFFF", textDecoration: "none" }}>(832) 583-9000</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Quick Links</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/" style={{ color: "#00BFFF", textDecoration: "none" }}>Home</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>Services</Link>
            <Link href="/about" style={{ color: "#00BFFF", textDecoration: "none" }}>About</Link>
            <Link href="/insights" style={{ color: "#00BFFF", textDecoration: "none" }}>Insights</Link>
            <Link href="/qa" style={{ color: "#00BFFF", textDecoration: "none" }}>Q&A</Link>
            <Link href="/contact" style={{ color: "#00BFFF", textDecoration: "none" }}>Contact</Link>
            <Link href="/privacy" style={{ color: "#00BFFF", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "#00BFFF", textDecoration: "none" }}>Terms</Link>
            <Link href="/cookies" style={{ color: "#00BFFF", textDecoration: "none" }}>Cookies</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Services</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>AI-Powered Brand Systems</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>AI-Driven Marketing & Growth</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>Thought Leadership & Media Influence</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>AI Integration & Automation</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>Fractional CMO & Growth Leadership</Link>
            <Link href="/services" style={{ color: "#00BFFF", textDecoration: "none" }}>Team Training & AI Enablement</Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Connect</h3>
          <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Email: <a href="mailto:info@atlasaimarketing.co" style={{ color: "#00BFFF", textDecoration: "none" }}>info@atlasaimarketing.co</a>
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Phone: <a href="tel:832-583-9000" style={{ color: "#00BFFF", textDecoration: "none" }}>832-583-9000</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "1.5rem",
        textAlign: "center",
        fontSize: "0.85rem",
        color: "rgba(255,255,255,0.7)"
      }}>
        © 2025 Atlas AI Growth & Marketing Agency. Where Industry Expertise Meets AI Innovation.
      </div>
    </footer>
  );
}


export default function Page() {
  return (
    <main style={{ padding: "6rem 2rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#001F54", marginBottom: "2rem", textAlign: "center" }}>
          Contact Us
        </h1>
        <div style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#555" }}>
          <p style={{ marginBottom: "2rem", textAlign: "center" }}>
            Ready to transform your business with AI-powered marketing and growth strategies?
          </p>
          <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "2rem", color: "#001F54", marginBottom: "1rem" }}>Get in Touch</h2>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Email: <a href="mailto:info@atlasaimarketing.co" style={{ color: "#00BFFF", textDecoration: "none" }}>info@atlasaimarketing.co</a>
            </p>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Phone: <a href="tel:832-583-9000" style={{ color: "#00BFFF", textDecoration: "none" }}>832-583-9000</a>
            </p>
            <p style={{ color: "#666" }}>We'll respond within 24 hours</p>
          </div>
        </div>
      </div>
    </main>
  );
}

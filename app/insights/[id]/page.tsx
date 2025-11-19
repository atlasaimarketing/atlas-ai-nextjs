"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <main style={{ padding: "6rem 2rem", minHeight: "60vh", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", color: "#001F54" }}>Post Not Found</h1>
        <Link href="/insights" style={{ color: "#00BFFF", textDecoration: "underline" }}>
          ← Back to Insights
        </Link>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #001F54 0%, #123469 50%, #001f3f 100%)",
        color: "white",
        padding: "6rem 2rem 3rem"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Back Link */}
          <Link
            href="/insights"
            style={{
              color: "white",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "2rem",
              opacity: 0.9,
              fontSize: "0.95rem"
            }}
          >
            ← Back to Insights
          </Link>

          {/* Category and Date */}
          <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap"
          }}>
            <span style={{
              backgroundColor: "#00BFFF",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem"
            }}>
              {post.category}
            </span>
            <span style={{ opacity: 0.8 }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            lineHeight: "1.2"
          }}>
            {post.title}
          </h1>

          {/* Author */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#00BFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: "600" }}>{post.author}</div>
              <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Founder & Chief AI Marketing Strategist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ padding: "0 2rem" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "-4rem auto 0",
          position: "relative",
          zIndex: 10
        }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
          />
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: "4rem 2rem" }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#333"
        }}>
          {/* Render content with proper formatting */}
          {post.content.split('\n\n').map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#001F54",
                  marginTop: "3rem",
                  marginBottom: "1.5rem"
                }}>
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#001F54",
                  marginTop: "2rem",
                  marginBottom: "1rem"
                }}>
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            // Handle bold text with **
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: "#001F54"
                }}>
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            // Regular paragraphs
            return (
              <p key={index} style={{ marginBottom: "1.5rem" }}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* CTA Section */}
      <section style={{
        backgroundColor: "#f9f9f9",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#001F54",
            marginBottom: "1rem"
          }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "2rem"
          }}>
            Let's discuss how Atlas AI can help you achieve your growth goals with AI-powered strategies.
          </p>
          <Link
            href="https://calendly.com/atlasaimarketing-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#00BFFF",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "background-color 0.3s ease",
              marginRight: "1rem"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0099cc"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#00BFFF"}
          >
            Schedule a Call
          </Link>
          <Link
            href="/insights"
            style={{
              display: "inline-block",
              backgroundColor: "white",
              color: "#001F54",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              border: "2px solid #001F54",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#001F54";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#001F54";
            }}
          >
            More Insights
          </Link>
        </div>
      </section>
    </main>
  );
}


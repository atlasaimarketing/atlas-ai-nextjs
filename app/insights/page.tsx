"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function Insights() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #001F54 0%, #123469 50%, #001f3f 100%)",
        color: "white",
        padding: "6rem 2rem 4rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem"
          }}>
            Insights & Resources
          </h1>
          <p style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Expert insights on AI, marketing, logistics, and business growth from the Atlas AI team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem"
          }}>
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                {/* Post Image */}
                <div style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0"
                }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>

                {/* Post Content */}
                <div style={{ padding: "1.5rem" }}>
                  {/* Category and Date */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                    fontSize: "0.85rem",
                    color: "#666"
                  }}>
                    <span style={{
                      backgroundColor: "#00BFFF",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}>
                      {post.category}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#001F54",
                    marginBottom: "0.75rem",
                    lineHeight: "1.3"
                  }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: "1.6",
                    marginBottom: "1rem"
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Author and Read More */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1rem",
                    borderTop: "1px solid #eee"
                  }}>
                    <span style={{ fontSize: "0.9rem", color: "#666" }}>
                      By {post.author}
                    </span>
                    <span style={{
                      color: "#00BFFF",
                      fontWeight: "600",
                      fontSize: "0.9rem"
                    }}>
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            Want to Stay Updated?
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: "2rem"
          }}>
            Get the latest insights on AI, marketing, and business growth delivered to your inbox.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#00BFFF",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "background-color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0099cc"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#00BFFF"}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}


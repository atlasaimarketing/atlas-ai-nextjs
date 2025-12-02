"use client";

import Link from "next/link";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Add breadcrumb schema to page
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://www.atlasaimarketing.co${item.href}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    script.id = 'breadcrumb-schema';
    
    // Remove existing breadcrumb schema if present
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      document.head.removeChild(existing);
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-schema');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" style={{
      padding: "1rem 2rem",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #e9ecef"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ol style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "0.875rem"
        }}>
          {items.map((item, index) => (
            <li key={index} style={{
              display: "flex",
              alignItems: "center"
            }}>
              {index > 0 && (
                <span style={{
                  margin: "0 0.5rem",
                  color: "#6c757d"
                }}>
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span style={{
                  color: "#6c757d",
                  fontWeight: 500
                }}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: "#0ea5e9",
                    textDecoration: "none",
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      zIndex: 1000,
      padding: "1rem 0"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image 
            src="/assets/logo.png" 
            alt="Atlas AI" 
            width={50} 
            height={50}
            style={{ marginRight: "0.5rem" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          <Link href="/" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>Home</Link>
          <Link href="/services" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>Services</Link>
          <Link href="/about" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>About</Link>
          <Link href="/insights" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>Insights</Link>
          <Link href="/press" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>Press</Link>
          <Link href="/qa" style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>Q&A</Link>
          <Link 
            href="https://calendly.com/atlasaimarketing-info/30min" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#00BFFF",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s"
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem"
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          <div style={{ width: "25px", height: "3px", backgroundColor: "#003366", margin: "5px 0" }}></div>
          <div style={{ width: "25px", height: "3px", backgroundColor: "#003366", margin: "5px 0" }}></div>
          <div style={{ width: "25px", height: "3px", backgroundColor: "#003366", margin: "5px 0" }}></div>
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }} className="mobile-menu">
            <Link href="/" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>Home</Link>
            <Link href="/services" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>Services</Link>
            <Link href="/about" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>About</Link>
            <Link href="/insights" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>Insights</Link>
            <Link href="/press" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>Press</Link>
            <Link href="/qa" style={{ color: "#003366", textDecoration: "none", padding: "0.5rem" }}>Q&A</Link>
            <Link href="https://calendly.com/atlasaimarketing-info/30min" target="_blank" rel="noopener noreferrer" style={{ color: "#00BFFF", textDecoration: "none", padding: "0.5rem", fontWeight: 600 }}>Get Started</Link>
          </div>
        )}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}


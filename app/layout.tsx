import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.atlasaimarketing.co'),
  title: "Atlas AI Growth & Marketing Agency | AI Marketing for Logistics Companies",
  description: "Atlas AI Growth & Marketing Agency provides AI-powered marketing, branding, and automation solutions for logistics and service-based businesses in Houston, Texas.",
  keywords: ["AI marketing", "logistics marketing", "supply chain", "brand development", "marketing automation", "fractional CMO", "thought leadership", "Houston marketing agency"],
  authors: [{ name: "Atlas AI Growth & Marketing Agency" }],
  alternates: {
    canonical: 'https://www.atlasaimarketing.co',
  },
  openGraph: {
    title: "Atlas AI Growth & Marketing Agency | AI Marketing for Logistics",
    description: "AI-powered marketing solutions for logistics companies. Transform your business with intelligent automation and strategic growth systems.",
    type: "website",
    url: 'https://www.atlasaimarketing.co',
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas AI Growth & Marketing Agency | AI Marketing for Logistics",
    description: "AI-powered marketing solutions for logistics companies in Houston, Texas.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atlas AI Growth & Marketing Agency",
    "alternateName": "Atlas AI",
    "url": "https://www.atlasaimarketing.co",
    "logo": "https://www.atlasaimarketing.co/assets/logo.png",
    "description": "AI-powered marketing, branding, and automation solutions for logistics and service-based businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Spring",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-832-583-9000",
      "contactType": "customer service",
      "email": "info@atlasaimarketing.co",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "founder": {
      "@type": "Person",
      "name": "Kameel E. Gaines",
      "jobTitle": "Founder & Chief AI Marketing Strategist"
    },
    "sameAs": [
      "https://www.linkedin.com/company/atlas-ai-marketing"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Atlas AI Growth & Marketing Agency",
    "image": "https://www.atlasaimarketing.co/assets/logo.png",
    "@id": "https://www.atlasaimarketing.co",
    "url": "https://www.atlasaimarketing.co",
    "telephone": "+1-832-583-9000",
    "email": "info@atlasaimarketing.co",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Spring",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "description": "AI-powered marketing, branding, and automation solutions for logistics and service-based businesses in Houston, Texas."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}


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
  title: "Atlas AI - Where Industry Expertise Meets AI Innovation",
  description: "AI-powered growth and marketing agency for logistics, supply chain, and service companies. We help businesses modernize, scale, and automate their brand in the age of AI.",
  keywords: ["AI marketing", "logistics", "supply chain", "brand development", "marketing automation", "fractional CMO", "thought leadership"],
  authors: [{ name: "Atlas AI Growth & Marketing Agency" }],
  openGraph: {
    title: "Atlas AI - Where Industry Expertise Meets AI Innovation",
    description: "AI-powered growth and marketing agency for logistics, supply chain, and service companies.",
    type: "website",
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas AI - Where Industry Expertise Meets AI Innovation",
    description: "AI-powered growth and marketing agency for logistics, supply chain, and service companies.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}


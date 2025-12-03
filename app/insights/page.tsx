"use client";

import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blogData";
import { useState } from "react";

export default function Insights() {
  const blogPosts = getAllBlogPosts();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      // Call our secure API route instead of Brevo directly
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message || "🎉 Success! You're subscribed to our newsletter." });
        setEmail("");
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#06316D] via-[#0a4a9e] to-[#06316D] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore how AI is transforming logistics, marketing, and business growth. 
              Expert insights from Atlas AI to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#09BEFC] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-[#06316D] mb-3 group-hover:text-[#09BEFC] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-base text-gray-600 mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-[#09BEFC] font-semibold group-hover:text-[#06316D] transition-colors mt-auto">
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Author */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-sm text-gray-600">By {post.author}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Get the latest strategies, case studies, and actionable insights delivered to your inbox. 
              Join logistics leaders who are transforming their businesses with AI.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 text-base rounded-lg text-gray-900 placeholder:text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-[#09BEFC] disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-semibold px-8 py-4 rounded-lg whitespace-nowrap transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>
              
              {message && (
                <div className={`mt-6 p-4 rounded-lg text-center ${message.type === "success" ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
                  {message.text}
                </div>
              )}
            </form>
            
            <p className="text-sm text-blue-200 mt-6">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06316D] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-[#06316D] text-white font-semibold text-base px-10 py-4 rounded-lg transition-colors"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

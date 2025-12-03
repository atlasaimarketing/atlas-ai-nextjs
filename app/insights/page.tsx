import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blogData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Thought Leadership | Atlas AI Growth & Marketing Agency",
  description: "Explore how AI is transforming logistics, marketing, and business growth. Expert insights from Atlas AI to help you stay ahead of the curve.",
  alternates: {
    canonical: "https://www.atlasaimarketing.co/insights"
  }
};

export default function Insights() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#06316D] via-[#0a4a9e] to-[#06316D] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Thought Leadership
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore how AI is transforming logistics, marketing, and business growth. 
              Expert insights from Atlas AI to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100 h-full">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden aspect-[16/9] w-full">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-[#09BEFC] text-white text-xs font-semibold rounded-full shadow-lg">
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
                      <h2 className="text-lg md:text-xl font-bold text-[#06316D] mb-3 group-hover:text-[#09BEFC] transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-[#09BEFC] font-semibold group-hover:text-[#06316D] transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Author */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-sm text-gray-600 font-medium">{post.author}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get the latest strategies, case studies, and actionable insights delivered to your inbox. 
              Join logistics leaders who are transforming their businesses with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#09BEFC]"
              />
              <button 
                className="w-full sm:w-auto bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-semibold px-8 py-4 rounded-lg whitespace-nowrap transition-colors"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06316D] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-[#06316D] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

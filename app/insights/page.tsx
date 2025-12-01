import type { Metadata } from "next";

import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insights & Resources | Atlas AI Growth & Marketing Agency",
  description: "Industry insights, AI strategies, and growth tips from Atlas AI Growth & Marketing Agency for logistics and service-based companies.",
};

export default function Insights() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#06316D] via-[#0A4A8F] to-[#001F54] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Expert insights on AI, marketing, logistics, and business growth from the <strong>Atlas AI Growth & Marketing Agency</strong> team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Featured Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Reading Time */}
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="px-3 py-1 bg-[#09BEFC]/10 text-[#06316D] rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.readingTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#09BEFC] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06316D] to-[#09BEFC] flex items-center justify-center text-white font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center text-[#09BEFC] font-semibold group-hover:gap-2 transition-all">
                    Read Article
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#06316D] to-[#001F54] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Atlas AI Marketing can help you achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#09BEFC] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#07A8E0] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}

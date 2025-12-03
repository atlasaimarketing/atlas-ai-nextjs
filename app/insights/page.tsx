import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { getAllBlogPosts } from "@/sanity/lib/queries";
import NewsletterForm from "./NewsletterForm";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Insights() {
  const blogPosts = await getAllBlogPosts();

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
            {blogPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post) => (
                  <Link key={post._id} href={`/insights/${post.slug.current}`} className="group">
                    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                      {/* Featured Image */}
                      {post.featuredImage && (
                        <div className="relative overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            style={{ objectPosition: 'center 20%' }}
                          />
                          {post.category && (
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-[#09BEFC] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                                {post.category}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Title */}
                        <h2 className="text-lg font-bold text-[#06316D] mb-3 group-hover:text-[#09BEFC] transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          {post.readingTime && (
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              <span>{post.readingTime}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                        <p className="text-xs text-gray-600">By {post.author}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
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
            
            <NewsletterForm />
            
            <p className="text-sm text-blue-200 mt-6">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#06316D] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-[#06316D] text-white font-bold text-base md:text-lg px-12 py-5 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

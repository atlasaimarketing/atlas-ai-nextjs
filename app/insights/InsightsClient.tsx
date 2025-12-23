"use client";

import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import NewsletterForm from "./NewsletterForm";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  category: string;
  publishDate: string;
  readingTime: string;
  excerpt: string;
  featuredImage: string;
}

export default function InsightsClient() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        setBlogPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const categories = ["All", "MARKETING LEADERSHIP", "CASE STUDIES", "AI MARKETING", "CULTURE & RETENTION", "WORKFORCE MANAGEMENT", "BRAND STRATEGY"];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === category));
    }
  };

  const featuredPost = filteredPosts[0];
  const recentPosts = filteredPosts.slice(1, 9);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#06316D] via-[#0a4a9e] to-[#06316D] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center">
              Insights & Thought Leadership
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-center">
              Explore how AI is transforming logistics, marketing, and business growth. 
              Expert insights from Atlas AI Growth & Marketing Agency to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-[#06316D] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="py-32 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#06316D] border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading insights...</p>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="py-32 text-center">
          <p className="text-xl text-gray-600">No articles found in this category.</p>
        </div>
      ) : (
        <>
          {/* Featured Post Section */}
          {featuredPost && (
            <section className="py-16 md:py-24 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Featured Article</h2>
                  <Link href={`/insights/${featuredPost.slug.current}`} className="group">
                    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-full min-h-[400px]">
                          <img
                            src={featuredPost.featuredImage}
                            alt={featuredPost.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{ objectPosition: 'center 30%' }}
                          />
                          {featuredPost.category && (
                            <div className="absolute top-6 left-6">
                              <span className="px-4 py-2 bg-[#09BEFC] text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg">
                                {featuredPost.category}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-[#06316D] transition-colors leading-tight">
                            {featuredPost.title}
                          </h3>
                          
                          <p className="text-lg text-gray-700 mb-8 leading-relaxed line-clamp-3">
                            {featuredPost.excerpt}
                          </p>

                          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(featuredPost.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            {featuredPost.readingTime && (
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{featuredPost.readingTime}</span>
                              </div>
                            )}
                          </div>

                          <div className="pt-6 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-900">By {featuredPost.author}</p>
                          </div>

                          <div className="mt-8">
                            <span className="inline-flex items-center text-[#06316D] font-semibold group-hover:text-[#09BEFC] transition-colors">
                              Read Full Article
                              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Recent Posts Grid */}
          {recentPosts.length > 0 && (
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Recent Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {recentPosts.map((post) => (
                      <Link key={post._id} href={`/insights/${post.slug.current}`} className="group">
                        <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                          {/* Featured Image */}
                          {post.featuredImage && (
                            <div className="relative overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                              <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                style={{ objectPosition: 'center 30%' }}
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
                          <div className="p-6 flex-1 flex flex-col">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#06316D] transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed flex-1">
                              {post.excerpt}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
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
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700">By {post.author}</p>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Get the latest strategies, case studies, and actionable insights delivered to your inbox. 
              Join logistics leaders who are transforming their businesses with AI.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20 md:py-28 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-[#06316D] text-white font-bold text-lg px-12 py-5 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

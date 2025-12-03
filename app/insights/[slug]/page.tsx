import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/sanity/lib/queries";
import { PortableText } from '@portabletext/react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#06316D] mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/insights" className="inline-flex items-center bg-[#09BEFC] hover:bg-[#06316D] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://www.atlasaimarketing.co/insights/${post.slug.current}`;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#06316D] via-[#0a4a9e] to-[#06316D] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/insights" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
            
            {post.category && (
              <div className="mb-6">
                <span className="px-4 py-2 bg-[#09BEFC] text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                {post.subtitle}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readingTime}</span>
                </div>
              )}
              <div className="text-blue-100">
                By {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="relative w-full" style={{ height: '400px' }}>
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-xl text-gray-700 mb-12 pb-12 border-b border-gray-200 italic">
                {post.excerpt}
              </div>
            )}

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={post.content}
                components={{
                  block: {
                    normal: ({children}) => <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>,
                    h2: ({children}) => <h2 className="text-2xl md:text-3xl font-bold text-[#06316D] mt-12 mb-6">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl md:text-2xl font-bold text-[#06316D] mt-10 mb-5">{children}</h3>,
                  },
                  marks: {
                    strong: ({children}) => <strong className="font-bold text-[#06316D]">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>,
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-[#06316D] mb-6 flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              Share This Article
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-bold text-lg px-12 py-5 rounded-lg transition-colors shadow-lg"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

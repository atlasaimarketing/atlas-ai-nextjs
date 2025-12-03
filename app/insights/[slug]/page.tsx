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
      {/* Hero Section with Featured Image and Overlay */}
      <section className="relative w-full h-[600px] md:h-[700px]">
        {/* Featured Image Background */}
        {post.featuredImage && (
          <div className="absolute inset-0">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
          </div>
        )}
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-4xl">
              {/* Back Link */}
              <Link 
                href="/insights" 
                className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Link>
              
              {/* White Content Box */}
              <div className="bg-white p-8 md:p-12 shadow-2xl max-w-3xl">
                {post.category && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#09BEFC] text-white text-xs font-semibold rounded uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                )}
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                
                {post.subtitle && (
                  <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                    {post.subtitle}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-gray-200 pt-6">
                  <div className="font-medium text-gray-900">
                    By {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={post.content}
                components={{
                  block: {
                    normal: ({children}) => (
                      <p className="text-lg text-gray-800 leading-relaxed mb-8 font-light">
                        {children}
                      </p>
                    ),
                    h2: ({children}) => (
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 leading-tight">
                        {children}
                      </h2>
                    ),
                    h3: ({children}) => (
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
                        {children}
                      </h3>
                    ),
                  },
                  marks: {
                    strong: ({children}) => (
                      <strong className="font-bold text-gray-900">{children}</strong>
                    ),
                    em: ({children}) => (
                      <em className="italic text-gray-700">{children}</em>
                    ),
                  },
                  list: {
                    bullet: ({children}) => (
                      <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-gray-800">
                        {children}
                      </ul>
                    ),
                    number: ({children}) => (
                      <ol className="list-decimal list-inside mb-8 space-y-3 text-lg text-gray-800">
                        {children}
                      </ol>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Share2 className="h-5 w-5 text-[#06316D]" />
              Share This Article
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white px-6 py-3 rounded-md transition-colors font-medium"
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
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-bold text-lg px-12 py-5 rounded-md transition-all shadow-lg hover:shadow-xl"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

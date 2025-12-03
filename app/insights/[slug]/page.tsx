import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, type BlogSection } from "@/lib/blogData";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

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

  const shareUrl = `https://www.atlasaimarketing.co/insights/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  const renderSection = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const level = section.level || 2;
        const className = `font-bold text-[#06316D] mb-4 ${
          level === 2 ? 'text-3xl mt-12' : 'text-2xl mt-8'
        }`;
        
        if (level === 2) {
          return <h2 key={index} className={className}>{section.content as string}</h2>;
        } else if (level === 3) {
          return <h3 key={index} className={className}>{section.content as string}</h3>;
        } else {
          return <h4 key={index} className={className}>{section.content as string}</h4>;
        }
      
      case 'paragraph':
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
            {section.content as string}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-3 mb-6 text-lg text-gray-700">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#09BEFC] pl-6 py-4 my-8 italic text-xl text-gray-600 bg-blue-50 rounded-r-lg">
            {section.content as string}
          </blockquote>
        );
      
      case 'callout':
        return (
          <div key={index} className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] text-white p-8 rounded-lg my-8 shadow-lg">
            <p className="text-lg font-semibold leading-relaxed">
              {section.content as string}
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link href="/insights" className="inline-flex items-center text-[#09BEFC] hover:text-[#06316D] font-semibold transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Insights
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-[#09BEFC] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#06316D] mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                {post.subtitle}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime}</span>
              </div>
              <div className="font-semibold text-[#06316D]">
                {post.author}
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share:
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#165ed4] transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.map((section, index) => renderSection(section, index))}
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#06316D] mb-4">About the Author</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>{post.author.replace('By ', '')}</strong> is the founder of Atlas AI Growth & Marketing Agency, 
                specializing in AI-powered marketing strategies for logistics and transportation companies.
              </p>
              <a
                href="https://calendly.com/atlasaimarketing-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#09BEFC] hover:bg-[#06316D] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Schedule a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#06316D] mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/insights/${relatedPost.slug}`}>
                    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-lg font-bold text-[#06316D] mb-2 group-hover:text-[#09BEFC] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#06316D] to-[#0a4a9e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how Atlas AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your 30-Minute Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

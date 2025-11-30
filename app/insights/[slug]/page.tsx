import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, type BlogSection } from "@/lib/blogData";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  const relatedPosts = getRelatedPosts(params.slug, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold text-[#06316D] mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/insights">
            <Button className="bg-[#09BEFC] hover:bg-[#06316D] text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (section: BlogSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          2: 'text-3xl font-bold text-[#06316D] mt-12 mb-6 leading-tight',
          3: 'text-2xl font-semibold text-[#06316D] mt-10 mb-4 leading-tight',
          4: 'text-xl font-semibold text-[#06316D] mt-8 mb-3 leading-tight'
        };
        return (
          <HeadingTag key={index} className={headingClasses[section.level as 2 | 3 | 4]}>
            {section.content as string}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
            {section.content as string}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6 ml-6">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="text-lg text-gray-700 leading-relaxed flex items-start">
                <span className="text-[#09BEFC] mr-3 mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#09BEFC] bg-gradient-to-r from-blue-50 to-transparent pl-6 pr-6 py-6 my-8 italic text-xl text-[#06316D] leading-relaxed">
            {section.content as string}
          </blockquote>
        );

      case 'callout':
        return (
          <div key={index} className="bg-gradient-to-r from-[#06316D] to-[#0a4a9e] text-white rounded-lg p-6 my-8 shadow-lg">
            <p className="text-lg leading-relaxed font-medium">
              {section.content as string}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#06316D] via-[#0a4a9e] to-[#06316D] text-white">
        <div className="container py-16">
          <Link href="/insights">
            <Button variant="ghost" className="text-white hover:text-[#09BEFC] hover:bg-white/10 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-1.5 bg-[#09BEFC] text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-blue-100">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readingTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                {post.subtitle}
              </p>
            )}

            <p className="text-blue-100 font-medium">{post.author}</p>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container -mt-8 mb-12">
        <div className="max-w-5xl mx-auto">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Social Share */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Share</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#0077B5]" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => renderContent(section, index))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#06316D] to-[#0a4a9e] rounded-xl p-8 md:p-12 text-center text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can help you achieve measurable growth and competitive advantage.
            </p>
            <a
              href="https://calendly.com/atlasaimarketing-info/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#09BEFC] hover:bg-white hover:text-[#06316D] text-white font-semibold px-8 py-6 text-lg">
                Book Your 30-Minute Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#06316D] mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/insights/${relatedPost.slug}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[#09BEFC]/10 text-[#06316D] text-xs font-semibold rounded-full">
                            {relatedPost.category}
                          </span>
                          <span className="text-xs text-gray-500">{relatedPost.readingTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#06316D] mb-3 group-hover:text-[#09BEFC] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500">{relatedPost.publishDate}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

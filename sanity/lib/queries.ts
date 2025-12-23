import { client } from './client'

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  featuredImage?: string
  category: string
  publishDate: string
  readingTime?: string
  excerpt: string
  subtitle?: string
  content: any[]
  published: boolean
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && published == true && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    "featuredImage": featuredImage.asset->url,
    category,
    "publishDate": publishedAt,
    "readingTime": "5 min read",
    excerpt,
    content,
    published
  }`

  try {
    const posts = await client.fetch(query)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && defined(slug.current)][0] {
    _id,
    title,
    slug,
    author,
    "featuredImage": featuredImage.asset->url,
    category,
    "publishDate": publishedAt,
    "readingTime": "5 min read",
    excerpt,
    content,
    published
  }`

  try {
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

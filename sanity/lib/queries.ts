import { client } from './client'

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  author: string
  featuredImage?: {
    asset: {
      url: string
    }
  }
  category: string
  publishDate: string
  readingTime: string
  excerpt: string
  subtitle?: string
  content: any[]
  published: boolean
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && published == true] | order(publishDate desc) {
    _id,
    title,
    slug,
    author,
    "featuredImage": featuredImage.asset->url,
    category,
    publishDate,
    readingTime,
    excerpt,
    subtitle,
    content,
    published
  }`
  
  return client.fetch(query)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    author,
    "featuredImage": featuredImage.asset->url,
    category,
    publishDate,
    readingTime,
    excerpt,
    subtitle,
    content,
    published
  }`
  
  return client.fetch(query, { slug })
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const query = `*[_type == "post" && slug.current != $currentSlug && published == true] | order(publishDate desc) [0...$limit] {
    _id,
    title,
    slug,
    author,
    "featuredImage": featuredImage.asset->url,
    category,
    publishDate,
    readingTime,
    excerpt,
    published
  }`
  
  return client.fetch(query, { currentSlug, limit })
}

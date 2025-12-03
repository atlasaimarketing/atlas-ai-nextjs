import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'yg2mmobl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for better performance
})

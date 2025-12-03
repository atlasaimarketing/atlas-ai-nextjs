import { Metadata } from 'next';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
  title: 'Insights & Thought Leadership | Atlas AI Growth & Marketing Agency',
  description: 'Expert insights on AI-powered marketing, logistics transformation, and business growth strategies. Learn how Atlas AI helps companies leverage artificial intelligence for measurable results.',
  keywords: 'AI marketing insights, logistics AI, fractional CMO, business growth strategies, marketing automation, AI consulting, logistics technology, transportation marketing, supply chain AI, trucking industry marketing',
  openGraph: {
    title: 'Insights & Thought Leadership | Atlas AI Growth & Marketing Agency',
    description: 'Expert insights on AI-powered marketing, logistics transformation, and business growth strategies.',
    url: 'https://www.atlasaimarketing.co/insights',
    siteName: 'Atlas AI Growth & Marketing Agency',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights & Thought Leadership | Atlas AI',
    description: 'Expert insights on AI-powered marketing and logistics transformation.',
  },
  alternates: {
    canonical: 'https://www.atlasaimarketing.co/insights',
  },
};

export default function Insights() {
  return <InsightsClient />;
}

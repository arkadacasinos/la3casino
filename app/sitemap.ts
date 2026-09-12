import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://la3casino.vercel.app/', lastModified: new Date('2026-09-13'), changeFrequency: 'monthly', priority: 1 }]
}

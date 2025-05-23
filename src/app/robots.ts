import { MetadataRoute } from 'next'
import { siteUrl } from '@/config/constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/news',
          '/news/*',
        ],
        disallow: [
          '/admin/*',
          '/api/*',
          '/private/*',
          '/draft/*',
          '/*?*', // Prevent crawling of URLs with query parameters
          '/*/preview', // Prevent crawling of preview pages
          '/*.json', // Prevent crawling of JSON files
        ],
      },
      {
        userAgent: 'Google-Extended',
        allow: [
          '/',
          '/news/*',
        ],
        disallow: ['/admin/*', '/api/*'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 
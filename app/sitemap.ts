import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xchecho.com';

  const slugs: string[] = [];
  const enMessages = require('@/messages/en.json');
  const projects = enMessages.projects.items as { slug: string }[];
  for (const project of projects) {
    if (!slugs.includes(project.slug)) {
      slugs.push(project.slug);
    }
  }

  const localeUrls = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: locale === 'en' ? 1 : 0.8,
    },
    ...slugs.map((slug) => ({
      url: `${baseUrl}/${locale}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...localeUrls,
  ];
}

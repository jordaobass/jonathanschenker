import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jonathanschenker.com';

  return [
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}

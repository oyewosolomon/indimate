const siteUrl = 'https://intimateweddingsbyfave.com';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}

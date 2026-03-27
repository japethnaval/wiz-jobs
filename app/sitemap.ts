import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wizjobs.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/employer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/candidate`,
      lastModified: new Date(),
    },
  ];
}
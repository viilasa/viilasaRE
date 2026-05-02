import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

/**
 * @see https://viilasa.com/sitemap.xml — submit this URL in Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

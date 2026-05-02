import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

/** Submit `https://viilasa.com/sitemap.xml` in Google Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}

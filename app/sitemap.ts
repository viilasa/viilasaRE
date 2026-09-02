import type { MetadataRoute } from "next";

import { getSiteUrl, SITEMAP_ROUTES } from "@/lib/seo";

/** Submit `https://viilasa.com/sitemap.xml` in Google Search Console. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return SITEMAP_ROUTES.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

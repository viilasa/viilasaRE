import type { MetadataRoute } from "next";

import { SEO_DESCRIPTION, SEO_TITLE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_TITLE,
    short_name: "Viilasa",
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en-AE",
    icons: [
      {
        src: "/viilasa-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

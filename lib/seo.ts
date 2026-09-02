/**
 * Canonical site URL for SEO, OG, JSON-LD, sitemap — must be absolute HTTPS in prod.
 *
 * Prefer `NEXT_PUBLIC_SITE_URL` in `.env.local` / Vercel. On **Vercel production** with no env,
 * this falls back to the live domain https://viilasa.com
 */

export const PRODUCTION_SITE_URL = "https://viilasa.com";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return "http://localhost:3000";
}

export function getAbsoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Primary SERP title — lead qualifier + automation + UAE geo. */
export const SEO_TITLE =
  "Viilasa · WhatsApp Lead Qualifier & Real Estate Automation UAE";

/** Meta description — 150–160 chars, keyword-rich, CTA. */
export const SEO_DESCRIPTION =
  "WhatsApp lead qualifier & real estate automation for Dubai & UAE brokerages. Filter buyers by budget, area & timeline before they reach your phone. Book a demo.";

export const SITE_TAGLINE = SEO_DESCRIPTION;

/** Dubai / UAE focus — primary market for lead qualification automation. */
export const GEO_PRIMARY_CITY = "Dubai";
export const GEO_COUNTRY = "United Arab Emirates";
export const GEO_COUNTRY_CODE = "AE";
export const GEO_REGION_CODE = "AE-DU";
export const GEO_LATITUDE = 25.204849;
export const GEO_LONGITUDE = 55.270782;

/** Cities / emirates served — used in JSON-LD areaServed + llms.txt. */
export const GEO_SERVED_AREAS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "United Arab Emirates",
] as const;

/**
 * Target queries: “lead qualifier”, “automation”, “WhatsApp bot”, UAE/Dubai real estate.
 * Keep in sync with on-page copy (hero, services, FAQ).
 */
export const SEO_KEYWORDS = [
  "lead qualifier",
  "real estate lead qualifier",
  "WhatsApp lead qualifier",
  "lead qualification automation",
  "real estate automation",
  "real estate automation UAE",
  "Dubai real estate automation",
  "UAE real estate lead qualification",
  "WhatsApp automation real estate",
  "WhatsApp AI for real estate agents",
  "real estate WhatsApp bot",
  "real estate WhatsApp bot UAE",
  "Dubai brokerage lead qualification",
  "property lead qualifier Dubai",
  "real estate inquiry automation",
  "brokerage automation UAE",
  "off-plan lead qualification Dubai",
  "Viilasa",
] as const;

/** Primary product name for schema + llms.txt. */
export const PRIMARY_SERVICE_NAME = "WhatsApp Lead Qualifier for Real Estate";

export const PRIMARY_SERVICE_DESCRIPTION =
  "Automated WhatsApp lead qualification for UAE real-estate teams. Captures budget, area, timeline, and intent — then routes hot leads to agents with full context.";

/** Indexable routes for sitemap.xml */
export const SITEMAP_ROUTES = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
] as const;

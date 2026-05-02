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

/** Primary SERP positioning + long-tail builders you care about. */
export const SEO_KEYWORDS = [
  "real estate website builder",
  "real estate web design agency",
  "luxury real estate website design",
  "brokerage website design Dubai",
  "property developer website design",
  "MLS real estate website",
  "off-plan property website UAE",
  "real estate agency website redesign",
  "dark luxury website design real estate",
  "Viilasa",
] as const;

export const SITE_TAGLINE =
  "Premium real estate website builder and luxury web design for brokerages & developers — fast launches, WhatsApp‑ready bookings. Dubai‑calibre sites, worldwide delivery.";

/** Dubai / UAE focus from brand direction; Worldwide = remote clients accepted. */
export const GEO_PRIMARY_CITY = "Dubai";
export const GEO_REGION_CODE = "AE-DU"; // UAE, Dubai Emirate

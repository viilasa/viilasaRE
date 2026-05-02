/**
 * Canonical site URL for SEO, OG, JSON-LD, sitemap — must be absolute HTTPS in prod.
 */

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return raw.replace(/\/$/, "");
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

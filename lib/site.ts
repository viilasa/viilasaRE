/** Public env — set in `.env.local` for production */

export const DEFAULT_CONTACT_EMAIL = "surya@viilasa.com";

/**
 * Public contact email (OG metadata, JSON-LD, footer, contact block).
 * Override with `NEXT_PUBLIC_CONTACT_EMAIL` in Vercel / `.env.local`.
 */
export function getContactEmail(): string {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL
  );
}

/**
 * Cal.com event URL — e.g. `https://cal.com/yourusername/30min`.
 * Do not use the Cal API key here; booking links are always a public HTTPS URL.
 * Set `NEXT_PUBLIC_CAL_BOOKING_URL` in production.
 */
export function getCalBookingUrl() {
  return (
    process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
    "https://cal.com/viilasa"
  );
}

/**
 * Fallback when env is unset — +91 with 8668968265 (`wa.me` needs full country code).
 * Override with `NEXT_PUBLIC_WHATSAPP_URL` or `NEXT_PUBLIC_WHATSAPP_PHONE`.
 */
const DEFAULT_WHATSAPP_E164_DIGITS = "918668968265";

export function getWhatsAppUrl() {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim();
  if (direct) return direct;
  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") ||
    DEFAULT_WHATSAPP_E164_DIGITS;
  return `https://wa.me/${phone}?text=${encodeURIComponent("Hi Viilasa — I'd like to book a strategy call.")}`;
}

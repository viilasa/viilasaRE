/** Public env — set in `.env.local` for production */

/**
 * Fallback when env is unset — +91 with 8668968265 (`wa.me` needs full country code).
 * Override with `NEXT_PUBLIC_WHATSAPP_URL` or `NEXT_PUBLIC_WHATSAPP_PHONE`.
 */
const DEFAULT_WHATSAPP_E164_DIGITS = "918668968265";

export function getCalBookingUrl() {
  return (
    process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
    "https://cal.com/"
  );
}

export function getWhatsAppUrl() {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim();
  if (direct) return direct;
  const phone =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "") ||
    DEFAULT_WHATSAPP_E164_DIGITS;
  return `https://wa.me/${phone}?text=${encodeURIComponent("Hi Viilasa — I'd like to book a strategy call.")}`;
}

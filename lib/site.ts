/** Public env — set in `.env.local` for production */

export function getCalBookingUrl() {
  return (
    process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim() ||
    "https://cal.com/"
  );
}

export function getWhatsAppUrl() {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim();
  if (direct) return direct;
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");
  if (phone)
    return `https://wa.me/${phone}?text=${encodeURIComponent("Hi Viilasa — I'd like to book a strategy call.")}`;
  return "https://wa.me/?text=Hi%20Viilasa";
}

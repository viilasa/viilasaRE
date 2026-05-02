"use client";

import { MessageCircle } from "lucide-react";

type WhatsAppFabProps = {
  href: string;
};

export function WhatsAppFab({ href }: WhatsAppFabProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/90 bg-canvas shadow-lg shadow-black/40 transition-[transform,border-color,box-shadow] duration-200 hover:scale-[1.04] hover:border-gold md:bottom-8 md:right-8"
      aria-label="WhatsApp Viilasa — message me"
    >
      <MessageCircle className="h-7 w-7 text-gold" strokeWidth={1.75} aria-hidden />
    </a>
  );
}

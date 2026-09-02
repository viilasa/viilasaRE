"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/site-logo";

const NAV = [
  { label: "How it works", href: "#how" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stroke/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-5 md:h-[100px] md:gap-6 md:px-6">
        <SiteLogo onNavigate={() => setOpen(false)} />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] uppercase tracking-[0.08em] text-body transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-gold px-5 py-2.5 text-[14px] font-medium uppercase tracking-[0.12em] text-canvas transition-transform duration-200 hover:scale-[1.02] hover:brightness-110"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-stroke text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-stroke md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-4 sm:px-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-[14px] uppercase tracking-[0.08em] text-body"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-xl bg-gold px-5 py-3 text-center text-[14px] font-medium uppercase tracking-[0.12em] text-canvas"
            onClick={() => setOpen(false)}
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}

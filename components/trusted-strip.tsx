import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";

/**
 * Trusted-by strip — duplicate items for seamless CSS marquee (no JS).
 */

const NAMES = [
  "Agate‑style residences",
  "Off‑plan specialists",
  "Boutique brokerages",
  "Developer studios",
  "Luxury leasing teams",
];

export function TrustedStrip() {
  const row = [...NAMES, ...NAMES];

  return (
    <SectionShell
      sectionClassName="!py-12 md:!py-14"
      aria-label="Audience fit"
    >
      <SectionLabel className="block text-center md:text-left">Built for teams like</SectionLabel>
      <div className="relative mt-6 overflow-hidden md:mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent" />
        <div className="flex w-max animate-marquee gap-12 md:gap-16">
          {row.map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="whitespace-nowrap text-[14px] font-medium uppercase tracking-[0.12em] text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

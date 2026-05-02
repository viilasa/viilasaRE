import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

const QUOTES = [
  {
    quote:
      "We finally stopped apologizing for our website on investor calls—loads fast, reads expensive, bookings actually show up.",
    name: "Principal broker",
    org: "Dubai resale collective",
  },
  {
    quote:
      "No theater—just timelines, typography, and a build that survives Lighthouse on a dusty Android.",
    name: "Marketing lead",
    org: "Off‑plan studio",
  },
] as const;

export function TestimonialsSection() {
  return (
    <SectionShell id="trust">
      <FadeIn>
        <SectionLabel>Proof</SectionLabel>
        <h2 className="mt-4 max-w-[640px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          Two principals. No carousel.
        </h2>
      </FadeIn>
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
        {QUOTES.map((t, i) => (
          <FadeIn key={t.name} delayMs={i * 120}>
            <blockquote className="rounded-xl border border-stroke bg-elevated p-8">
              <p className="text-[17px] font-light leading-[1.7] text-body">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-stroke pt-6">
                <p className="text-[15px] font-medium text-ink">{t.name}</p>
                <p className="mt-1 text-[14px] font-light text-muted">{t.org}</p>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

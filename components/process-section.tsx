import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

const STEPS = [
  {
    step: "01",
    title: "Discovery call",
    text: "We align on positioning, audiences, listings vs developments, and your non‑negotiables.",
  },
  {
    step: "02",
    title: "Structure & art direction",
    text: "IA, typography, and dark‑luxury system applied—mockups before we touch production.",
  },
  {
    step: "03",
    title: "Build & launch",
    text: "Next.js‑fast implementation, tracked forms, analytics, WhatsApp routing, and QA on real devices.",
  },
  {
    step: "04",
    title: "Handoff",
    text: "Loom walkthrough plus light documentation so your team owns day‑to‑day updates.",
  },
] as const;

export function ProcessSection() {
  return (
    <SectionShell id="process">
      <FadeIn>
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-4 max-w-[640px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          A calm sequence—no circus, no rework loops.
        </h2>
      </FadeIn>
      <ol className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
        {STEPS.map((row, i) => (
          <li key={row.step} className="min-w-0">
            <FadeIn delayMs={i * 80} className="flex gap-5">
              <span className="font-heading text-3xl font-semibold tabular-nums text-muted">
                {row.step}
              </span>
              <div>
                <h3 className="font-body text-[18px] font-medium leading-snug text-ink md:text-xl">
                  {row.title}
                </h3>
                <p className="mt-3 max-w-[560px] text-[16px] font-light leading-[1.7] text-body">
                  {row.text}
                </p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

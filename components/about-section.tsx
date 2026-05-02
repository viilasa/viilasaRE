import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:items-center md:gap-16">
        <FadeIn>
          <div className="mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-xl border border-stroke bg-elevated md:mx-0">
            {/* Replace with Image + real headshot when available */}
            <div
              className="flex h-full w-full flex-col justify-end bg-elevated-alt p-6 ring-1 ring-inset ring-stroke"
              aria-hidden
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Replace with portrait
              </p>
              <p className="mt-2 font-heading text-2xl text-ink">Your host</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delayMs={80}>
          <SectionLabel>About Viilasa</SectionLabel>
          <h2 className="mt-4 font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
            Real‑estate websites, treated like product—not templates.
          </h2>
          <div className="mt-6 max-w-[680px] space-y-5 text-[16px] font-light leading-[1.7] text-body">
            <p>
              Viilasa exists for operators who sell million‑dirham decisions on a phone screen.
              My job is simple: translate that standard of care into a site that loads fast,
              feels expensive, and points every section to one action—talk to you.
            </p>
            <p>
              If you’d rather see a face and hear cadence first, drop a Loom embed here. It’s
              not decoration—it’s trust.
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionShell>
  );
}

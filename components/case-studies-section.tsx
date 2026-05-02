import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

/**
 * Portfolio placeholders until real browser mockups exist.
 */

const CASES = [
  {
    title: "Riverfront duplex launch",
    tag: "Off‑plan",
    metric: "28% uplift in qualified leads (90 days)",
    offset: false,
  },
  {
    title: "Luxury resale collective",
    tag: "Boutique brokerage",
    metric: "< 2.0 s load on mid‑tier 4G",
    offset: true,
  },
] as const;

export function CaseStudiesSection() {
  return (
    <SectionShell id="work" altBg>
      <FadeIn>
        <SectionLabel>Recent work</SectionLabel>
        <h2 className="mt-4 max-w-[640px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          Case studies framed like the product you ship.
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
          Replace placeholders with layered browser mockups (Shots / Figma)—dark canvas makes
          the UI chrome pop instantly.
        </p>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-16 md:gap-24">
        {CASES.map((c, index) => (
          <FadeIn key={c.title} delayMs={index * 120}>
            <article
              className={`grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 ${
                c.offset ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative mx-auto w-full max-w-[640px] md:mx-0">
                <div className="rounded-xl border border-stroke bg-black/35 p-2 shadow-2xl shadow-black/55 ring-1 ring-white/[0.04]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 rounded-t-[10px] border-b border-stroke bg-elevated px-3 py-2">
                    <span className="h-3 w-3 rounded-full bg-[#505050]" />
                    <span className="h-3 w-3 rounded-full bg-[#3a3a3a]" />
                    <span className="h-3 w-3 rounded-full bg-[#2f2f2f]" />
                    <span className="ml-4 flex h-7 flex-1 items-center rounded-md bg-canvas px-3 text-[11px] text-muted">
                      viilasa.example / {c.tag.replace(/\s/g, "").toLowerCase()}
                    </span>
                  </div>
                  {/* Viewport placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-b-[8px] bg-elevated-alt">
                    <div
                      className="absolute inset-0 opacity-[0.22] bg-[repeating-linear-gradient(135deg,var(--color-stroke)_0_1px,transparent_1px_22px)]"
                      aria-hidden
                    />
                    <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                      <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
                        {c.tag}
                      </p>
                      <p className="mt-3 font-heading text-2xl leading-tight text-ink md:text-3xl">
                        {c.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${c.offset ? "md:pr-10" : "md:pl-6"} max-w-[560px]`}>
                <p className="font-heading text-3xl font-medium text-ink">{c.metric}</p>
                <p className="mt-5 text-[16px] font-light leading-[1.7] text-body">
                  Narrative beats decoration: restrained typography, restrained motion, ruthless
                  performance budget—so principals trust the build before scrolling to fees.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-gold underline-offset-8 transition-colors hover:text-ink hover:underline"
                >
                  Discuss a similar build
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

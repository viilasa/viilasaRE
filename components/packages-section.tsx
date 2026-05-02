import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";
import { getCalBookingUrl } from "@/lib/site";
import { ButtonCta } from "@/components/button-cta";

type PackageTier = {
  name: string;
  price: string;
  blurb: string;
  bullets: readonly string[];
  popular?: boolean;
};

const PACKAGES: PackageTier[] = [
  {
    name: "Launch",
    price: "From $1,500",
    blurb: "Single high‑impact landing + lead capture for one development or agent brand.",
    bullets: ["Dark luxury art direction", "Speed‑first build", "Cal / WhatsApp wiring"],
  },
  {
    name: "Growth",
    price: "From $3,200",
    blurb: "Multi‑section site with case studies, listings template, and CRM‑ready forms.",
    bullets: ["CMS‑ready structure", "3–5 tailored sections", "Performance budget locked"],
    popular: true,
  },
  {
    name: "Signature",
    price: "Custom",
    blurb: "Bespoke IA, copy support, and deeper integrations for established brokerages.",
    bullets: ["Custom component set", "Priority turnaround", "Ongoing refinement block"],
  },
];

export function PackagesSection() {
  const calUrl = getCalBookingUrl();

  return (
    <SectionShell id="packages" altBg>
      <FadeIn>
        <SectionLabel>Packages</SectionLabel>
        <h2 className="mt-4 max-w-[720px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          Clear pricing. No retainers unless you want them.
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
          Fixed scopes keep us fast. You get the same dark‑luxury system every time—tuned
          to your market, not rebuilt from scratch.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <FadeIn
            key={p.name}
            delayMs={i * 100}
            className={`relative flex flex-col rounded-xl border border-stroke bg-elevated p-8 shadow-none transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/35 ${
              p.popular ? "ring-1 ring-gold/40 md:-translate-y-1 md:shadow-xl md:shadow-black/40" : ""
            }`}
          >
            {p.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-canvas">
                Most popular
              </span>
            )}
            <h3 className="font-heading text-2xl font-medium text-ink">{p.name}</h3>
            <p className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink">
              {p.price}
            </p>
            <p className="mt-4 text-[15px] font-light leading-[1.65] text-body">
              {p.blurb}
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-[15px] font-light leading-[1.6] text-body">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold/80" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonCta external href={calUrl} className="w-full sm:w-auto">
                Book a strategy call
              </ButtonCta>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

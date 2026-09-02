import { Clock, Filter, MessageSquare, Smartphone } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";
import { getCalBookingUrl } from "@/lib/site";
import { ButtonCta } from "@/components/button-cta";

const SERVICES = [
  {
    icon: Clock,
    title: "24/7 first reply",
    text: "No lead waits until you're back online — every inquiry gets an instant response.",
  },
  {
    icon: Filter,
    title: "Smart qualification",
    text: "Budget, area, timeline, and intent captured before a single minute of your time.",
  },
  {
    icon: MessageSquare,
    title: "Hot-lead handoff",
    text: "Qualified buyers reach you on WhatsApp with full context — ready to close.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Business ready",
    text: "Plugs into your existing number — no new app for your team to learn.",
  },
] as const;

export function ServicesSection() {
  const calUrl = getCalBookingUrl();

  return (
    <SectionShell id="services" altBg>
      <FadeIn>
        <SectionLabel>Services</SectionLabel>
        <h2 className="mt-4 max-w-[720px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          WhatsApp lead qualification for UAE real‑estate teams.
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
          Built for brokerages and agents in Dubai and the wider UAE — scoped to your listings,
          languages, and what “qualified” means for your team.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((item, i) => (
          <FadeIn key={item.title} delayMs={i * 80}>
            <article className="rounded-xl border border-stroke bg-elevated p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-elevated-alt text-gold">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-body text-[18px] font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-[15px] font-light leading-[1.65] text-body">{item.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delayMs={200}>
        <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-stroke bg-elevated p-8 ring-1 ring-gold/30 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="font-heading text-2xl font-medium text-ink">Custom for UAE teams</p>
            <p className="mt-2 max-w-[520px] text-[15px] font-light leading-[1.65] text-body">
              Every setup is tailored — your inventory, your criteria, your handoff flow.
            </p>
          </div>
          <ButtonCta external href={calUrl} className="shrink-0">
            Book a demo call
          </ButtonCta>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

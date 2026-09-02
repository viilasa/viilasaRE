import { Clock, Filter, MessageSquare } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

const OUTCOMES = [
  {
    icon: Clock,
    title: "Hours back every week",
    text: "Stop answering the same “what’s the price?” threads. The qualifier handles first contact 24/7.",
  },
  {
    icon: Filter,
    title: "Hot vs cold, before you pick up",
    text: "Budget, area, and timeline captured upfront—so you know who’s worth your time before the handoff.",
  },
  {
    icon: MessageSquare,
    title: "First reply in seconds",
    text: "Serious buyers don’t wait. Instant responses keep you ahead of agents who reply hours later.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <SectionShell id="trust">
      <FadeIn>
        <SectionLabel>Outcomes</SectionLabel>
        <h2 className="mt-4 max-w-[640px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          What changes when inquiries get filtered first.
        </h2>
      </FadeIn>
      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
        {OUTCOMES.map((item, i) => (
          <FadeIn key={item.title} delayMs={i * 120}>
            <article className="rounded-xl border border-stroke bg-elevated p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-elevated-alt text-gold">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-body text-[18px] font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-[16px] font-light leading-[1.7] text-body">{item.text}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

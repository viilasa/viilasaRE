import { MessageCircle, UserCheck, Zap } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";
import { WhatsAppChatMock } from "@/components/whatsapp-chat-mock";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Buyer reaches out on WhatsApp",
    text: "From a listing or portal — every inquiry lands in the same thread.",
  },
  {
    icon: Zap,
    title: "The qualifier asks the right questions",
    text: "Budget, area, timeline, and intent — before you spend a minute on the chat.",
  },
  {
    icon: UserCheck,
    title: "Hot leads reach you ready to close",
    text: "Qualified buyers get handed off with context. Cold inquiries get a polite close or nurture.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <SectionShell id="how">
      <FadeIn>
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-4 max-w-[720px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          Every inquiry filtered before it reaches your phone.
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
          A WhatsApp qualifier that works 24/7 — so you only talk to buyers who can actually
          close.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
        <ol className="space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <FadeIn delayMs={i * 80} className="flex gap-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-stroke bg-elevated text-gold">
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-body text-[18px] font-medium leading-snug text-ink md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-[16px] font-light leading-[1.7] text-body">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn delayMs={120}>
          <WhatsAppChatMock />
        </FadeIn>
      </div>
    </SectionShell>
  );
}

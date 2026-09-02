import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

const PAIN = [
  "Your WhatsApp is flooded with “What’s the price?” and “Is it still available?”—before you know if they can afford it.",
  "Evenings disappear answering chats that never convert—while serious buyers go to whoever replies first.",
  "Every unqualified inquiry costs you time, energy, and deals you should be closing instead.",
] as const;

export function ResonanceSection() {
  return (
    <SectionShell id="familiar">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-16">
        <FadeIn>
          <SectionLabel>Sound familiar?</SectionLabel>
          <h2 className="mt-4 font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
            High‑ticket inventory. Low‑quality inquiries.
          </h2>
        </FadeIn>
        <ul className="space-y-6">
          {PAIN.map((line, i) => (
            <li key={line} className="border-l-2 border-gold/40 pl-6">
              <FadeIn delayMs={i * 100}>
                <p className="max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
                  {line}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

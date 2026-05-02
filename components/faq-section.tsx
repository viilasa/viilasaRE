import { SectionLabel } from "@/components/section-label";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";
import { FAQ_ITEMS } from "@/lib/faq-content";

export function FaqSection() {
  return (
    <SectionShell id="faq" altBg>
      <FadeIn>
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 max-w-[640px] font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
          Straight answers—no jargon wall.
        </h2>
      </FadeIn>
      <div className="mx-auto mt-12 max-w-[680px] space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <FadeIn key={item.question} delayMs={i * 60}>
            <details className="group rounded-xl border border-stroke bg-elevated px-5 py-1 transition-colors open:bg-elevated-alt">
              <summary className="cursor-pointer list-none py-4 font-body text-[16px] font-medium leading-snug text-ink outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-gold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-stroke pb-4 pt-1">
                <p className="text-[16px] font-light leading-[1.7] text-body">
                  {item.answer}
                </p>
              </div>
            </details>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}

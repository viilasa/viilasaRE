import { getCalBookingUrl, getWhatsAppUrl } from "@/lib/site";
import { ButtonCta, ButtonGhost } from "@/components/button-cta";
import { SectionShell } from "@/components/section-shell";
import { FadeIn } from "@/components/fade-in";

export function ContactSection() {
  const calUrl = getCalBookingUrl();
  const waUrl = getWhatsAppUrl();

  return (
    <SectionShell id="contact" altBg>
      <FadeIn>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-heading text-[1.75rem] font-medium leading-[1.15] text-ink md:text-[2.75rem] md:leading-[1.12]">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-[16px] font-light leading-[1.7] text-body">
            Book a strategy call or message on WhatsApp—the same person answers both.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonCta external href={calUrl}>
              Book a free strategy call
            </ButtonCta>
            <ButtonGhost external href={waUrl} className="border-gold/40 text-gold hover:text-gold">
              WhatsApp Me
            </ButtonGhost>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}

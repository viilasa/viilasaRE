import { getCalBookingUrl } from "@/lib/site";
import { ButtonCta, ButtonGhost } from "@/components/button-cta";
import { FadeIn } from "@/components/fade-in";

export function HeroSection() {
  const calUrl = getCalBookingUrl();

  return (
    <section className="relative border-b border-stroke bg-canvas pb-16 pt-14 md:pb-[120px] md:pt-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <FadeIn className="max-w-[820px]">
          <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
            WhatsApp lead qualifier for UAE brokerages
          </p>
          <h1 className="mt-5 font-heading text-[2.25rem] font-semibold leading-[1.12] text-ink md:mt-6 md:text-[4rem] md:leading-[1.06]">
            Stop talking to every inquiry. Talk to the ones who can buy.
          </h1>
          <p className="mt-6 max-w-[680px] text-[16px] font-light leading-[1.7] text-body md:mt-8">
            Viilasa builds WhatsApp qualifiers for Dubai and UAE real‑estate teams—budget,
            area, timeline, intent—so only serious buyers reach your phone.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonCta external href={calUrl}>
              Book a demo call
            </ButtonCta>
            <ButtonGhost href="#how">See how it qualifies</ButtonGhost>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

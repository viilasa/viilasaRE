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
            Dubai‑caliber sites for brokerages worldwide
          </p>
          <h1 className="mt-5 font-heading text-[2.25rem] font-semibold leading-[1.12] text-ink md:mt-6 md:text-[4rem] md:leading-[1.06]">
            Websites that feel like the properties you sell
          </h1>
          <p className="mt-6 max-w-[680px] text-[16px] font-light leading-[1.7] text-body md:mt-8">
            Viilasa designs fast, editorial sites for luxury real‑estate teams—dark,
            restrained, conversion‑clear—so your listings and developments read as premium
            before the first line of copy.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonCta external href={calUrl}>
              Book a free strategy call
            </ButtonCta>
            <ButtonGhost href="#packages">View packages</ButtonGhost>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

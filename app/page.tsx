import { AboutSection } from "@/components/about-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PackagesSection } from "@/components/packages-section";
import { ProcessSection } from "@/components/process-section";
import { ResonanceSection } from "@/components/resonance-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustedStrip } from "@/components/trusted-strip";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { getWhatsAppUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex flex-col bg-canvas" id="top">
        <HeroSection />
        <ResonanceSection />
        <TrustedStrip />
        <PackagesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FaqSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFab href={getWhatsAppUrl()} />
    </>
  );
}

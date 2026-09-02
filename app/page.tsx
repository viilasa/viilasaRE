import type { Metadata } from "next";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProcessSection } from "@/components/process-section";
import { ResonanceSection } from "@/components/resonance-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TrustedStrip } from "@/components/trusted-strip";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import {
  GEO_COUNTRY,
  GEO_COUNTRY_CODE,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_PRIMARY_CITY,
  GEO_REGION_CODE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE,
  getAbsoluteUrl,
  getSiteUrl,
} from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
      "en-US": "/",
      "en-GB": "/",
    },
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: getSiteUrl(),
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_US", "en_GB"],
    siteName: "Viilasa",
    countryName: GEO_COUNTRY,
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Viilasa — WhatsApp lead qualifier and real estate automation for UAE teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [getAbsoluteUrl("/twitter-image")],
  },
  other: {
    "geo.region": GEO_REGION_CODE,
    "geo.placename": GEO_PRIMARY_CITY,
    "geo.position": `${GEO_LATITUDE};${GEO_LONGITUDE}`,
    ICBM: `${GEO_LATITUDE}, ${GEO_LONGITUDE}`,
    "content-language": "en-AE",
    "target-country": GEO_COUNTRY_CODE,
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex flex-col bg-canvas" id="top">
        <HeroSection />
        <ResonanceSection />
        <HowItWorksSection />
        <TrustedStrip />
        <ServicesSection />
        <ProcessSection />
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

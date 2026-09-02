import { getCalBookingUrl, getContactEmail } from "@/lib/site";
import {
  GEO_COUNTRY,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GEO_PRIMARY_CITY,
  GEO_SERVED_AREAS,
  PRIMARY_SERVICE_DESCRIPTION,
  PRIMARY_SERVICE_NAME,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_TAGLINE,
  getAbsoluteUrl,
  getSiteUrl,
} from "@/lib/seo";
import { FAQ_ITEMS } from "@/lib/faq-content";

function JsonLdScript({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const email = getContactEmail();
  const calUrl = getCalBookingUrl();

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: "Viilasa",
        url: siteUrl,
        logo: getAbsoluteUrl("/viilasa-logo.svg"),
        image: getAbsoluteUrl("/opengraph-image"),
        description: SITE_TAGLINE,
        slogan: PRIMARY_SERVICE_NAME,
        priceRange: "$$",
        serviceType: [
          "Lead qualification automation",
          "WhatsApp automation for real estate",
          "Real estate lead qualifier",
          "Property inquiry automation",
        ],
        areaServed: GEO_SERVED_AREAS.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO_LATITUDE,
          longitude: GEO_LONGITUDE,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: GEO_PRIMARY_CITY,
          addressCountry: GEO_COUNTRY,
        },
        knowsAbout: [
          "WhatsApp lead qualification for real estate",
          "Real estate lead qualifier",
          "Lead qualification automation",
          "Real estate automation UAE",
          "Dubai real estate automation",
          "WhatsApp automation for property agents",
          "Brokerage lead generation",
        ],
        email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            email,
            contactType: "sales",
            areaServed: GEO_COUNTRY,
            availableLanguage: ["English", "Arabic"],
            url: `${siteUrl}/#contact`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#lead-qualifier-service`,
        name: PRIMARY_SERVICE_NAME,
        description: PRIMARY_SERVICE_DESCRIPTION,
        serviceType: "Lead qualification automation",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: GEO_SERVED_AREAS.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        offers: {
          "@type": "Offer",
          url: calUrl,
          priceCurrency: "AED",
          availability: "https://schema.org/InStock",
          description: "Custom WhatsApp lead qualifier setup for UAE real-estate teams",
        },
        category: "Real estate automation",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Viilasa",
        description: SEO_DESCRIPTION,
        inLanguage: ["en-AE", "en"],
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "CommunicateAction",
          target: `${siteUrl}/#contact`,
          name: "Book a demo call",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#homepage`,
        url: `${siteUrl}/`,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: [
          { "@id": `${siteUrl}/#organization` },
          { "@id": `${siteUrl}/#lead-qualifier-service` },
        ],
        inLanguage: "en-AE",
        primaryImageOfPage: getAbsoluteUrl("/opengraph-image"),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return <JsonLdScript schema={organization} />;
}

import { getContactEmail } from "@/lib/site";
import {
  GEO_PRIMARY_CITY,
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

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: "Viilasa",
        url: siteUrl,
        logo: getAbsoluteUrl("/viilasa-logo.svg"),
        image: getAbsoluteUrl("/viilasa-logo.svg"),
        description: SITE_TAGLINE,
        slogan: SITE_TAGLINE,
        serviceType: [
          "Web design",
          "Marketing website builds",
          "Real estate brand websites",
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: GEO_PRIMARY_CITY },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: "Worldwide" },
        ],
        knowsAbout: [
          "Real estate website design",
          "Real estate website builder projects",
          "Luxury property marketing websites",
          "Brokerage lead generation websites",
          "Next.js agency websites",
        ],
        email,
        contactPoint: {
          "@type": "ContactPoint",
          email,
          contactType: "sales",
          url: `${siteUrl}/#contact`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Viilasa",
        description: SITE_TAGLINE,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#homepage`,
        url: `${siteUrl}/`,
        name: "Viilasa — Luxury real‑estate web design · Real estate website builder",
        description: SITE_TAGLINE,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
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

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

import { SiteJsonLd } from "@/components/json-ld";
import { getContactEmail } from "@/lib/site";
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
import "./globals.css";

const fontCormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const contactEmail = getContactEmail();

const publisher = "Viilasa";
const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const twitterRaw = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
const twitterHandle =
  twitterRaw?.startsWith("@") === false && twitterRaw
    ? `@${twitterRaw}`
    : twitterRaw || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO_TITLE,
    template: `%s · ${publisher}`,
  },
  applicationName: publisher,
  description: SEO_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: publisher, url: siteUrl }],
  creator: publisher,
  publisher,
  category: "Business",
  referrer: "origin-when-cross-origin",
  ...(googleVerify
    ? { verification: { google: googleVerify } }
    : {}),
  icons: {
    icon: [{ url: "/viilasa-logo.svg", type: "image/svg+xml" }],
    shortcut: ["/viilasa-logo.svg"],
    apple: [{ url: "/viilasa-logo.svg" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
      "en-US": "/",
      "en-GB": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_US", "en_GB"],
    url: "./",
    siteName: publisher,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    countryName: GEO_COUNTRY,
    emails: [contactEmail],
    images: [
      {
        url: `${getAbsoluteUrl("/opengraph-image")}`,
        width: 1200,
        height: 630,
        alt: "Viilasa — WhatsApp lead qualifier and real estate automation for UAE teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    creator: twitterHandle,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: `${getAbsoluteUrl("/twitter-image")}`,
        width: 1200,
        height: 630,
        alt: "Viilasa — WhatsApp lead qualifier and real estate automation for UAE teams",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AE"
      className={`${fontCormorant.variable} ${fontOutfit.variable} h-full`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs documentation" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9BBHKRPLRW"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9BBHKRPLRW');
            `,
          }}
        />
      </head>
      <body className="relative isolate min-h-full">
        <SiteJsonLd />
        <div className="relative z-[1] flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}

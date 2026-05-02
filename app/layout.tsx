import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

import { SiteJsonLd } from "@/components/json-ld";
import { GEO_PRIMARY_CITY, GEO_REGION_CODE, SEO_KEYWORDS, SITE_TAGLINE, getAbsoluteUrl, getSiteUrl } from "@/lib/seo";
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

const publisher = "Viilasa";
const seoTitleDefault = `${publisher} · Real Estate Website Builder & Luxury Web Design`;
const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const twitterRaw = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
const twitterHandle =
  twitterRaw?.startsWith("@") === false && twitterRaw
    ? `@${twitterRaw}`
    : twitterRaw || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitleDefault,
    template: `%s · ${publisher}`,
  },
  applicationName: publisher,
  description: SITE_TAGLINE,
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
      "en-US": "/",
      "en-AE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_AE", "en_GB"],
    url: "./",
    siteName: publisher,
    title: seoTitleDefault,
    description: SITE_TAGLINE,
    countryName: "United Arab Emirates",
    emails:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()
        ? [process.env.NEXT_PUBLIC_CONTACT_EMAIL.trim()]
        : undefined,
    images: [
      {
        url: `${getAbsoluteUrl("/opengraph-image")}`,
        width: 1200,
        height: 630,
        alt:
          "Viilasa brand card — luxury real estate website builder and brokerage web design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: twitterHandle,
    creator: twitterHandle,
    title: seoTitleDefault,
    description: SITE_TAGLINE,
    images: [
      {
        url: `${getAbsoluteUrl("/twitter-image")}`,
        width: 1200,
        height: 630,
        alt:
          "Viilasa brand card — luxury real estate website builder and brokerage web design",
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
    // Dubai CBD approx. — aligns with GEO / ICC meta readers
    "geo.position": "25.204849;55.270782",
    ICBM: "25.204849, 55.270782",
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
      lang="en"
      className={`${fontCormorant.variable} ${fontOutfit.variable} h-full`}
    >
      <body className="relative isolate min-h-full">
        <SiteJsonLd />
        <div className="relative z-[1] flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}

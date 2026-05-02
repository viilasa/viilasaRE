import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/section-shell";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_TAGLINE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Viilasa handles visitor information when you browse our agency site.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex flex-col bg-canvas">
        <SectionShell sectionClassName="!pt-10 md:!pt-14">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted">
            Legal
          </p>
          <h1 className="mt-4 font-heading text-[1.85rem] font-medium leading-[1.15] text-ink md:text-[2.5rem]">
            Privacy policy
          </h1>
          <p className="mt-6 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
            This placeholder policy explains visitor privacy on Viilasa’s marketing site.
            When you finalize terms, anchor them to your stack: embedded tools (analytics,
            WhatsApp routing, scheduling), jurisdictions you serve from, and lawful bases where
            required. Summary for context:{" "}
            <span className="text-muted">{SITE_TAGLINE}</span>
          </p>
          <p className="mt-8 max-w-[680px] text-[16px] font-light leading-[1.7] text-body">
            Once final, link to Cal.com / WhatsApp privacy pages if you mirror booking flows
            on those providers.
          </p>
          <p className="mt-12">
            <Link
              href="/"
              className="text-[14px] font-medium uppercase tracking-[0.14em] text-gold underline-offset-8 hover:text-ink hover:underline"
            >
              Back to homepage
            </Link>
          </p>
        </SectionShell>
      </main>
      <SiteFooter />
    </>
  );
}

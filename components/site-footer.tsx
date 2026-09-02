import { SiteLogo } from "@/components/site-logo";
import { getContactEmail } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const email = getContactEmail();

  return (
    <footer className="border-t border-stroke bg-canvas py-12 md:py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <SiteLogo variant="footer" />
          <p className="mt-4 max-w-[360px] text-[14px] font-light leading-relaxed text-muted">
            WhatsApp lead qualification for UAE real‑estate teams.
          </p>
          <p className="mt-4">
            <a
              href={`mailto:${email}`}
              className="text-[13px] font-medium text-muted transition-colors hover:text-gold hover:underline underline-offset-[6px]"
            >
              {email}
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
          <a href="#how" className="transition-colors hover:text-gold">
            How it works
          </a>
          <a href="#services" className="transition-colors hover:text-gold">
            Services
          </a>
          <a href="#faq" className="transition-colors hover:text-gold">
            FAQ
          </a>
          <a href="/privacy" className="transition-colors hover:text-gold">
            Privacy
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1200px] px-5 text-[12px] text-muted md:px-6">
        © {year} Viilasa. All rights reserved.
      </p>
    </footer>
  );
}

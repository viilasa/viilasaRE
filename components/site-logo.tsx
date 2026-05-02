import Link from "next/link";
import { SITE_LOGO_SRC } from "@/lib/brand";

type SiteLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  onNavigate?: () => void;
};

/**
 * Brand mark → white via filter, plus serif wordmark (“Viilasa”).
 */
export function SiteLogo({
  variant = "header",
  className = "",
  onNavigate,
}: SiteLogoProps) {
  const markSizing =
    variant === "header"
      ? "h-[64px] max-h-[64px] w-auto max-w-[min(44vw,176px)] sm:max-w-[196px] md:h-[86px] md:max-h-[86px] md:max-w-[236px] lg:h-[94px] lg:max-h-[94px] lg:max-w-[252px]"
      : "h-11 max-h-11 w-auto max-w-[132px] sm:max-w-[152px] md:h-14 md:max-h-14 md:max-w-[172px]";

  const markTuck =
    variant === "header"
      ? "-mr-1 shrink-0 md:-mr-1.5"
      : "-mr-0.5 shrink-0 md:-mr-1";

  const wordmarkClass =
    variant === "header"
      ? "font-heading text-[1.05rem] font-medium leading-none tracking-tight text-ink sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.35rem]"
      : "font-heading text-base font-medium leading-none tracking-tight text-ink md:text-lg";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Viilasa home"
      className={`group inline-flex max-w-full shrink-0 items-center gap-1 md:gap-1.5 self-center outline-none ring-offset-canvas hover:opacity-95 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-2 active:opacity-90 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG embeds raster; CSS filter handles color */}
      <img
        src={SITE_LOGO_SRC}
        alt=""
        decoding="async"
        fetchPriority={variant === "header" ? "high" : "auto"}
        className={`block object-contain object-left brightness-0 invert ${markSizing} ${markTuck}`}
      />
      <span className={wordmarkClass}>Viilasa</span>
    </Link>
  );
}

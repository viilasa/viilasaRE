import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Extra classes on `<section>` (e.g. padding overrides). */
  sectionClassName?: string;
  altBg?: boolean;
  "aria-label"?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  sectionClassName = "",
  altBg,
  "aria-label": ariaLabel,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-28 py-16 md:scroll-mt-36 md:py-[120px] ${
        altBg ? "bg-elevated-alt" : ""
      } ${sectionClassName}`}
    >
      <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-6 ${className}`}>
        {children}
      </div>
    </section>
  );
}

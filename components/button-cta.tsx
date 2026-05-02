import Link from "next/link";
import type { ReactNode } from "react";

type ButtonCtaProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function ButtonCta({
  href,
  children,
  external,
  className = "",
}: ButtonCtaProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-canvas transition-transform duration-200 ease-out hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center rounded-xl border border-stroke bg-transparent px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-gold/50 hover:text-gold ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[12px] font-medium uppercase tracking-[0.2em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}

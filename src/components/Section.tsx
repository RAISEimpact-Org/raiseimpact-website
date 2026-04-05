interface SectionProps {
  id?: string;
  children: React.ReactNode;
  surface?: boolean;
  dark?: boolean;
  narrow?: boolean;
  className?: string;
  compact?: boolean;
}

export default function Section({
  id,
  children,
  surface,
  dark,
  narrow,
  className = "",
  compact,
}: SectionProps) {
  const bg = dark
    ? "bg-dark text-white/90"
    : surface
      ? "bg-surface"
      : "";

  const maxW = narrow ? "max-w-[var(--max-text)]" : "max-w-[var(--max-layout)]";
  const py = compact ? "py-[var(--space-7)]" : "py-[var(--space-9)]";

  return (
    <section
      id={id}
      className={`${py} px-[var(--space-5)] md:px-[var(--space-7)] ${bg} ${className}`}
    >
      <div className={`mx-auto ${maxW}`}>{children}</div>
    </section>
  );
}

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  surface?: boolean;
  dark?: boolean;
  narrow?: boolean;
  className?: string;
}

export default function Section({
  id,
  children,
  surface,
  dark,
  narrow,
  className = "",
}: SectionProps) {
  const bg = dark
    ? "bg-dark text-white"
    : surface
      ? "bg-surface"
      : "bg-bg";

  const maxW = narrow ? "max-w-[var(--max-text)]" : "max-w-[var(--max-layout)]";

  return (
    <section
      id={id}
      className={`py-[var(--space-8)] px-[var(--space-4)] ${bg} ${className}`}
    >
      <div className={`mx-auto ${maxW}`}>{children}</div>
    </section>
  );
}

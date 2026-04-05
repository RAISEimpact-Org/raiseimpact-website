export default function Hero() {
  return (
    <section className="pt-36 pb-[var(--space-9)] px-[var(--space-5)] md:px-[var(--space-7)]">
      <div className="mx-auto max-w-[var(--max-layout)]">
        <div className="max-w-2xl">
          <h1>
            $94 million on salaries.
            <br />
            <span className="text-accent">
              $34,000 on developing those people.
            </span>
          </h1>

          <p className="mt-[var(--space-5)] text-lg text-muted leading-relaxed max-w-lg">
            People infrastructure for AI safety organizations.
          </p>

          <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-4)]">
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded bg-accent text-white font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              Let&apos;s talk about your organization
            </a>
            <a
              href="#approach"
              className="inline-flex items-center px-7 py-3.5 rounded border border-border text-text transition-all hover:border-primary/40 hover:text-primary"
            >
              How we work
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

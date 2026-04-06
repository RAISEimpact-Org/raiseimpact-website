import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40 pb-[var(--space-10)] px-[var(--space-5)] md:px-[var(--space-7)]">
      <div className="mx-auto max-w-[var(--max-layout)]">
        <h1 className="max-w-4xl">
          Turn individual brilliance into <span className="text-accent">collective intelligence</span>.
        </h1>

        <div className="mt-[var(--space-8)] grid md:grid-cols-[1fr_auto] md:items-end gap-[var(--space-7)]">
          <div>
            <p className="text-[1.1875rem] text-muted leading-relaxed max-w-md">
              Fractional people development for AI safety organizations.
            </p>
            <div className="mt-[var(--space-4)] flex items-center gap-[var(--space-3)]">
              <span className="text-[0.8125rem] text-muted/60">Funded by</span>
              <Image
                src="/coefficient-giving-logo.png"
                alt="Coefficient Giving"
                width={160}
                height={34}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-[var(--space-4)]">
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-md bg-accent text-white font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              Apply
            </a>
            <a
              href="#symptoms"
              className="inline-flex items-center px-7 py-3.5 rounded-md border border-border text-text transition-all hover:border-accent/40 hover:text-accent"
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

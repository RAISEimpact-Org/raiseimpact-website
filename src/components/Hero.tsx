import Section from "./Section";

export default function Hero() {
  return (
    <Section className="pt-[160px] pb-[var(--space-8)]">
      <div className="max-w-[var(--max-text)]">
        {/* Option A: Data contrast */}
        <h1 className="text-primary">
          $94 million on salaries.
          <br />
          $34,000 on developing those people.
        </h1>

        <p className="mt-[var(--space-4)] text-[20px] leading-relaxed text-muted max-w-[600px]">
          People infrastructure for AI safety organizations.
        </p>

        <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-3)]">
          <a
            href="#contact"
            className="inline-flex items-center px-[var(--space-5)] py-[14px] rounded-md bg-accent text-white text-[17px] font-medium transition-colors hover:bg-accent/90"
          >
            Let&apos;s talk about your organization
          </a>
          <a
            href="#approach"
            className="inline-flex items-center px-[var(--space-5)] py-[14px] rounded-md border border-border text-text text-[17px] transition-colors hover:border-primary hover:text-primary"
          >
            How we work&ensp;&darr;
          </a>
        </div>
      </div>
    </Section>
  );
}

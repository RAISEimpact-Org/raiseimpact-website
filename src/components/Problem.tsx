import Section from "./Section";
import DataPoint from "./DataPoint";

export default function Problem() {
  return (
    <Section surface>
      <p className="text-[0.8125rem] uppercase tracking-[0.15em] text-muted mb-[var(--space-8)]">
        The problem
      </p>

      <p className="text-lg leading-relaxed mb-[var(--space-8)] max-w-[var(--max-text)]">
        Three numbers that describe the sector:
      </p>

      <div className="grid gap-[var(--space-8)] sm:grid-cols-3 mb-[var(--space-9)]">
        <DataPoint
          value="962 : 1"
          label="Salary spending vs. people development spending across AI safety nonprofits."
        />
        <DataPoint
          value="79%"
          label="Of AI safety organizations with zero dedicated people leadership."
        />
        <DataPoint
          value="10–600x"
          label="Growth in two to four years without investment in organizational systems."
        />
      </div>

      <div className="max-w-[var(--max-text)] space-y-4 text-[1.0625rem] leading-relaxed border-l-2 border-accent/60 pl-[var(--space-6)] ml-[var(--space-2)]">
        <p className="text-text/80">An ops lead doing three jobs, running out of energy.</p>
        <p className="text-text/80">
          Co-leaders entering a critical conversation without knowing they
          disagree.
        </p>
        <p className="text-text/80">A senior hire unfilled for seven months at $300K.</p>
        <p className="text-text/80">
          A researcher who left because nobody addressed what they raised six
          months ago.
        </p>
      </div>

      <p className="mt-[var(--space-7)] text-[0.8125rem] text-muted">
        Source: IRS Form 990 filings and team page analysis of 71
        organizations.
      </p>
    </Section>
  );
}

import Section from "./Section";
import DataPoint from "./DataPoint";

export default function Problem() {
  return (
    <Section surface>
      <div className="max-w-[var(--max-text)]">
        <p className="text-[15px] uppercase tracking-widest text-muted mb-[var(--space-5)]">
          The problem
        </p>

        <p className="text-[20px] leading-relaxed mb-[var(--space-7)]">
          Three numbers that describe the sector:
        </p>

        <div className="grid gap-[var(--space-7)] sm:grid-cols-3 mb-[var(--space-7)]">
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

        <div className="space-y-[var(--space-2)] text-[17px] leading-relaxed border-l-2 border-accent pl-[var(--space-4)]">
          <p>An ops lead doing three jobs, running out of energy.</p>
          <p>
            Co-leaders entering a critical conversation without knowing they
            disagree.
          </p>
          <p>A senior hire unfilled for seven months at $300K.</p>
          <p>
            A researcher who left because nobody addressed what they raised six
            months ago.
          </p>
        </div>

        <p className="mt-[var(--space-5)] text-[14px] text-muted">
          Source: IRS Form 990 filings and team page analysis of 71
          organizations.
        </p>
      </div>
    </Section>
  );
}

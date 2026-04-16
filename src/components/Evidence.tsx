import Section from "./Section";
import CategoryChart from "./CategoryChart";

export default function Evidence() {
  return (
    <Section id="results">
      <p className="text-[0.8125rem] uppercase tracking-[0.15em] text-muted mb-[var(--space-8)]">
        Results
      </p>

      <div className="grid gap-[var(--space-9)] lg:grid-cols-[1fr_380px] lg:items-start">
        {/* Left: headline metric + narrative */}
        <div>
          <div className="flex items-baseline gap-[var(--space-4)] mb-[var(--space-6)]">
            <span className="font-data text-[clamp(3rem,8vw,4.5rem)] leading-[1] font-medium text-dark tracking-tight">
              4.9
            </span>
            <span className="font-data text-[clamp(1.25rem,3vw,1.75rem)] text-muted/50">
              &rarr;
            </span>
            <span className="font-data text-[clamp(3rem,8vw,4.5rem)] leading-[1] font-medium text-accent tracking-tight">
              7.9
            </span>
          </div>

          <p className="text-lg leading-relaxed mb-[var(--space-5)] max-w-[var(--max-text)]">
            Team satisfaction in eight months. That exceeded the predefined
            target by 140%.
          </p>

          <p className="text-[1.0625rem] leading-[1.7] text-text/85 max-w-[var(--max-text)]">
            The three largest gains map to the three things we targeted: feedback
            systems, management transition, accountability protocol. The areas we
            didn&apos;t target showed the smallest movement.
          </p>

          {/* Caveat */}
          <p className="mt-[var(--space-7)] text-[0.9375rem] leading-[1.7] text-text/70 max-w-[var(--max-text)]">
            The team shrank from eight respondents to four during this period.
            People who were underperforming left. Composition change contributes to
            the improvement. We think this is early evidence, not proof. N is
            small. There is no control group. We share the methodology with anyone
            who asks.
          </p>
        </div>

        {/* Right: category chart */}
        <div className="lg:mt-2">
          <CategoryChart />
        </div>
      </div>

      {/* Additional metrics */}
      <div className="mt-[var(--space-9)] pt-[var(--space-7)] border-t border-border/50 grid grid-cols-2 sm:grid-cols-3 gap-[var(--space-7)]">
        <div>
          <div className="font-data text-[2.25rem] leading-[1] font-medium text-accent tracking-tight">
            8.2
          </div>
          <p className="mt-[var(--space-3)] text-[0.875rem] text-muted">
            Workshop satisfaction (avg)
          </p>
        </div>
        <div>
          <div className="font-data text-[2.25rem] leading-[1] font-medium text-accent tracking-tight">
            8.7
          </div>
          <p className="mt-[var(--space-3)] text-[0.875rem] text-muted">
            Facilitator rating (avg)
          </p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="mt-[var(--space-8)] max-w-[var(--max-text)] border-l-2 border-accent/50 pl-[var(--space-6)]">
        <p className="text-[1.125rem] leading-[1.7] font-heading italic text-text/80">
          &ldquo;At least 50&ndash;60% is advice, feedback, pushing, templates
          &mdash; and 30% or more is the accountability.&rdquo;
        </p>
        <footer className="mt-[var(--space-3)] text-[0.8125rem] text-muted not-italic tracking-wide uppercase">
          Client COO
        </footer>
      </blockquote>

      <p className="mt-[var(--space-7)] text-[0.8125rem] text-muted/60">
        Supported by Coefficient Giving.
      </p>
    </Section>
  );
}

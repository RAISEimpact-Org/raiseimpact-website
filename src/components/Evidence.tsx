import Section from "./Section";
import CategoryChart from "./CategoryChart";

export default function Evidence() {
  return (
    <Section id="results">
      <p className="text-[15px] uppercase tracking-widest text-muted mb-[var(--space-5)]">
        Results
      </p>

      <div className="grid gap-[var(--space-7)] lg:grid-cols-2">
        {/* Left: headline metric */}
        <div>
          <div className="mb-[var(--space-5)]">
            <span className="font-data text-[48px] sm:text-[72px] leading-none font-medium text-primary">
              4.9
            </span>
            <span className="font-data text-[24px] sm:text-[36px] text-muted mx-2">&rarr;</span>
            <span className="font-data text-[48px] sm:text-[72px] leading-none font-medium text-accent">
              7.9
            </span>
          </div>
          <p className="text-[20px] leading-relaxed mb-[var(--space-4)]">
            Team satisfaction in eight months. That exceeded the predefined
            target by 140%.
          </p>

          <p className="text-[17px] leading-relaxed">
            The three largest gains map to the three things we targeted: feedback
            systems, management transition, accountability protocol. The areas we
            didn&apos;t target showed the smallest movement.
          </p>
        </div>

        {/* Right: category chart */}
        <div>
          <CategoryChart />
        </div>
      </div>

      {/* Caveats */}
      <div className="mt-[var(--space-7)] max-w-[var(--max-text)]">
        <p className="text-[17px] leading-relaxed text-text">
          The team shrank from eight respondents to four during this period.
          People who were underperforming left. Composition change contributes to
          the improvement. We think this is early evidence, not proof. N is
          small. There is no control group. We share the methodology with anyone
          who asks.
        </p>
      </div>

      {/* Additional metrics */}
      <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-7)]">
        <div>
          <div className="font-data text-[40px] leading-none font-medium text-accent">
            8.2
          </div>
          <p className="mt-[var(--space-1)] text-[15px] text-muted">
            Workshop satisfaction (avg)
          </p>
        </div>
        <div>
          <div className="font-data text-[40px] leading-none font-medium text-accent">
            8.7
          </div>
          <p className="mt-[var(--space-1)] text-[15px] text-muted">
            Facilitator rating (avg)
          </p>
        </div>
      </div>

      {/* Blockquote + endorsement */}
      <blockquote className="mt-[var(--space-6)] border-l-[3px] border-accent pl-[var(--space-4)] max-w-[var(--max-text)]">
        <p className="text-[17px] leading-relaxed italic">
          &ldquo;At least 50&ndash;60% is advice, feedback, pushing, templates
          &mdash; and 30% or more is the accountability.&rdquo;
        </p>
        <footer className="mt-[var(--space-2)] text-[14px] text-muted not-italic">
          &mdash; Client COO
        </footer>
      </blockquote>

      <p className="mt-[var(--space-6)] text-[15px] text-muted">
        Supported by Coefficient Giving.
      </p>
    </Section>
  );
}

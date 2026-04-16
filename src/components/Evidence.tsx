import Section from "./Section";
import CategoryChart from "./CategoryChart";

export default function Evidence() {
  return (
    <Section id="results">
      <h2 className="font-heading font-semibold text-dark mb-[var(--space-8)]">
        Results
      </h2>

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
        </div>

        {/* Right: category chart */}
        <div className="lg:mt-2">
          <CategoryChart />
        </div>
      </div>

    </Section>
  );
}

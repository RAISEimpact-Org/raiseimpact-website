import Section from "./Section";
import Link from "next/link";

export default function Team() {
  return (
    <Section id="team" surface>
      <p className="text-[0.8125rem] uppercase tracking-[0.15em] text-muted mb-[var(--space-8)]">
        Team
      </p>

      <div className="grid gap-[var(--space-8)] md:grid-cols-2 mb-[var(--space-8)]">
        {/* Adam */}
        <div>
          <div className="w-16 h-16 rounded-full bg-primary/8 mb-[var(--space-5)] flex items-center justify-center">
            <span className="font-heading text-xl text-primary/70 font-medium">
              AT
            </span>
          </div>
          <h3 className="text-primary mb-[var(--space-1)]">Adam Tury</h3>
          <p className="text-[0.8125rem] text-muted mb-[var(--space-4)]">
            Program Lead
          </p>
          <p className="text-[1.0625rem] leading-[1.7] text-text/85">
            Master&apos;s in Computer Science and AI/ML. Eleven years building
            engineering teams at Amazon and Bloomberg. Over the past year,
            embedded with the founders and EDs of six organizations across
            Europe. His value is pattern recognition across six organizations
            simultaneously: the ops bottleneck, the feedback vacuum, the scaling
            pain that every team thinks is unique to them.
          </p>
        </div>

        {/* Teo */}
        <div>
          <div className="w-16 h-16 rounded-full bg-primary/8 mb-[var(--space-5)] flex items-center justify-center">
            <span className="font-heading text-xl text-primary/70 font-medium">
              TE
            </span>
          </div>
          <h3 className="text-primary mb-[var(--space-1)]">Teo Embers</h3>
          <p className="text-[0.8125rem] text-muted mb-[var(--space-4)]">
            Co-Lead, Measurement &amp; Intervention Design
          </p>
          <p className="text-[1.0625rem] leading-[1.7] text-text/85">
            Trained as a physicist. Ten years building a leadership development
            practice to twenty practitioners — serving Google, Revolut, the UK
            Government. ICF PCC with 2,000+ coaching hours. His role at
            RAISEimpact: make the work measurable. He designs the survey
            instruments, the category-level breakdowns, and the intervention
            plans that translate diagnosis into structured engagements.
          </p>
        </div>
      </div>

      <p className="text-[1.0625rem] leading-[1.7] text-text/85 max-w-[var(--max-text)]">
        What makes this work is the overlap. Adam has the technical background to
        understand alignment research. Teo has the analytical rigor to build
        evidence systems that survive scrutiny from people who evaluate claims
        for a living. Nobody else in this ecosystem combines both.
      </p>

      <Link
        href="/team"
        className="inline-flex items-center mt-[var(--space-5)] text-[0.875rem] text-accent font-medium hover:text-accent-hover transition-colors"
      >
        More about our team
        <svg
          className="ml-1.5 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </Section>
  );
}

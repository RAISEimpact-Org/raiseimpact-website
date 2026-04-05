import Section from "./Section";
import Link from "next/link";

export default function Team() {
  return (
    <Section id="team" surface>
      <p className="text-[15px] uppercase tracking-widest text-muted mb-[var(--space-5)]">
        Team
      </p>

      <div className="grid gap-[var(--space-7)] md:grid-cols-2 mb-[var(--space-7)]">
        {/* Adam */}
        <div>
          <div className="w-20 h-20 rounded-full bg-primary/10 mb-[var(--space-3)] flex items-center justify-center">
            <span className="font-heading text-[28px] text-primary font-medium">
              AT
            </span>
          </div>
          <h3 className="text-primary mb-[var(--space-2)]">Adam Tury</h3>
          <p className="text-[17px] leading-relaxed">
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
          <div className="w-20 h-20 rounded-full bg-primary/10 mb-[var(--space-3)] flex items-center justify-center">
            <span className="font-heading text-[28px] text-primary font-medium">
              TE
            </span>
          </div>
          <h3 className="text-primary mb-[var(--space-2)]">Teo Embers</h3>
          <p className="text-[17px] leading-relaxed">
            Trained as a physicist. Ten years building a leadership development
            practice to twenty practitioners — serving Google, Revolut, the UK
            Government. ICF PCC with 2,000+ coaching hours. His role at
            RAISEimpact: make the work measurable. He designs the survey
            instruments, the category-level breakdowns, and the intervention
            plans that translate diagnosis into structured engagements.
          </p>
        </div>
      </div>

      <p className="text-[17px] leading-relaxed max-w-[var(--max-text)]">
        What makes this work is the overlap. Adam has the technical background to
        understand alignment research. Teo has the analytical rigor to build
        evidence systems that survive scrutiny from people who evaluate claims
        for a living. Nobody else in this ecosystem combines both.
      </p>

      <Link
        href="/team"
        className="inline-block mt-[var(--space-4)] text-[15px] text-accent font-medium hover:text-accent/80 transition-colors"
      >
        More about our team &rarr;
      </Link>
    </Section>
  );
}

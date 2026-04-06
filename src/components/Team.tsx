import Section from "./Section";
import Image from "next/image";

export default function Team() {
  return (
    <Section id="team" surface>
      <p className="text-[0.8125rem] uppercase tracking-[0.15em] text-muted mb-[var(--space-8)]">
        Team
      </p>

      {/* Co-Leads */}
      <div className="grid gap-[var(--space-8)] md:grid-cols-2 mb-[var(--space-9)]">
        {/* Adam */}
        <div>
          <Image
            src="/adam.jpeg"
            alt="Adam Tury"
            width={80}
            height={80}
            className="rounded-full object-cover mb-[var(--space-5)] w-20 h-20"
          />
          <h3 className="text-dark mb-[var(--space-1)]">Adam Tury</h3>
          <p className="text-[0.8125rem] text-muted mb-[var(--space-4)]">
            Co-Lead
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
          <Image
            src="/teo.png"
            alt="Teo Embers"
            width={80}
            height={80}
            className="rounded-full object-cover mb-[var(--space-5)] w-20 h-20"
          />
          <h3 className="text-dark mb-[var(--space-1)]">Teo Embers</h3>
          <p className="text-[0.8125rem] text-muted mb-[var(--space-4)]">
            Co-Lead
          </p>
          <p className="text-[1.0625rem] leading-[1.7] text-text/85">
            Trained as a physicist. Ten years building a leadership development
            practice to twenty practitioners serving Google, Revolut, the UK
            Government. ICF PCC with 2,000+ coaching hours. His role at
            RAISEimpact: make the work measurable. He designs the survey
            instruments, the category-level breakdowns, and the intervention
            plans that translate diagnosis into structured engagements.
          </p>
        </div>
      </div>

      {/* Patrick / Successif */}
      <div className="border-t border-border/50 pt-[var(--space-8)]">
        <div className="flex items-start gap-[var(--space-6)]">
          <Image
            src="/patrick.jpeg"
            alt="Patrick Gruban"
            width={80}
            height={80}
            className="rounded-full object-cover flex-shrink-0 w-20 h-20"
          />
          <div>
            <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-1)]">
              <h3 className="text-dark">Patrick Gruban</h3>
              <Image
                src="/successif-logo.svg"
                alt="Successif"
                width={100}
                height={24}
                className="opacity-60"
              />
            </div>
            <p className="text-[0.8125rem] text-muted mb-[var(--space-4)]">
              COO, Successif
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-text/85 max-w-[var(--max-text)]">
              Business leader and entrepreneur on the board of Effective Ventures
              UK and Talos Network. He leads operations at Successif and manages
              the team of advisors. RAISEimpact is a program of Successif.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

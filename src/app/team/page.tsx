import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team — RAISEimpact",
  description:
    "Meet the team behind RAISEimpact. Adam Tury and Teo Embers combine AI safety ecosystem depth with evidence-based organizational development.",
};

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <Section className="pt-[160px] pb-[var(--space-7)]">
          <h1 className="text-primary">Our team</h1>
        </Section>

        {/* Adam */}
        <Section surface>
          <div className="max-w-[var(--max-text)]">
            <div className="w-24 h-24 rounded-full bg-primary/10 mb-[var(--space-4)] flex items-center justify-center">
              <span className="font-heading text-[36px] text-primary font-medium">
                AT
              </span>
            </div>
            <h2 className="text-primary mb-[var(--space-1)]">Adam Tury</h2>
            <p className="text-[15px] text-muted mb-[var(--space-4)]">
              Program Lead
            </p>

            <div className="space-y-[var(--space-3)] text-[17px] leading-relaxed">
              <p>
                Adam holds a Master&apos;s in Computer Science with a
                specialization in AI and ML. He spent eleven years at Amazon and
                Bloomberg learning what happens when technical organizations
                scale without intentional people systems.
              </p>
              <p>
                He entered the AI safety ecosystem in 2022 and recognized a
                pattern: organizations doing important work, staffed by people
                who left physics and finance and tenure-track positions because
                they believed this mattered more, struggling with the same
                structural problems nobody was helping them solve. An ops lead
                drowning under accumulated burden and losing energy month by
                month. A founder navigating rupture conventionnelle for the first
                time because nobody in the organization had ever let someone go.
                A team that grew from 12 to 25 on a grant that ended and then
                lost three senior people in a quarter.
              </p>
              <p>
                Over the past year, Adam has embedded inside six organizations
                across France, Belgium, the UK, and Brussels. Not as an outside
                advisor delivering recommendations — in the room for the
                conversations that matter. One client asked him to &ldquo;shame
                us&rdquo; when deadlines slipped. It became one of the most
                valued parts of the engagement.
              </p>
              <p>
                His strength is seeing across organizations. The ops bottleneck
                at one looks like the delegation failure at another, which looks
                like the feedback vacuum at a third. Having worked with six teams
                simultaneously, he recognizes the pattern before the team does.
              </p>
            </div>
          </div>
        </Section>

        {/* Teo */}
        <Section>
          <div className="max-w-[var(--max-text)]">
            <div className="w-24 h-24 rounded-full bg-primary/10 mb-[var(--space-4)] flex items-center justify-center">
              <span className="font-heading text-[36px] text-primary font-medium">
                TE
              </span>
            </div>
            <h2 className="text-primary mb-[var(--space-1)]">Teo Embers</h2>
            <p className="text-[15px] text-muted mb-[var(--space-4)]">
              Co-Lead, Measurement &amp; Intervention Design
            </p>

            <div className="space-y-[var(--space-3)] text-[17px] leading-relaxed">
              <p>
                Teo trained as a physicist before spending ten years building a
                leadership development practice from scratch — growing it to
                twenty practitioners serving Google, Revolut, the UK Government,
                and Adecco.
              </p>
              <p>
                He holds an ICF PCC credential with over 2,000 hours of coaching
                and completed IFS Level 1 and 2 training. He served on the ICF
                Board from 2022 to 2025. He builds technology — custom AI
                instruments that extend what a small team can deliver.
              </p>
              <p>
                His role at RAISEimpact: make things that are usually vague
                become specific. He designs the survey instruments and
                category-level breakdowns that show where change happened and
                where it didn&apos;t. He builds the intervention plans that
                translate Adam&apos;s diagnostic findings into structured
                engagements with timelines and success criteria. And he brings
                the operational experience of someone who has priced, sold,
                delivered, and scaled this kind of work across hundreds of
                engagements.
              </p>
            </div>
          </div>
        </Section>

        {/* Why This Pairing */}
        <Section surface>
          <div className="max-w-[var(--max-text)]">
            <h2 className="text-primary mb-[var(--space-4)]">
              Why this pairing
            </h2>
            <div className="space-y-[var(--space-3)] text-[17px] leading-relaxed">
              <p>
                Adam brings the diagnostic depth — six organizations, hundreds of
                hours in the room, the credibility that comes from having sat
                through the difficult conversations. He understands CG grant
                cycles, EU policy windows, and the dynamics of teams where the
                best candidates have offers from Anthropic.
              </p>
              <p>
                Teo brings the operational infrastructure — measurement systems,
                intervention design, scaling experience. He has built the kind of
                practice RAISEimpact is becoming. He knows what works at
                engagement three and what breaks at engagement fifteen.
              </p>
              <p>Nobody else in the AI safety ecosystem combines these.</p>
            </div>
          </div>
        </Section>

        {/* About RAISEimpact */}
        <Section>
          <div className="max-w-[var(--max-text)]">
            <h2 className="text-primary mb-[var(--space-4)]">
              About RAISEimpact
            </h2>
            <div className="space-y-[var(--space-3)] text-[17px] leading-relaxed">
              <p>
                Seventy-nine percent of AI safety organizations have zero
                dedicated people leadership. Five of six core nonprofits report
                $0 on staff development. The fastest-growing organizations in the
                sector scaled 10x to 600x without any investment in the systems
                that help teams function.
              </p>
              <p>
                We launched in 2025 with support from Coefficient Giving to work
                on this directly. Over the past year, we have embedded inside six
                AI safety organizations across Europe — diagnosing their specific
                challenges, designing targeted interventions, and measuring what
                changed.
              </p>
              <p>We are a program of Successif.</p>
            </div>
          </div>
        </Section>

        {/* What makes this different */}
        <Section surface>
          <div className="max-w-[var(--max-text)]">
            <h2 className="text-primary mb-[var(--space-5)]">
              What makes this different
            </h2>
            <div className="space-y-[var(--space-5)]">
              <div className="border-l-[3px] border-accent pl-[var(--space-4)]">
                <h3 className="text-primary mb-[var(--space-1)]">
                  Embedded, not episodic
                </h3>
                <p className="text-[17px] leading-relaxed">
                  We work inside your organization for months. Not a workshop
                  followed by a report nobody reads.
                </p>
              </div>
              <div className="border-l-[3px] border-accent pl-[var(--space-4)]">
                <h3 className="text-primary mb-[var(--space-1)]">
                  Specific, not generic
                </h3>
                <p className="text-[17px] leading-relaxed">
                  We understand CG grant cycles, EU AI Act policy windows, French
                  employment law, fiscal sponsorship structures, and teams where
                  people chose this work for non-financial reasons.
                </p>
              </div>
              <div className="border-l-[3px] border-accent pl-[var(--space-4)]">
                <h3 className="text-primary mb-[var(--space-1)]">Measured</h3>
                <p className="text-[17px] leading-relaxed">
                  Organizational health surveys before and after, with
                  category-level breakdowns showing where the intervention worked
                  and where it didn&apos;t. We publish the caveats.
                </p>
              </div>
              <div className="border-l-[3px] border-accent pl-[var(--space-4)]">
                <h3 className="text-primary mb-[var(--space-1)]">
                  Accountable
                </h3>
                <p className="text-[17px] leading-relaxed">
                  We track action items, follow up on missed deadlines, hold
                  leadership to the changes they committed to. One client
                  described our value as &ldquo;50&ndash;60% advice and 30%
                  accountability.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section dark>
          <div className="max-w-[var(--max-text)] mx-auto text-center">
            <p className="text-[20px] leading-relaxed text-white/80 mb-[var(--space-5)]">
              If this describes your situation — let&apos;s talk.
            </p>
            <a
              href="mailto:adam@raiseimpact.org?subject=Let's talk about our organization"
              className="inline-flex items-center px-[var(--space-5)] py-[14px] rounded-md bg-accent text-white text-[17px] font-medium transition-colors hover:bg-accent/90"
            >
              Let&apos;s talk about your organization
            </a>
            <p className="mt-[var(--space-4)] text-[15px] text-white/50">
              <a
                href="mailto:adam@raiseimpact.org"
                className="hover:text-white/70 transition-colors"
              >
                adam@raiseimpact.org
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

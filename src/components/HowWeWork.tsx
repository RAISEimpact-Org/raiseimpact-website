import Section from "./Section";

const stages = [
  {
    title: "Assess",
    body: "We start by learning your specific situation. Not applying a framework \u2014 an assessment of your team: a health survey, conversations with each leader, a map of how decisions actually get made. The assessment produces a baseline. Numbers, not impressions.",
  },
  {
    title: "Design",
    body: "From there, we design interventions aimed at the specific gaps the data surfaced. At one organization, the gap was role clarity and delegation. At another, it was coaching two co-leaders through their first termination under French employment law. At a third, it was designing a strategic retreat that replaced a wasted day with a structured working session.",
  },
  {
    title: "Build",
    body: "We embed for three to six months. Biweekly meetings. Action items tracked. Deadlines held. One client asked us to shame them when deadlines slipped. We obliged. Their framing: \u201c50\u201360% advice, feedback, pushing, templates \u2014 and 30% or more is the accountability.\u201d",
  },
  {
    title: "Measure",
    body: "We measure before and after, at the category level, and we publish the caveats alongside the results.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="approach" surface>
      <h2 className="font-heading font-semibold text-dark mb-[var(--space-8)]">
        How we work
      </h2>

      <div className="grid gap-[var(--space-7)]">
        {stages.map((stage, i) => (
          <div
            key={stage.title}
            className="grid md:grid-cols-[140px_1fr] gap-[var(--space-4)] md:gap-[var(--space-7)]"
          >
            <div>
              <span className="font-data text-[0.75rem] text-muted/60 tracking-wider">
                0{i + 1}
              </span>
              <h3 className="text-dark mt-1">{stage.title}</h3>
            </div>
            <p className="text-[1.0625rem] leading-[1.7] max-w-[var(--max-text)] text-text/85">
              {stage.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[var(--space-9)] inline-flex items-center gap-[var(--space-4)] px-[var(--space-5)] py-[var(--space-4)] border border-border rounded">
        <span className="font-data text-[0.875rem] text-muted tracking-wide">
          Leadership time
        </span>
        <span className="font-data text-[1.125rem] font-medium text-dark">
          2–3 hrs / week
        </span>
      </div>
    </Section>
  );
}

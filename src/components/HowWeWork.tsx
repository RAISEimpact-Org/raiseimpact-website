import Section from "./Section";

const stages = [
  {
    title: "Assess",
    body: "We start by learning your specific situation. Not applying a framework — an assessment of your team: a health survey, conversations with each leader, a map of how decisions actually get made. The assessment produces a baseline. Numbers, not impressions.",
  },
  {
    title: "Design",
    body: "From there, we design interventions aimed at the specific gaps the data surfaced. At one organization, the gap was role clarity and delegation. At another, it was coaching two co-leaders through their first termination under French employment law. At a third, it was designing a strategic retreat that replaced a wasted day with a structured working session.",
  },
  {
    title: "Build",
    body: 'We embed for three to six months. Biweekly meetings. Action items tracked. Deadlines held. One client asked us to shame them when deadlines slipped. We obliged. Their framing: "50\u201360% advice, feedback, pushing, templates — and 30% or more is the accountability."',
  },
  {
    title: "Measure",
    body: "We measure before and after, at the category level, and we publish the caveats alongside the results.",
  },
];

export default function HowWeWork() {
  return (
    <Section id="approach" surface>
      <p className="text-[15px] uppercase tracking-widest text-muted mb-[var(--space-5)]">
        How we work
      </p>

      <div className="space-y-[var(--space-6)]">
        {stages.map((stage) => (
          <div
            key={stage.title}
            className="border-l-[3px] border-accent pl-[var(--space-5)]"
          >
            <h3 className="text-primary mb-[var(--space-2)]">{stage.title}</h3>
            <p className="text-[17px] leading-relaxed max-w-[var(--max-text)]">
              {stage.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[var(--space-7)] p-[var(--space-4)] border border-border rounded-md bg-bg max-w-[var(--max-text)]">
        <p className="font-data text-[15px] text-muted">
          Leadership time: 2–3 hours per week
        </p>
      </div>
    </Section>
  );
}

import Section from "./Section";

export default function Reframe() {
  return (
    <Section narrow>
      <p className="text-[20px] leading-relaxed">
        These organizations build compute infrastructure, research
        infrastructure, and policy infrastructure. They have not built{" "}
        <strong className="text-primary font-medium">
          people infrastructure
        </strong>{" "}
        — the systems that help teams give feedback, make decisions, manage
        transitions, and retain the people doing the work.
      </p>
      <p className="mt-[var(--space-4)] text-[24px] font-heading font-medium text-primary">
        We build it.
      </p>
    </Section>
  );
}

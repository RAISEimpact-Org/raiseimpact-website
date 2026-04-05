import Section from "./Section";

export default function Reframe() {
  return (
    <Section narrow compact className="border-t border-border/40">
      <p className="text-[clamp(1.125rem,2vw,1.3125rem)] leading-[1.75] text-text/90">
        These organizations build compute infrastructure, research
        infrastructure, and policy infrastructure. They have not built{" "}
        <strong className="text-primary font-medium">
          people infrastructure
        </strong>{" "}
        — the systems that help teams give feedback, make decisions, manage
        transitions, and retain the people doing the work.
      </p>
      <h2 className="mt-[var(--space-6)]">
        We build it.
      </h2>
    </Section>
  );
}

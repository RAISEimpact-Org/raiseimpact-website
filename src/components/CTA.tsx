import Section from "./Section";

export default function CTA() {
  return (
    <Section id="contact" dark>
      <div className="max-w-xl">
        <p className="text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.7] text-white/70 mb-[var(--space-7)]">
          We think most AI safety organizations would benefit from this work. We
          also think most won&apos;t reach out until the pain is acute. If
          you&apos;re somewhere between curious and drowning — that&apos;s a fine
          place to start a conversation.
        </p>

        <a
          href="mailto:adam@raiseimpact.org?subject=Let's talk about our organization"
          className="inline-flex items-center px-7 py-3.5 rounded bg-accent text-white font-medium transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
        >
          Let&apos;s talk about your organization
        </a>

        <p className="mt-[var(--space-5)] text-[0.875rem] text-white/35">
          <a
            href="mailto:adam@raiseimpact.org"
            className="hover:text-white/55 transition-colors"
          >
            adam@raiseimpact.org
          </a>
        </p>
      </div>
    </Section>
  );
}

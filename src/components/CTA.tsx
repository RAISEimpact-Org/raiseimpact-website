import Section from "./Section";

export default function CTA() {
  return (
    <Section id="contact" dark>
      <div className="max-w-[var(--max-text)] mx-auto text-center">
        {/* Option B: Permission-giving */}
        <p className="text-[20px] leading-relaxed text-white/80 mb-[var(--space-5)]">
          We think most AI safety organizations would benefit from this work. We
          also think most won&apos;t reach out until the pain is acute. If
          you&apos;re somewhere between curious and drowning — that&apos;s a fine
          place to start a conversation.
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
  );
}

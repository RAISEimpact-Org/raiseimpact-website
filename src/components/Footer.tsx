export default function Footer() {
  return (
    <footer className="bg-dark py-[var(--space-8)] px-[var(--space-5)] md:px-[var(--space-7)]">
      <div className="mx-auto max-w-[var(--max-layout)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[var(--space-6)]">
          <div>
            <p className="font-heading text-base font-semibold text-white/80 tracking-tight">
              RAISEimpact
            </p>
            <p className="text-[0.8125rem] text-white/35 mt-[var(--space-2)] leading-relaxed">
              A program of Successif
              <br />
              Supported by Coefficient Giving
            </p>
          </div>

          <div className="flex flex-wrap gap-x-[var(--space-7)] gap-y-[var(--space-3)] text-[0.8125rem] text-white/40">
            <a href="#approach" className="hover:text-white/60 transition-colors">
              Approach
            </a>
            <a href="#results" className="hover:text-white/60 transition-colors">
              Results
            </a>
            <a href="#team" className="hover:text-white/60 transition-colors">
              Team
            </a>
            <a
              href="mailto:adam@raiseimpact.org"
              className="hover:text-white/60 transition-colors"
            >
              adam@raiseimpact.org
            </a>
          </div>
        </div>

        <div className="mt-[var(--space-7)] pt-[var(--space-5)] border-t border-white/8">
          <p className="text-[0.75rem] text-white/25">
            &copy; {new Date().getFullYear()} RAISEimpact
          </p>
        </div>
      </div>
    </footer>
  );
}

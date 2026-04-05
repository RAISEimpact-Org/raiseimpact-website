export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-[var(--space-6)] px-[var(--space-4)]">
      <div className="mx-auto max-w-[var(--max-layout)] flex flex-col md:flex-row md:items-center md:justify-between gap-[var(--space-3)]">
        <div>
          <p className="font-heading text-[17px] font-medium text-white/80">
            RAISEimpact
          </p>
          <p className="text-[14px] mt-[var(--space-1)]">
            A program of Successif &middot; Supported by Coefficient Giving
          </p>
        </div>

        <div className="flex flex-wrap gap-[var(--space-4)] text-[14px]">
          <a href="#approach" className="hover:text-white/80 transition-colors">
            Approach
          </a>
          <a href="#results" className="hover:text-white/80 transition-colors">
            Results
          </a>
          <a href="#team" className="hover:text-white/80 transition-colors">
            Team
          </a>
          <a
            href="mailto:adam@raiseimpact.org"
            className="hover:text-white/80 transition-colors"
          >
            adam@raiseimpact.org
          </a>
        </div>

        <p className="text-[13px] text-white/40">
          &copy; {new Date().getFullYear()} RAISEimpact
        </p>
      </div>
    </footer>
  );
}

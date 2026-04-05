const categories = [
  { label: "Engagement & motivation", before: 3.7, after: 6.4, change: "+3.8" },
  { label: "Efficiency & processes", before: 2.8, after: 5.4, change: "+3.7" },
  { label: "Autonomy, clarity, ownership", before: 3.2, after: 5.6, change: "+3.4" },
  { label: "Strategy & communication", before: 3.1, after: 5.3, change: "+3.2" },
];

export default function CategoryChart() {
  const maxVal = 7;

  return (
    <div className="space-y-[var(--space-6)]">
      {categories.map((cat) => (
        <div key={cat.label}>
          <div className="flex items-baseline justify-between mb-[var(--space-3)]">
            <span className="text-[0.875rem] text-text/80">{cat.label}</span>
            <span className="font-data text-[0.875rem] text-accent font-medium ml-4 shrink-0">
              {cat.change}
            </span>
          </div>

          {/* Before bar */}
          <div className="relative h-[6px] rounded-full bg-border/60 mb-[var(--space-2)]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary/25"
              style={{ width: `${(cat.before / maxVal) * 100}%` }}
            />
          </div>

          {/* After bar */}
          <div className="relative h-[6px] rounded-full bg-border/60">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent"
              style={{ width: `${(cat.after / maxVal) * 100}%` }}
            />
          </div>

          <div className="flex justify-between mt-[var(--space-2)] font-data text-[0.75rem] text-muted/70">
            <span>{cat.before} / 7</span>
            <span>{cat.after} / 7</span>
          </div>
        </div>
      ))}

      <div className="flex items-center gap-[var(--space-5)] text-[0.75rem] text-muted pt-[var(--space-3)] border-t border-border/40">
        <span className="flex items-center gap-[var(--space-2)]">
          <span className="inline-block w-[var(--space-4)] h-[4px] rounded-full bg-primary/25" />
          Baseline
        </span>
        <span className="flex items-center gap-[var(--space-2)]">
          <span className="inline-block w-[var(--space-4)] h-[4px] rounded-full bg-accent" />
          8 months later
        </span>
      </div>
    </div>
  );
}

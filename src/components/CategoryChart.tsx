const categories = [
  { label: "Engagement & motivation", before: 3.7, after: 6.4, change: "+3.8" },
  { label: "Efficiency & processes", before: 2.8, after: 5.4, change: "+3.7" },
  { label: "Autonomy, clarity, ownership", before: 3.2, after: 5.6, change: "+3.4" },
  { label: "Strategy & communication", before: 3.1, after: 5.3, change: "+3.2" },
];

export default function CategoryChart() {
  const maxVal = 7;

  return (
    <div className="space-y-[var(--space-4)]">
      {categories.map((cat) => (
        <div key={cat.label}>
          <div className="flex items-baseline justify-between mb-[var(--space-2)]">
            <span className="text-[15px] text-text">{cat.label}</span>
            <span className="font-data text-[14px] text-accent font-medium">
              {cat.change}
            </span>
          </div>
          <div className="relative h-[8px] rounded-full bg-border overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary/40 transition-all"
              style={{ width: `${(cat.before / maxVal) * 100}%` }}
            />
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent transition-all"
              style={{ width: `${(cat.after / maxVal) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-[var(--space-1)] text-[13px] text-muted">
            <span>Before: {cat.before}</span>
            <span>After: {cat.after}</span>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-[var(--space-4)] text-[13px] text-muted mt-[var(--space-3)]">
        <span className="flex items-center gap-[var(--space-2)]">
          <span className="inline-block w-3 h-3 rounded-full bg-primary/40" />
          Baseline
        </span>
        <span className="flex items-center gap-[var(--space-2)]">
          <span className="inline-block w-3 h-3 rounded-full bg-accent" />
          Follow-up
        </span>
        <span className="ml-auto">Scale: 0–7</span>
      </div>
    </div>
  );
}

interface DataPointProps {
  value: string;
  label: string;
  source?: string;
}

export default function DataPoint({ value, label, source }: DataPointProps) {
  return (
    <div className="pt-[var(--space-4)] border-t-2 border-accent/30">
      <div className="font-data text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] font-medium text-accent tracking-tight">
        {value}
      </div>
      <div className="mt-[var(--space-3)] text-[0.9375rem] leading-relaxed text-text/80">
        {label}
      </div>
      {source && (
        <div className="mt-[var(--space-2)] text-[0.8125rem] text-muted">
          {source}
        </div>
      )}
    </div>
  );
}

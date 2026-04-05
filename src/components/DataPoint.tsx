interface DataPointProps {
  value: string;
  label: string;
  source?: string;
}

export default function DataPoint({ value, label, source }: DataPointProps) {
  return (
    <div className="text-left">
      <div className="font-data text-[40px] sm:text-[56px] leading-none font-medium text-accent">
        {value}
      </div>
      <div className="mt-[var(--space-2)] text-[17px] leading-relaxed text-text">
        {label}
      </div>
      {source && (
        <div className="mt-[var(--space-1)] text-[14px] text-muted">
          {source}
        </div>
      )}
    </div>
  );
}

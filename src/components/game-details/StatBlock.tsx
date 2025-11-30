interface Props {
  label: string;
  value: string;
}

export function StatBlock({ label, value }: Props) {
  return (
    <div className="flex flex-col">
      <span
        className="text-xs font-medium uppercase tracking-wide text-slate-400"
      >
        {label}
      </span>
      <span className="mt-1 text-2xl font-bold text-white">{value}</span>
    </div>
  );
}

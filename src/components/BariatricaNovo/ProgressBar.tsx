interface Props {
  current: number;
  total: number;
  label?: string;
}

const ProgressBar = ({ current, total, label }: Props) => {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 px-1">
        <span className="uppercase tracking-wider font-medium">{label}</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-welli-yellow transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

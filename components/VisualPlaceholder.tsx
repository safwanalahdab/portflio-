export function VisualPlaceholder({ label, dark = false, index = "01", className = "" }: { label: string; dark?: boolean; index?: string; className?: string }) {
  return (
    <div className={`${dark ? "blueprint text-white" : "warm-grid text-ink"} group relative min-h-64 overflow-hidden ${className}`}>
      <div className="absolute inset-7 border border-current/25 transition duration-500 group-hover:inset-5" />
      <div className="absolute left-1/2 top-1/2 h-px w-2/3 -translate-x-1/2 bg-current/20" />
      <div className="absolute left-1/2 top-1/2 h-2/3 w-px -translate-y-1/2 bg-current/20" />
      <span className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.2em] opacity-60">Visual / {index}</span>
      <span className="absolute bottom-8 left-8 right-8 max-w-xs text-xs leading-5 opacity-70">{label}<br /><em className="font-serif text-sm">Image coming soon</em></span>
    </div>
  );
}

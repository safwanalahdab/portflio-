export function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-12 grid gap-5 border-t border-ink/15 pt-6 lg:mb-20 lg:grid-cols-12">
      <p className="eyebrow lg:col-span-2">{number}</p>
      <h2 className="display text-5xl sm:text-6xl lg:col-span-5 lg:text-7xl">{title}</h2>
      <p className="max-w-md text-sm leading-7 text-ink/58 lg:col-span-5 lg:pt-2">{subtitle}</p>
    </div>
  );
}

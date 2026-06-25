"use client";

import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Architecture", "#architecture"],
  ["Graphic Design", "#graphic-design"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 shadow-[0_10px_40px_rgba(32,32,30,0.04)] backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="text-xs font-semibold tracking-[0.18em] text-ink/85 transition hover:text-gold">MANAR KABBARA</a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink/65 transition hover:text-gold">{label}</a>)}
        </nav>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-px w-5 bg-ink transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && <nav className="border-t border-ink/10 bg-paper/95 px-5 py-5 backdrop-blur-xl md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-3 text-sm text-ink/75">{label}</a>)}</nav>}
    </header>
  );
}

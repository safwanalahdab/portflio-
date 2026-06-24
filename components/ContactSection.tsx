export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-24 text-paper lg:py-36">
      <div className="container-page">
        <p className="eyebrow mb-8">05 / Contact</p>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8"><h2 className="display max-w-4xl text-6xl sm:text-7xl lg:text-8xl">Let’s create something with purpose.</h2></div>
          <div className="lg:col-span-4 lg:pt-3"><p className="mb-9 text-sm leading-7 text-paper/60">For architecture, drafting, branding, and graphic design opportunities, feel free to get in touch.</p><div className="flex flex-wrap gap-3"><a href="mailto:manarkabbara@gmail.com" className="bg-paper px-5 py-3 text-xs font-semibold text-ink transition hover:bg-gold hover:text-white">Email Me ↗</a><a href="https://linkedin.com/in/manarkabbara-design" target="_blank" rel="noreferrer" className="border border-paper/25 px-5 py-3 text-xs transition hover:border-paper">LinkedIn ↗</a></div></div>
        </div>
        <div className="mt-20 grid gap-5 border-t border-paper/15 pt-6 text-xs text-paper/55 sm:grid-cols-3"><a href="mailto:manarkabbara@gmail.com">manarkabbara@gmail.com</a><a href="tel:+963982493753">+963 982 493 753</a><span>Damascus, Syria</span></div>
      </div>
    </section>
  );
}

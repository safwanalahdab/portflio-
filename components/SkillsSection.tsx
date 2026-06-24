import { SectionTitle } from "./SectionTitle";

const groups = [
  { title: "Architecture & CAD", items: ["AutoCAD", "Revit", "Lumion", "Architectural Drafting", "Technical Drawing", "Space Planning", "Concept Development", "Presentation Boards", "3ds Max Basic"] },
  { title: "Graphic Design & Branding", items: ["Visual Identity Design", "Branding Development", "Adobe Photoshop", "Canva", "Social Media Design", "Typography", "Color Systems", "Content Creation", "Marketing Materials", "CapCut"] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container-page scroll-mt-28 py-24 lg:py-36">
      <SectionTitle number="04 / Expertise" title="Skills & Tools" subtitle="A multidisciplinary toolkit balancing architectural precision with clear, expressive visual communication." />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">{groups.map((group, g) => <div key={group.title}><div className="mb-5 flex items-center justify-between"><h3 className="font-serif text-2xl">{group.title}</h3><span className="text-xs text-ink/35">0{g + 1}</span></div><div>{group.items.map((item, i) => <div key={item} className="flex items-center justify-between border-t border-ink/15 py-3.5 text-sm transition hover:border-gold hover:pl-2"><span>{item}</span><span className="text-[10px] text-ink/30">{String(i + 1).padStart(2, "0")}</span></div>)}</div></div>)}</div>
    </section>
  );
}

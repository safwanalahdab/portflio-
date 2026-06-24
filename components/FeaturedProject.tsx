import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { VisualPlaceholder } from "./VisualPlaceholder";

export function FeaturedProject({ project, dark = false }: { project: Project; dark?: boolean }) {
  if (project.title === "Syrian Arab Archery Federation") {
    const caseStudy = [
      ["Brand Objective", "Build a credible, recognizable identity for an official sports federation."],
      ["Visual System", "Unify logo use, color, typography, and archery-inspired graphic elements."],
      ["Digital Applications", "Create a consistent language for campaigns, announcements, and social media."],
      ["Final Outcome", "A focused institutional identity shaped by precision, discipline, and excellence."],
    ];

    return (
      <article className="mb-24 lg:mb-36">
        <div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-4">
          <p className="eyebrow">{project.category}</p><span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <ProjectImage
          src={project.images[0].src}
          alt={project.images[0].label}
          priority
          className="aspect-[3/2] w-full border border-ink/10"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="display mb-8 text-5xl sm:text-6xl">{project.title}</h3>
            <p className="text-base leading-8 text-ink/70">{project.overview}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            {project.concept && <div className="border-l border-gold pl-5"><p className="eyebrow mb-3">Identity concept</p><p className="text-sm leading-7 text-ink/65">{project.concept}</p></div>}
            <div className="mt-8 flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div>
          </div>
        </div>

        <div className="mt-12 grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.map(([title, text], index) => (
            <div key={title} className="border-b border-ink/15 py-7 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <p className="eyebrow mb-4"><span className="mr-2 text-ink/30">0{index + 1}</span>{title}</p>
              <p className="text-xs leading-6 text-ink/60">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <ProjectImage src={project.images[1].src} alt={project.images[1].label} className="aspect-[590/883] border border-ink/10 bg-[#020b1b]" />
            <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">02</span>{project.images[1].label}</figcaption>
          </figure>
          <figure className="lg:col-span-7">
            <ProjectImage src={project.images[2].src} alt={project.images[2].label} className="aspect-square border border-ink/10 bg-[#020b1b]" />
            <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">03</span>{project.images[2].label}</figcaption>
          </figure>
        </div>
      </article>
    );
  }

  if (project.title === "Future Hospitality Hotel") {
    return (
      <article className="mb-24 lg:mb-36">
        <div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-4">
          <p className="eyebrow">{project.category}</p><span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <ProjectImage
          src={project.images[0].src}
          alt={project.images[0].label}
          priority
          className="aspect-[1080/764] w-full border border-ink/10"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="display mb-8 text-5xl sm:text-6xl">{project.title}</h3>
            <p className="text-base leading-8 text-ink/70">{project.overview}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            {project.concept && <div className="border-l border-gold pl-5"><p className="eyebrow mb-3">The concept</p><p className="text-sm leading-7 text-ink/65">{project.concept}</p></div>}
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-t border-ink/15 pt-7 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5"><p className="eyebrow mb-4">Contribution</p><div className="flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div></div>
          <div className="lg:col-span-7"><p className="eyebrow mb-4">Project notes</p><ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 pb-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul></div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
          {project.images.slice(1).map((image, index) => (
            <figure key={image.src}>
              <ProjectImage src={image.src} alt={image.label} className="aspect-[1080/764] border border-ink/10" />
              <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">0{index + 2}</span>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="mb-24 lg:mb-36">
      <div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-4">
        <p className="eyebrow">{project.category}</p><span className="font-serif text-3xl text-ink/25">{project.number}</span>
      </div>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:py-7">
          <h3 className="display mb-8 text-5xl sm:text-6xl">{project.title}</h3>
          <p className="mb-6 text-base leading-8 text-ink/70">{project.overview}</p>
          {project.concept && <div className="border-l border-gold pl-5"><p className="eyebrow mb-3">The concept</p><p className="text-sm leading-7 text-ink/65">{project.concept}</p></div>}
        </div>
        <div className="lg:col-span-7"><VisualPlaceholder dark={dark} label={project.images[0].label} className="aspect-[4/3] min-h-0" /></div>
      </div>
      <div className="mt-8 grid gap-8 border-t border-ink/15 pt-7 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5"><p className="eyebrow mb-4">Contribution</p><div className="flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div></div>
        <div className="lg:col-span-7"><p className="eyebrow mb-4">Project notes</p><ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 pb-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul></div>
      </div>
    </article>
  );
}

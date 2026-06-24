import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { VisualPlaceholder } from "./VisualPlaceholder";

export function ProjectCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  if (project.title === "Landmark Train Station Terminal") {
    return (
      <article className="border-t border-ink/15 py-12 lg:py-16">
        <div className="mb-6 flex items-end justify-between">
          <p className="eyebrow">{project.category}</p>
          <span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <ProjectImage
          src={project.images[0].src}
          alt={project.images[0].label}
          className="aspect-[1080/506] w-full border border-ink/10"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="display mb-7 text-4xl sm:text-5xl">{project.title}</h3>
            <p className="text-sm leading-7 text-ink/65">{project.overview}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            {project.concept && <div className="border-l border-gold pl-5"><p className="eyebrow mb-3">Planning approach</p><p className="text-sm leading-7 text-ink/60">{project.concept}</p></div>}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-7">
            <ProjectImage
              src={project.images[1].src}
              alt={project.images[1].label}
              className="aspect-[1080/603] border border-ink/10"
            />
            <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">02</span>{project.images[1].label}</figcaption>
          </figure>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div><p className="eyebrow mb-4">Contribution</p><div className="flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div></div>
            <div><p className="eyebrow mb-4">Project notes</p><ul>{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 py-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul></div>
          </div>
        </div>
      </article>
    );
  }

  if (project.title === "National Library Landscape Design") {
    return (
      <article className="border-t border-ink/15 py-12 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ProjectImage
              src={project.images[0].src}
              alt={project.images[0].label}
              className="aspect-[1080/733] border border-ink/10"
            />
          </div>
          <div className="lg:col-span-5 lg:pl-3">
            <div className="mb-5 flex items-end justify-between">
              <p className="eyebrow">{project.category}</p>
              <span className="font-serif text-3xl text-ink/25">{project.number}</span>
            </div>
            <h3 className="display mb-7 text-4xl sm:text-5xl">{project.title}</h3>
            <p className="text-sm leading-7 text-ink/65">{project.overview}</p>
            {project.concept && <div className="mt-7 border-l border-gold pl-5"><p className="eyebrow mb-3">The concept</p><p className="text-sm leading-7 text-ink/60">{project.concept}</p></div>}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-5">
            <ProjectImage
              src={project.images[1].src}
              alt={project.images[1].label}
              className="aspect-[4/5] border border-ink/10"
            />
            <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">02</span>{project.images[1].label}</figcaption>
          </figure>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:pt-4">
            <div><p className="eyebrow mb-4">Contribution</p><div className="flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div></div>
            <div><p className="eyebrow mb-4">Project notes</p><ul>{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 py-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul></div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group grid gap-7 border-t border-ink/15 py-9 lg:grid-cols-12 lg:py-12">
      <div className="lg:col-span-5"><VisualPlaceholder dark={dark} label={project.images[0].label} index={project.number} className="aspect-[4/3] min-h-0 transition duration-500 group-hover:-translate-y-1" /></div>
      <div className="flex flex-col lg:col-span-7 lg:pl-8">
        <p className="eyebrow mb-4">{project.category}</p>
        <h3 className="display mb-6 text-4xl sm:text-5xl">{project.title}</h3>
        <p className="max-w-2xl text-sm leading-7 text-ink/65">{project.overview}</p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4">{project.tags.map(tag => <span key={tag} className="text-[10px] uppercase tracking-[0.16em] text-ink/45">{tag}</span>)}</div>
      </div>
    </article>
  );
}

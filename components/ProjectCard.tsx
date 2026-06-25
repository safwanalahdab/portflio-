import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { VisualPlaceholder } from "./VisualPlaceholder";

export function ProjectCard({ project, dark = false }: { project: Project; dark?: boolean }) {
  if (project.title === "Al-Dandashi Educational Foundation") {
    const caseNotes = [
      ["Communication Focus", "Educational, social, and community messages shaped with clear visual hierarchy."],
      ["Media Production", "Design support for announcements, events, campaigns, and institutional updates."],
      ["Design Tone", "Warm, polished, and professional visuals that keep the foundation's identity consistent."],
    ];

    return (
      <article className="border-t border-ink/15 py-12 lg:py-16">
        <div className="mb-6 flex items-end justify-between">
          <p className="eyebrow">{project.category}</p>
          <span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ProjectImage
              src={project.images[0].src}
              alt={project.images[0].label}
              className="aspect-[1024/1280] border border-ink/10 bg-white"
            />
          </div>
          <div className="lg:col-span-5 lg:pl-3 lg:pt-4">
            <h3 className="display mb-7 text-4xl sm:text-5xl">{project.title}</h3>
            <p className="text-sm leading-7 text-ink/65">{project.overview}</p>
            {project.concept && <div className="mt-7 border-l border-gold pl-5"><p className="eyebrow mb-3">Visual communication approach</p><p className="text-sm leading-7 text-ink/60">{project.concept}</p></div>}
            <div className="mt-8 flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-y border-ink/15 py-7 md:grid-cols-3">
          {caseNotes.map(([title, text], index) => (
            <div key={title} className="md:border-r md:border-ink/10 md:pr-6 md:last:border-r-0">
              <p className="eyebrow mb-3"><span className="mr-2 text-ink/30">0{index + 1}</span>{title}</p>
              <p className="text-xs leading-6 text-ink/60">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          {project.images.slice(1, 3).map((image, index) => (
            <figure key={image.src}>
              <ProjectImage
                src={image.src}
                alt={image.label}
                className="aspect-[4/5] border border-ink/10 bg-white"
              />
              <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">0{index + 2}</span>{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Project notes</p>
            <ul>{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 py-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul>
          </div>
          <div className="flex flex-wrap content-start gap-x-5 gap-y-2 border-t border-ink/10 pt-4 sm:border-t-0 sm:pt-0">{project.tags.map(tag => <span key={tag} className="text-[10px] uppercase tracking-[0.16em] text-ink/45">{tag}</span>)}</div>
        </div>
      </article>
    );
  }

  if (project.title === "TEDxAlqassa") {
    const caseNotes = [
      ["Event Identity", "Visual support for a recognizable TEDx presence across event communication."],
      ["Digital Content", "Social media assets designed to communicate clearly and invite audience engagement."],
      ["Media Support", "Design and documentation materials that strengthen the overall event experience."],
    ];

    return (
      <article className="border-t border-ink/15 py-12 lg:py-16">
        <div className="mb-6 flex items-end justify-between">
          <p className="eyebrow">{project.category}</p>
          <span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <ProjectImage
          src={project.images[0].src}
          alt={project.images[0].label}
          className="aspect-square w-full border border-ink/10 bg-[#b80000]"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="display mb-7 text-4xl sm:text-5xl">{project.title}</h3>
            <p className="text-sm leading-7 text-ink/65">{project.overview}</p>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            {project.concept && <div className="border-l border-gold pl-5"><p className="eyebrow mb-3">Event communication approach</p><p className="text-sm leading-7 text-ink/60">{project.concept}</p></div>}
            <div className="mt-8 flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-y border-ink/15 py-7 md:grid-cols-3">
          {caseNotes.map(([title, text], index) => (
            <div key={title} className="md:border-r md:border-ink/10 md:pr-6 md:last:border-r-0">
              <p className="eyebrow mb-3"><span className="mr-2 text-ink/30">0{index + 1}</span>{title}</p>
              <p className="text-xs leading-6 text-ink/60">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.images.slice(1, 5).map((image, index) => (
            <figure key={image.src} className={index === 0 ? "lg:col-span-2" : ""}>
              <ProjectImage
                src={image.src}
                alt={image.label}
                className="aspect-square border border-ink/10 bg-white"
              />
              <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">0{index + 2}</span>{image.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9">
          <p className="eyebrow mb-4">Project notes</p>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 pb-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul>
        </div>
      </article>
    );
  }

  if (project.title === "Event & Print Design Collection") {
    const caseNotes = [
      ["Print Clarity", "Layouts structured for readable information, clean spacing, and formal presentation."],
      ["Event Use", "Badges and certificates designed to support recognition, organization, and participation."],
      ["Visual Consistency", "A restrained system focused on hierarchy, print-readiness, and professional detail."],
    ];

    return (
      <article className="border-t border-ink/15 py-12 lg:py-16">
        <div className="mb-6 flex items-end justify-between">
          <p className="eyebrow">{project.category}</p>
          <span className="font-serif text-3xl text-ink/25">{project.number}</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <ProjectImage
              src={project.images[0].src}
              alt={project.images[0].label}
              className="aspect-[1280/853] border border-ink/10 bg-[#f4f2ed]"
            />
          </div>
          <div className="lg:col-span-4 lg:pl-3 lg:pt-4">
            <h3 className="display mb-7 text-4xl sm:text-5xl">{project.title}</h3>
            <p className="text-sm leading-7 text-ink/65">{project.overview}</p>
            {project.concept && <div className="mt-7 border-l border-gold pl-5"><p className="eyebrow mb-3">Print communication approach</p><p className="text-sm leading-7 text-ink/60">{project.concept}</p></div>}
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-y border-ink/15 py-7 md:grid-cols-3">
          {caseNotes.map(([title, text], index) => (
            <div key={title} className="md:border-r md:border-ink/10 md:pr-6 md:last:border-r-0">
              <p className="eyebrow mb-3"><span className="mr-2 text-ink/30">0{index + 1}</span>{title}</p>
              <p className="text-xs leading-6 text-ink/60">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:col-span-4">
            <ProjectImage
              src={project.images[1].src}
              alt={project.images[1].label}
              className="aspect-[768/1280] border border-ink/10 bg-[#f4f2ed]"
            />
            <figcaption className="mt-3 flex gap-3 text-[10px] uppercase tracking-[0.14em] text-ink/45"><span className="text-gold">02</span>{project.images[1].label}</figcaption>
          </figure>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:pt-4">
            <div>
              <p className="eyebrow mb-4">Contribution</p>
              <div className="flex flex-wrap gap-2">{project.role.map(item => <span key={item} className="rounded-full border border-ink/15 px-3 py-1.5 text-[11px]">{item}</span>)}</div>
            </div>
            <div>
              <p className="eyebrow mb-4">Project notes</p>
              <ul>{project.keyPoints.map((item, i) => <li key={item} className="flex gap-3 border-b border-ink/10 py-2 text-xs leading-5 text-ink/65"><span className="font-serif text-gold">0{i + 1}</span>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </article>
    );
  }

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

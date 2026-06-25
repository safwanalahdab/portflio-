import { ContactSection } from "@/components/ContactSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillsSection } from "@/components/SkillsSection";
import { architectureProjects, graphicProjects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
  const visibleGraphicProjects = graphicProjects.filter((project) => project.title !== "Selected Graphic Design Works");

  return (
    <main id="top" className="overflow-hidden">
      <Header />

      <section className="container-page flex min-h-screen items-center pb-16 pt-28 lg:pt-36">
        <div className="grid w-full items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative z-10 lg:col-span-7 lg:pb-8">
            <p className="eyebrow mb-8">Architecture · Drafting · Visual Design</p>
            <h1 className="display text-[clamp(4.25rem,10vw,9.5rem)]">
              Manar
              <br />
              <span className="ml-[10vw] italic text-gold lg:ml-24">Kabbara</span>
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-8 text-ink/65">Designing spaces, identities, and visual stories with clarity and purpose.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#architecture" className="rounded-full bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0_16px_40px_rgba(32,32,30,0.16)] transition hover:bg-gold">Architecture work</a>
              <a href="#graphic-design" className="rounded-full border border-ink/20 bg-paper/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider transition hover:border-ink hover:bg-white">Graphic design</a>
              <a href="#contact" className="rounded-full px-3 py-3 text-[11px] font-semibold uppercase tracking-wider text-gold transition hover:text-ink">Contact →</a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="soft-card relative aspect-[4/5] overflow-hidden bg-sand ring-1 ring-ink/5">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/manar-kabbara.jpg`}
                alt="Manar Kabbara"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
            <p className="absolute -bottom-6 right-0 text-[10px] uppercase tracking-[0.2em] text-ink/40">Selected work · 2026</p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-[#ebe7df] py-24 lg:py-36">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <p className="eyebrow lg:col-span-3">01 / About Manar</p>
          <div className="lg:col-span-8">
            <p className="font-serif text-3xl leading-[1.25] sm:text-4xl lg:text-5xl">Architecture engineering student at Arab International University, connecting <em className="text-gold">technical precision</em> with creative storytelling.</p>
            <div className="mt-10 grid gap-6 text-sm leading-7 text-ink/60 sm:grid-cols-2">
              <p>Manar has hands-on experience in architectural design, AutoCAD drafting, space planning, and presentation development.</p>
              <p>Her graphic practice spans branding, identity systems, visual communication, and media production—united by clarity and purpose.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="container-page scroll-mt-24 py-24 lg:py-36">
        <SectionTitle number="02 / Selected work" title="Architecture" subtitle="Selected architectural projects focused on concept development, planning, spatial experience, and presentation." />
        <FeaturedProject project={architectureProjects[0]} dark />
        <div>{architectureProjects.slice(1).map((project, i) => <ProjectCard key={project.title} project={project} dark={i === 1} />)}</div>
      </section>

      <section id="graphic-design" className="scroll-mt-24 bg-white py-24 lg:py-36">
        <div className="container-page">
          <SectionTitle number="03 / Visual work" title="Graphic Design" subtitle="Branding, visual identity, social media design, and visual communication projects presented as considered systems." />
          <FeaturedProject project={visibleGraphicProjects[0]} />
          <div>{visibleGraphicProjects.slice(1).map((project, i) => <ProjectCard key={project.title} project={project} dark={i === 0} />)}</div>
        </div>
      </section>

      <SkillsSection />
      <ContactSection />

      <footer className="border-t border-paper/10 bg-ink py-6 text-paper/40">
        <div className="container-page flex flex-col gap-2 text-[10px] uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Manar Kabbara</p>
          <p>Architecture & Graphic Design Portfolio</p>
        </div>
      </footer>
    </main>
  );
}

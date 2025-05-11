"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { ABOUT_TEXT, CERTIFICATIONS, PROFESSIONAL_EXPERIENCE, PROJECTS, SKILLS } from "../constants";
import { Section } from "./shared/Section";
import { Timeline } from "./shared/Timeline";
import { ImageGrid } from "./shared/ImageGrid";
import { ProjectCard } from "./shared/ProjectCard";

const Body: React.FC = () => {
  const aboutRef = useFadeInOnScroll();

  return (
    <div className="h-full w-full max-w-full box-border px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <div id="about" ref={aboutRef} className="text-center sm:text-left opacity-0 translate-y-10 transition-all duration-[1200ms]">
        <div className="text-slate-500 dark:text-slate-400">{ABOUT_TEXT}</div>
      </div>
      <Section id="experience" title="Professional Experience">
        <Timeline checkpoints={PROFESSIONAL_EXPERIENCE} />
      </Section>
      <Section id="projects" title="Projects">
        <div className="flex flex-wrap justify-center sm:justify-between gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
      <Section id="skills" title="Professional Skillset">
        <ImageGrid images={SKILLS} />
      </Section>
      <Section id="certifications" title="Certifications">
        <ImageGrid images={CERTIFICATIONS} />
      </Section>
    </div>
  );
};

export default Body;

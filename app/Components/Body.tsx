"use client";

import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import { ABOUT_TEXT, CERTIFICATIONS, PROFESSIONAL_EXPERIENCE, PROJECTS, SKILLS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { ImageGridProps, ProjectCardProps, SectionProps, TimelineProps } from "../types";

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const ref = useFadeInOnScroll();
  return (
    <div id={id} ref={ref} className="mt-24 opacity-0 translate-y-10 transition-all duration-[1200ms]">
      <div className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">{title}</div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ checkpoints }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {checkpoints.map((checkpoint) => (
      <div key={checkpoint.id} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
        <div className="mb-4">
          <div className="flex flex-col space-y-1">
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {checkpoint.company}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {checkpoint.role}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {checkpoint.dateRange}
            </span>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-2">
          {checkpoint.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
    {images.map((image, index) => (
      <Image 
        key={index} 
        src={image.src} 
        alt={image.alt} 
        width="100" 
        height="100" 
        className={`hover-scale hover-rotate cursor-pointer ${
          image.darkMode?.invert ? "dark:invert" : ""
        } ${
          image.darkMode?.brightness ? `dark:brightness-[${image.darkMode.brightness}%]` : ""
        }`}
      />
    ))}
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="card-base w-full sm:w-[48%] lg:w-[30%] p-4 flex flex-col h-[24rem] sm:h-[30rem] hover:scale-[1.02] hover:-translate-y-1">
    <Image src={project.image} alt={project.title} width="500" height="100" className="rounded-xl hover-scale" />
    <div className="text-xl sm:text-2xl my-4 text-center font-semibold text-slate-800 dark:text-slate-200">
      {project.title}
    </div>
    <div className="mb-6 text-justify text-slate-600 dark:text-slate-300 text-sm sm:text-base">
      {project.description}
    </div>
    <div className="flex justify-center mt-auto space-x-4">
      {project.links.map((link, index) => (
        <div key={index} className="w-20 sm:w-24 h-7 sm:h-8 link-button">
          <Link href={link.href} target="_blank">{link.label}</Link>
        </div>
      ))}
    </div>
  </div>
);

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

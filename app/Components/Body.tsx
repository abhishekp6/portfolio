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
      <div className="text-2xl font-bold text-center text-slate-800">{title}</div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ checkpoints }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {checkpoints.map((checkpoint) => (
      <div key={checkpoint.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
        <h3 className="text-l text-slate-900 mb-2">{checkpoint.title}</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
          {checkpoint.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="flex flex-wrap justify-center mt-4">
    {images.map((image, index) => (
      <Image key={index} src={image.src} alt={image.alt} width="100" height="100" className="m-2" />
    ))}
  </div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="border-solid border w-full sm:w-[48%] lg:w-[30%] p-4 rounded-md border-slate-600 flex flex-col h-[30rem] shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image src={project.image} alt={project.title} width="500" height="100" className="rounded-md" />
    <div className="text-2xl my-4 flex justify-center items-center font-semibold text-slate-800">
      {project.title}
    </div>
    <div className="mb-6 text-justify mx-2 text-slate-600 text-base leading-relaxed">
      {project.description}
    </div>
    <div className="flex justify-center mt-auto space-x-4">
      {project.links.map((link, index) => (
        <div key={index} className="w-24 h-8 border rounded-md border-slate-600 flex items-center justify-center text-slate-900 hover:text-slate-700 cursor-pointer transition-colors duration-200">
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
        <div className="text-slate-500 text-left">{ABOUT_TEXT}</div>
      </div>
      <Section id="experience" title="Professional Experience">
        <Timeline checkpoints={PROFESSIONAL_EXPERIENCE} />
      </Section>
      <Section id="skills" title="Professional Skillset">
        <ImageGrid images={SKILLS} />
      </Section>
      <Section id="certifications" title="Certifications">
        <ImageGrid images={CERTIFICATIONS} />
      </Section>
      <Section id="projects" title="Projects">
        <div className="flex flex-wrap justify-center sm:justify-between gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Body;

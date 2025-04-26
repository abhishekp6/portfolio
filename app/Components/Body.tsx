"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Utility hook for fade-in animation
const useFadeInOnScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const ref = useFadeInOnScroll();

  return (
    <div
      id={id}
      ref={ref}
      className="mt-24 opacity-0 translate-y-10 transition-all duration-[1200ms]"
    >
      <div className="text-2xl font-bold text-center">{title}</div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

interface Checkpoint {
  id: number;
  title: string;
  description: string[];
}

interface TimelineProps {
  checkpoints: Checkpoint[];
}

const Timeline: React.FC<TimelineProps> = ({ checkpoints }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {checkpoints.map((checkpoint) => (
      <div
        key={checkpoint.id}
        className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
      >
        <h3 className="text-l text-blue-600 mb-2">
          {checkpoint.title}
        </h3>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
          {checkpoint.description.map((desc, descIndex) => (
            <li key={descIndex}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="flex flex-wrap justify-center mt-4">
    {images.map((image, index) => (
      <Image
        key={index}
        src={image.src}
        alt={image.alt}
        width="100"
        height="100"
        className="m-2"
      />
    ))}
  </div>
);

interface Project {
  image: string;
  title: string;
  description: string;
  links: { href: string; label: string }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="border-solid border w-full sm:w-[48%] lg:w-[30%] p-4 rounded-md border-neutral-400 flex flex-col h-[30rem] shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image src={project.image} alt="project" width="500" height="100" className="rounded-md" />
    <div className="text-xl my-4 flex justify-center items-center font-semibold text-gray-800">
      {project.title}
    </div>
    <div className="mb-6 text-justify mx-2 text-gray-600 leading-relaxed">
      {project.description}
    </div>
    <div className="flex justify-center mt-auto space-x-4">
      {project.links.map((link, index) => (
        <div
          key={index}
          className="w-24 h-8 border rounded-md border-neutral-400 flex items-center justify-center text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200"
        >
          <Link href={link.href} target="_blank">
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Body: React.FC = () => {
  const checkpoints: Checkpoint[] = [
    {
      id: 1,
      title: "Software Engineer at Nykaa (Oct 2024 - Present)",
      description: [
        "Part of UI team, building gamification at Nykaa.",
        "Responsible for revamping and upgrading the current codebase."
      ],
    },
    {
      id: 2,
      title: "Software Engineer at Lumiq (July 2021 - Sept 2024)",
      description: [
        "Part of applications team responsible for building full stack applications end to end.",
        "Developed Group Insurance Processing from ground up.",
        "Developed Retail Insurance Processing Platform.",
        "Part of organisations innovation charter.",
      ],
    },
    {
      id: 3,
      title: "Intern at Lumiq (Feb 2021 - June 2021)",
      description: [
        "Worked on document processing product powered by data science.",
        "Refactored and documented exiting codebase.",
        "Integrated new apis and built UI for the same.",
      ],
    },
  ];

  const skills: { src: string; alt: string }[] = [
    { src: "/js.svg", alt: "JavaScript" },
    { src: "/ts.svg", alt: "TypeScript" },
    { src: "/cpp.svg", alt: "C++" },
    { src: "/react.svg", alt: "React" },
    { src: "/angular.svg", alt: "Angular" },
    { src: "/node.svg", alt: "Node.js" },
    { src: "/mongo.svg", alt: "MongoDB" },
    { src: "/redis.svg", alt: "Redis" },
    { src: "/kafka.svg", alt: "Kafka" },
    { src: "/docker.svg", alt: "Docker" },
    { src: "/git.svg", alt: "Git" },
    { src: "/aws.svg", alt: "AWS" },
  ];

  const certifications: { src: string; alt: string }[] = [
    { src: "/da.png", alt: "Data Analysis" },
    { src: "/cp.png", alt: "Competitive Programming" },
    { src: "/ta.png", alt: "Technical Analysis" },
    { src: "/ace.png", alt: "ACE Certification" },
  ];

  const projects: Project[] = [
    {
      image: "/learnest.png",
      title: "Learnest",
      description:
        "Learnest is a web application designed for individual course creators. It enables you to create, manage, and display video tutorials to your viewers.",
      links: [
        { href: "https://github.com/abhishekp6/learnest", label: "Github" },
        { href: "https://learnest-fe.vercel.app", label: "Live" },
      ],
    },
    {
      image: "/yb.png",
      title: "Youtube Browser",
      description:
        "It is a simple youtube wrapper, which fetches data from Google's youtube data API based on search term and plays in an iframe. The application is solely created with React and Semantic UI.",
      links: [
        { href: "https://github.com/abhishekp6/youtube-browser", label: "Github" },
      ],
    },
    {
      image: "/live-editor.png",
      title: "Live Editor",
      description:
        "It's live code editor with real-time output for HTML, CSS, and JavaScript, served by an Express server.",
      links: [
        { href: "https://github.com/abhishekp6/live-js-editor", label: "Github" },
      ],
    },
  ];

  const aboutRef = useFadeInOnScroll();

  return (
    <div className="h-full w-full max-w-full box-border px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <div
        id="about"
        ref={aboutRef}
        className="text-center sm:text-left opacity-0 translate-y-10 transition-all duration-[1200ms]"
      >
        <div className="text-slate-500 text-left">
          Hi Everyone, Welcome to my space. I&apos;m a{" "}
          <span className="font-bold">Software Engineer</span> from India,
          currently working with awesome folks at Nykaa. I have completed my
          undergrad in <span className="font-bold">Computer Science</span>, from
          Jaypee Institute Of Information Technology, Noida, in 2021. I am a
          problem solver by heart and love to find new use cases of existing
          technologies.
        </div>
      </div>
      <Section id="experience" title="Professional Experience">
        <Timeline checkpoints={checkpoints} />
      </Section>
      <Section id="skills" title="Professional Skillset">
        <ImageGrid images={skills} />
      </Section>
      <Section id="certifications" title="Certifications">
        <ImageGrid images={certifications} />
      </Section>
      <Section id="projects" title="Projects">
        <div className="flex flex-wrap justify-center sm:justify-between gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Body;

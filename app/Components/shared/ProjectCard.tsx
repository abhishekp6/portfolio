import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "../../types";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
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
          <Link href={link.href} target="_blank">
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

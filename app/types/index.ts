export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface Checkpoint {
  id: number;
  title: string;
  description: string[];
}

export interface TimelineProps {
  checkpoints: Checkpoint[];
}

export interface ImageItem {
  src: string;
  alt: string;
}

export interface ImageGridProps {
  images: ImageItem[];
}

export interface Project {
  image: string;
  title: string;
  description: string;
  links: ProjectLink[];
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface ProjectCardProps {
  project: Project;
}

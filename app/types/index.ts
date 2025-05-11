export interface StyleConfig {
  className?: string;
  darkMode?: {
    invert?: boolean;
    brightness?: number;
  };
}

export interface SectionProps extends StyleConfig {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface Checkpoint {
  id: number;
  company: string;
  companyUrl?: string;  // Optional URL for company
  role: string;
  dateRange: string;
  description: string[];
}

export interface TimelineProps {
  checkpoints: Checkpoint[];
}

export interface ImageItem extends StyleConfig {
  src: string;
  alt: string;
  darkMode?: {
    invert?: boolean;
    brightness?: number;
  };
}

export interface ImageGridProps extends StyleConfig {
  images: ImageItem[];
  columns?: number;
  gap?: string;
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

export interface StyleConfig {
  className?: string;
}

export interface SectionProps extends StyleConfig {
  id: string;
  title: string;
  children: React.ReactNode;
}

/* ── Experience ── */
export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  initials: string;
  color: string;
  bullets: string[];
  techStack?: string[];
}

/* ── Legacy Checkpoint (kept for compatibility) ── */
export interface Checkpoint {
  company: string;
  companyUrl?: string;
  role: string;
  dateRange: string;
  description: string[];
  techStack?: string[];
}

export interface TimelineProps {
  checkpoints: Checkpoint[];
}

/* ── Work projects ── */
export interface WorkProject {
  title: string;
  role: string;
  year: string;
  body: string;
  impact?: string;
  tags: string[];
  links?: ProjectLink[];
}

/* ── Skills ── */
export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface AiTool {
  name: string;
  active: boolean;
}

/* ── Writing ── */
export interface Article {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  href: string;
  tags: string[];
}

/* ── Education ── */
export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  location: string;
  initials: string;
  color: string;
  notes: string;
}

/* ── Shared ── */
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

import { AiTool, Article, EducationEntry, ExperienceEntry, ImageItem, SkillGroup, WorkProject } from "../types";

/* ── Experience ─────────────────────────────────────────── */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Nykaa",
    companyUrl: "https://www.nykaa.com",
    role: "Software Engineer",
    period: "Oct 2024 - Present",
    location: "Gurugram",
    initials: "N",
    color: "#e91e8c",
    bullets: [
      "Built a modular, config-driven gamification system supporting onboarding flows and reusable game + marketing pages, reducing redundant dev effort by 70%.",
      "Architected component library with Storybook for design-system consistency across all gamification surfaces.",
      "Drove SSR adoption and performance improvements across the gamification platform.",
    ],
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "SSR", "Storybook", "Jest"],
  },
  {
    company: "Lumiq",
    companyUrl: "https://www.lumiq.ai",
    role: "Software Engineer",
    period: "July 2021 - Sept 2024",
    location: "Noida",
    initials: "L",
    color: "#111111",
    bullets: [
      "Built full-stack applications end-to-end as part of the core applications team.",
      "Developed Group Insurance Processing platform from the ground up.",
      "Developed Retail Insurance Processing platform.",
      "Part of the organisation's innovation charter, evaluating open-source databases and frameworks to inform adoption decisions.",
    ],
    techStack: ["React", "Node.js", "TypeScript", "MongoDB", "REST APIs", "Docker", "AWS", "Redis", "Kafka"],
  },
  {
    company: "Lumiq",
    companyUrl: "https://www.lumiq.ai",
    role: "Intern",
    period: "Feb 2021 - June 2021",
    location: "Noida",
    initials: "L",
    color: "#374151",
    bullets: [
      "Worked on a document processing product powered by data science.",
      "Refactored and documented existing codebase.",
      "Integrated new APIs and built UI for the same.",
    ],
  },
];

/* ── Work projects ───────────────────────────────────────── */
export const WORK_PROJECTS: WorkProject[] = [
  {
    title: "Jarvis",
    role: "Personal project",
    year: "2025",
    body: "AI-powered travel recommendation app using Gemini Nano. Guides users through a 7-step interactive quiz about travel preferences and generates personalised destination suggestions. Fully client-side, no backend required.",
    impact: "Explores on-device LLM capabilities via the browser's window.ai API, with a graceful fallback system when the model isn't available.",
    tags: ["React", "TypeScript", "Gemini Nano", "Vite"],
    links: [{ href: "https://github.com/abhishekp6/jarvis", label: "GitHub" }],
  },
  {
    title: "Dockerized Ollama",
    role: "Personal project",
    year: "2025",
    body: "A Docker-powered setup to run Ollama (local LLMs) anywhere: isolated, secure, and persistent. Includes resource controls, model storage via Docker volumes, and full HTTP API access for text generation and chat.",
    impact: "Enables portable local LLM deployments with configurable CPU/RAM limits and non-root execution for security hardening.",
    tags: ["Docker", "Node.js", "Ollama", "Shell"],
    links: [{ href: "https://github.com/abhishekp6/dockerized-ollama", label: "GitHub" }],
  },
  {
    title: "React Performant Table",
    role: "Personal project",
    year: "2025",
    body: "A high-performance, accessible data table component handling 1000+ rows with debounced search, multi-select filtering, sortable columns, and row selection that persists across filters.",
    impact: "Tested with 1200 records served from a Node.js REST API. Skeleton loading states, ARIA-compliant sorting, keyboard navigation.",
    tags: ["React", "TypeScript", "Node.js", "Jest"],
    links: [
      { href: "https://github.com/abhishekp6/react-performant-table", label: "GitHub" },
      { href: "https://react-performant-table.vercel.app", label: "Live" },
    ],
  },
  {
    title: "Learnest",
    role: "Personal project",
    year: "2022",
    body: "A web application for individual course creators to create, manage, and display video tutorials to their viewers, a lightweight alternative to full LMS platforms.",
    impact: "End-to-end full-stack build: content upload, video streaming, user authentication, and a viewer-facing course browsing UI.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    links: [
      { href: "https://github.com/abhishekp6/learnest", label: "GitHub" },
      { href: "https://learnest-fe.vercel.app", label: "Live" },
    ],
  },
];

/* ── Skills ──────────────────────────────────────────────── */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Angular", "Storybook", "Tailwind"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST APIs", "Express"],
  },
  {
    label: "Data & Infra",
    skills: ["MongoDB", "Redis", "Kafka", "Docker", "AWS", "Git"],
  },
  {
    label: "Practice",
    skills: ["System Design", "Performance", "Code Review", "SSR", "Testing"],
  },
];

/* ── AI workflow ─────────────────────────────────────────── */
export const AI_TOOLS: AiTool[] = [
  { name: "Claude Code", active: true },
  { name: "GitHub Copilot", active: true },
  { name: "Codex", active: false },
];

export const AI_TOKEN_USAGE = "~100K tokens / day";

/* ── Writing ─────────────────────────────────────────────── */
export const ARTICLES: Article[] = [
  {
    date: "Jan 2026",
    readTime: "2 min",
    title: "Developing Web Apps the AI Way",
    excerpt: "A tried-and-tested AI development workflow for building web applications more efficiently using generative AI and agentic tools.",
    href: "https://medium.com/@abhishekp6/developing-web-apps-the-ai-way-2c5f1aeb81fa",
    tags: ["AI", "Generative AI", "Agentic Workflow"],
  },
  {
    date: "Mar 2024",
    readTime: "5 min",
    title: "Docker: A Beginner's Guide",
    excerpt: "Foundational Docker concepts with a practical, hands-on approach, covering containerisation, images, volumes, and networking.",
    href: "https://medium.com/@abhishekp6/docker-a-beginners-guide-6439f8d4475d",
    tags: ["Docker", "DevOps", "Containers"],
  },
  {
    date: "Dec 2023",
    readTime: "6 min",
    title: "Hosting Web Apps: Cloud vs Bare Metal",
    excerpt: "An exploration of the trade-offs between managed cloud services and self-managed servers when hosting web applications.",
    href: "https://medium.com/@abhishekp6/hosting-web-applications-on-cloud-vs-bare-metal-ff1a499d3f8f",
    tags: ["Cloud", "Infrastructure", "DevOps"],
  },
];

/* ── Education ───────────────────────────────────────────── */
export const EDUCATION: EducationEntry[] = [
  {
    school: "Jaypee Institute of Information Technology",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2017 - 2021",
    location: "Noida",
    initials: "JIIT",
    color: "#111111",
    notes: "Coursework in data structures, algorithms, operating systems, and computer networks. Final year project on distributed systems.",
  },
];

/* ── Certifications (image grid) ─────────────────────────── */
export const CERTIFICATIONS: ImageItem[] = [
  { src: "/da.png",  alt: "AWS Developer Associate" },
  { src: "/cp.png",  alt: "AWS Cloud Practitioner" },
  { src: "/ta.png",  alt: "Technical Accreditation" },
  { src: "/ace.png", alt: "Google Associate Cloud Engineer" },
];

/* ── Nav ─────────────────────────────────────────────────── */
export const NAV_ITEMS = [
  { label: "Work",       href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing",    href: "#writing" },
];

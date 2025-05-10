import { Checkpoint, ImageItem, Project } from "../types";

export const PROFESSIONAL_EXPERIENCE: Checkpoint[] = [
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

export const SKILLS: ImageItem[] = [
  { src: "/js.svg", alt: "JavaScript" },
  { src: "/ts.svg", alt: "TypeScript" },
  { src: "/cpp.svg", alt: "C++" },
  { src: "/react.svg", alt: "React" },
  { src: "/angular.svg", alt: "Angular" },
  { src: "/node.svg", alt: "Node.js", darkMode: { brightness: 200 } },
  { src: "/mongo.svg", alt: "MongoDB", darkMode: { brightness: 200 } },
  { src: "/redis.svg", alt: "Redis" },
  { src: "/kafka.svg", alt: "Kafka" },
  { src: "/docker.svg", alt: "Docker" },
  { src: "/git.svg", alt: "Git", darkMode: { invert: true, brightness: 200 } },
  { src: "/aws.svg", alt: "AWS" },
];

export const CERTIFICATIONS: ImageItem[] = [
  { src: "/da.png", alt: "Developer Associate" },
  { src: "/cp.png", alt: "Cloud Practitioner" },
  { src: "/ta.png", alt: "Technical Accredation" },
  { src: "/ace.png", alt: "Google Associate Cloud Engineer" },
];

export const PROJECTS: Project[] = [
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

export const ABOUT_TEXT = `Hi Everyone, Welcome to my space. I'm a Software Engineer from India, currently working with awesome folks at Nykaa. I have completed my undergrad in Computer Science, from Jaypee Institute Of Information Technology, Noida, in 2021. I am a problem solver by heart and love to find new use cases of existing technologies.`;

export const NAV_ITEMS = [
  { label: "Home", href: "#header" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "https://medium.com/@abhishekp6", external: true },
];

export interface ProjectLink {
  demo?: string;
  github?: string;
  caseStudy?: string;
}

export interface ProjectScreenshot {
  src: string;
  altKey: string;
}

export interface Project {
  id: string;
  accentBar: string;
  stack: string[];
  featured?: boolean;
  links?: ProjectLink;
  screenshots?: ProjectScreenshot[];
}

export const projects: Project[] = [
  {
    id: "expensetrack",
    accentBar: "from-violet-500 to-indigo-500",
    featured: true,
    stack: [
      "Spring Boot",
      "Kotlin",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Flutter",
      "OpenAI",
      "Docker",
    ],
    links: {
      demo: "https://expensetrack-demo.vercel.app",
      github: "https://github.com/m1gue21/expenseTrack",
      caseStudy:
        "https://github.com/m1gue21/expenseTrack/blob/production/docs/CASE_STUDY.md",
    },
    screenshots: [
      { src: "/projects/expensetrack/login.png", altKey: "login" },
      { src: "/projects/expensetrack/dashboard.png", altKey: "dashboard" },
      { src: "/projects/expensetrack/admin.png", altKey: "admin" },
    ],
  },
  {
    id: "magic-stars",
    accentBar: "from-cyan-500 to-blue-500",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    id: "freeagentsdev",
    accentBar: "from-blue-500 to-purple-500",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "OpenAI", "LangChain"],
  },
  {
    id: "umanizales",
    accentBar: "from-emerald-500 to-cyan-500",
    stack: ["Astro", "Tailwind CSS", "Alpine.js"],
  },
  {
    id: "porter-metrics",
    accentBar: "from-orange-500 to-red-500",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "AWS Amplify"],
  },
];

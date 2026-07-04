export interface Project {
  id: string;
  gradient: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "magic-stars",
    gradient: "from-blue-600 via-primary to-purple-600",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    id: "freeagentsdev",
    gradient: "from-secondary via-cyan-500 to-primary",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "OpenAI", "LangChain"],
  },
  {
    id: "umanizales",
    gradient: "from-emerald-600 via-teal-500 to-secondary",
    stack: ["Astro", "Tailwind CSS", "Alpine.js"],
  },
  {
    id: "porter-metrics",
    gradient: "from-orange-500 via-amber-500 to-red-500",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "AWS Amplify"],
  },
];

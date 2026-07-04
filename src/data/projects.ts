export interface Project {
  id: string;
  accentBar: string;
  stack: string[];
}

export const projects: Project[] = [
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

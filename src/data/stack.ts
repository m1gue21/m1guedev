export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const stackData: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Astro", icon: "astro" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Python", icon: "python" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "OpenAI", icon: "openai" },
      { name: "LangChain", icon: "langchain" },
    ],
  },
  {
    category: "Mobile",
    items: [{ name: "Flutter", icon: "flutter" }],
  },
];

import { techIconMap } from "../utils/icons";

export interface TechItem {
  name: string;
  slug: string;
  color: string;
  category: string;
}

function item(name: string, category: string): TechItem {
  const meta = techIconMap[name];
  return { name, slug: meta.slug, color: meta.color, category };
}

export const stackCategories = [
  { id: "frontend", labelKey: "stack.categories.frontend" },
  { id: "backend", labelKey: "stack.categories.backend" },
  { id: "cloud", labelKey: "stack.categories.cloud" },
  { id: "ai", labelKey: "stack.categories.ai" },
  { id: "mobile", labelKey: "stack.categories.mobile" },
  { id: "tools", labelKey: "stack.categories.tools" },
];

export const stackItems: TechItem[] = [
  // Frontend
  item("Next.js", "frontend"),
  item("React", "frontend"),
  item("Angular", "frontend"),
  item("TypeScript", "frontend"),
  item("Tailwind CSS", "frontend"),
  item("Astro", "frontend"),
  item("Alpine.js", "frontend"),
  item("Bootstrap", "frontend"),
  // Backend
  item("Node.js", "backend"),
  item("NestJS", "backend"),
  item("Python", "backend"),
  item("PostgreSQL", "backend"),
  item("MongoDB", "backend"),
  item("Supabase", "backend"),
  // Cloud & DevOps
  item("AWS", "cloud"),
  item("Azure", "cloud"),
  item("Docker", "cloud"),
  item("Vercel", "cloud"),
  item("GitHub Actions", "cloud"),
  item("Git", "cloud"),
  item("Azure DevOps", "cloud"),
  // AI
  item("OpenAI", "ai"),
  item("LangChain", "ai"),
  // Mobile
  item("Flutter", "mobile"),
  // Tools
  item("GitHub", "tools"),
  item("Jira", "tools"),
  item("Figma", "tools"),
];

import { techIconMap } from "../utils/icons";

export interface TechItem {
  name: string;
  slug: string;
  color: string;
}

export interface TechCategory {
  id: string;
  items: TechItem[];
}

function item(name: string): TechItem {
  const meta = techIconMap[name];
  return { name, slug: meta.slug, color: meta.color };
}

export const stackData: TechCategory[] = [
  {
    id: "frontend",
    items: [
      item("Next.js"),
      item("React"),
      item("Angular"),
      item("TypeScript"),
      item("Tailwind CSS"),
      item("Astro"),
    ],
  },
  {
    id: "backend",
    items: [
      item("Node.js"),
      item("NestJS"),
      item("Python"),
      item("PostgreSQL"),
      item("MongoDB"),
      item("Supabase"),
    ],
  },
  {
    id: "cloud",
    items: [
      item("AWS"),
      item("Azure"),
      item("Docker"),
      item("Vercel"),
      item("GitHub Actions"),
    ],
  },
  {
    id: "ai",
    items: [item("OpenAI"), item("LangChain")],
  },
  {
    id: "mobile",
    items: [item("Flutter")],
  },
];

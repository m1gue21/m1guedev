export interface ExperienceItem {
  id: string;
  period: string;
  duration: string;
  location: string;
  stack: string[];
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  isCurrent?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "freeagentsdev",
    period: "Jun 2025 – Present",
    duration: "1 yr 2 mos",
    location: "Manizales · Hybrid",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "OpenAI"],
    accentFrom: "#3b82f6",
    accentTo: "#8b5cf6",
    glowColor: "139, 92, 246",
    isCurrent: true,
  },
  {
    id: "magic-stars",
    period: "Jul 2025 – Jan 2026",
    duration: "7 mos",
    location: "Manizales · Hybrid",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    accentFrom: "#06b6d4",
    accentTo: "#3b82f6",
    glowColor: "6, 182, 212",
  },
  {
    id: "sinapsis",
    period: "Dec 2024 – Mar 2025",
    duration: "4 mos",
    location: "Manizales · Remote",
    stack: ["Next.js", "React", "Tailwind CSS", "Azure DevOps"],
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    glowColor: "59, 130, 246",
  },
  {
    id: "umanizales",
    period: "Sep 2024 – Dec 2024",
    duration: "4 mos",
    location: "Manizales · Hybrid",
    stack: ["Astro", "Tailwind CSS", "Alpine.js"],
    accentFrom: "#10b981",
    accentTo: "#06b6d4",
    glowColor: "16, 185, 129",
  },
  {
    id: "porter-metrics",
    period: "Jun 2023 – Jun 2024",
    duration: "1 yr 1 mo",
    location: "Manizales · Hybrid",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "AWS Amplify"],
    accentFrom: "#f97316",
    accentTo: "#eab308",
    glowColor: "249, 115, 22",
  },
];

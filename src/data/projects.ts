export interface Project {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "Magic Stars",
    subtitle: "Logistics Platform",
    description:
      "Real-time logistics and order management platform replacing spreadsheet-based operations, handling 20+ messengers and 600+ daily orders across multiple companies.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    name: "Freeagentsdev",
    subtitle: "Custom Software Studio",
    description:
      "Custom web applications, e-commerce platforms, and AI-powered solutions for SMBs and entrepreneurs, serving 100–500 active users per client.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "OpenAI", "LangChain"],
  },
  {
    name: "Universidad de Manizales",
    subtitle: "Mobility Platform",
    description:
      "University academic mobility and exchange management platform serving 300+ students and academic staff.",
    stack: ["Astro", "Tailwind CSS", "Alpine.js"],
  },
  {
    name: "Porter Metrics",
    subtitle: "Admin Panel",
    description:
      "Led migration from Angular 12 to 16 improving stability and security compliance for a SaaS product used by 1,200+ businesses.",
    stack: ["Angular", "TypeScript", "Tailwind CSS", "AWS Amplify"],
  },
];

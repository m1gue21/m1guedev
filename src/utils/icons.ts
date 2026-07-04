export interface TechIconMeta {
  slug: string;
  color: string;
}

/** Simple Icons slug + official brand color (hex without #) */
export const techIconMap: Record<string, TechIconMeta> = {
  "Next.js": { slug: "nextdotjs", color: "ffffff" },
  React: { slug: "react", color: "61DAFB" },
  Angular: { slug: "angular", color: "DD0031" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Astro: { slug: "astro", color: "FF5D01" },
  "Alpine.js": { slug: "alpinedotjs", color: "8BC0D0" },
  Bootstrap: { slug: "bootstrap", color: "7952B3" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  NestJS: { slug: "nestjs", color: "E0234E" },
  Python: { slug: "python", color: "3776AB" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  Supabase: { slug: "supabase", color: "3ECF8E" },
  AWS: { slug: "amazonaws", color: "FF9900" },
  Azure: { slug: "microsoftazure", color: "0078D4" },
  "Azure DevOps": { slug: "azuredevops", color: "0078D4" },
  Docker: { slug: "docker", color: "2496ED" },
  Vercel: { slug: "vercel", color: "ffffff" },
  "GitHub Actions": { slug: "githubactions", color: "2088FF" },
  Git: { slug: "git", color: "F05032" },
  OpenAI: { slug: "openai", color: "ffffff" },
  LangChain: { slug: "langchain", color: "1C3C3C" },
  Flutter: { slug: "flutter", color: "02569B" },
  GitHub: { slug: "github", color: "ffffff" },
  Jira: { slug: "jira", color: "0052CC" },
  Figma: { slug: "figma", color: "F24E1E" },
  "AWS Amplify": { slug: "awsamplify", color: "FF9900" },
};

export function getIconUrl(slug: string, color = "ffffff"): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export function getTechIcon(name: string): TechIconMeta {
  return techIconMap[name] ?? { slug: "github", color: "ffffff" };
}

export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

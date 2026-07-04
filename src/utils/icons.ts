export interface TechIconMeta {
  slug: string;
  color: string;
}

/** Simple Icons slug + official brand color (hex without #) */
export const techIconMap: Record<string, TechIconMeta> = {
  "Next.js": { slug: "nextdotjs", color: "000000" },
  React: { slug: "react", color: "61DAFB" },
  Angular: { slug: "angular", color: "DD0031" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Astro: { slug: "astro", color: "BC52EE" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  NestJS: { slug: "nestjs", color: "E0234E" },
  Python: { slug: "python", color: "3776AB" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  Supabase: { slug: "supabase", color: "3FCF8E" },
  AWS: { slug: "amazonaws", color: "FF9900" },
  "AWS Amplify": { slug: "awsamplify", color: "FF9900" },
  Azure: { slug: "azure", color: "0078D4" },
  Docker: { slug: "docker", color: "2496ED" },
  Vercel: { slug: "vercel", color: "000000" },
  "GitHub Actions": { slug: "githubactions", color: "2088FF" },
  OpenAI: { slug: "openai", color: "412991" },
  LangChain: { slug: "langchain", color: "1C3C3C" },
  Flutter: { slug: "flutter", color: "02569B" },
  "Alpine.js": { slug: "alpinejs", color: "77C1D2" },
};

export function getIconUrl(slug: string, color = "ffffff"): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export function getTechIcon(name: string): TechIconMeta {
  return techIconMap[name] ?? { slug: "codeberg", color: "3b82f6" };
}

export type Locale = "en" | "es";

export interface Translations {
  meta: { title: string; description: string };
  nav: { links: string[] };
  hero: {
    brand: string;
    subtitle: string;
    tagline: string;
    roles: string[];
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    text: string;
    highlights: { value: string; label: string }[];
  };
  stack: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  projects: {
    title: string;
    subtitle: string;
    badge: string;
    items: Record<
      string,
      { name: string; subtitle: string; description: string; impact: string }
    >;
  };
  experience: {
    title: string;
    subtitle: string;
    items: Record<string, { company: string; role: string; impact: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: { copyright: string };
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "Miguel Angel Gallego | Software Engineer & Fullstack Developer",
      description:
        "Software Engineer focused on scalable digital products, modern web applications, and AI-powered solutions. Based in Manizales, Colombia.",
    },
    nav: {
      links: ["About", "Stack", "Projects", "Experience", "Contact"],
    },
    hero: {
      brand: "FreeAgents Dev",
      subtitle: "Building scalable digital products and AI-driven solutions",
      tagline: "Make it happen",
      roles: ["Software Engineer", "Fullstack Developer", "AI Solutions Builder"],
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
    },
    about: {
      title: "About",
      text: "Software Engineer focused on building scalable digital products, modern web applications, and AI-powered solutions. I enjoy understanding business challenges and turning them into reliable, maintainable technical solutions.",
      highlights: [
        { value: "4+", label: "Years of Experience" },
        { value: "10+", label: "Projects Delivered" },
        { value: "1,200+", label: "Businesses Impacted" },
      ],
    },
    stack: {
      title: "Tech Stack",
      subtitle: "Technologies and tools I use to build modern, scalable applications.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud & DevOps",
        ai: "AI",
        mobile: "Mobile",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Selected professional projects with real-world impact.",
      badge: "Professional Project",
      items: {
        "magic-stars": {
          name: "Magic Stars",
          subtitle: "Logistics Platform",
          description:
            "Real-time logistics and order management platform replacing spreadsheet-based operations, handling 20+ messengers and 600+ daily orders across multiple companies.",
          impact: "600+ daily orders",
        },
        freeagentsdev: {
          name: "Freeagentsdev",
          subtitle: "Custom Software Studio",
          description:
            "Custom web applications, e-commerce platforms, and AI-powered solutions for SMBs and entrepreneurs, serving 100–500 active users per client.",
          impact: "100–500 active users per client",
        },
        umanizales: {
          name: "Universidad de Manizales",
          subtitle: "Mobility Platform",
          description:
            "University academic mobility and exchange management platform serving 300+ students and academic staff.",
          impact: "300+ users",
        },
        "porter-metrics": {
          name: "Porter Metrics",
          subtitle: "Admin Panel",
          description:
            "Led migration from Angular 12 to 16 improving stability and security compliance for a SaaS product used by 1,200+ businesses.",
          impact: "1,200+ businesses",
        },
      },
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey building digital products.",
      items: {
        freeagentsdev: {
          company: "Freeagentsdev",
          role: "Founder & Lead Software Engineer",
          impact: "Led 4-developer team delivering custom solutions for SMBs",
        },
        "magic-stars": {
          company: "Magic Stars",
          role: "Lead Software Engineer",
          impact: "Built logistics platform handling 600+ daily orders",
        },
        sinapsis: {
          company: "SINAPSIS",
          role: "Frontend Developer",
          impact: "Developed performant web apps with Next.js and Azure DevOps",
        },
        umanizales: {
          company: "Universidad de Manizales",
          role: "Frontend Lead",
          impact: "Led frontend team of 2 interns for university platform",
        },
        "porter-metrics": {
          company: "Porter Metrics",
          role: "Junior Frontend Developer",
          impact: "Migrated admin panel serving 1,200+ business clients",
        },
      },
    },
    contact: {
      title: "Let's work together",
      subtitle: "Open to remote opportunities and interesting projects",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copyright: "Miguel Angel Gallego Alvarez",
    },
  },
  es: {
    meta: {
      title: "Miguel Angel Gallego | Ingeniero de Software & Desarrollador Fullstack",
      description:
        "Ingeniero de Software enfocado en productos digitales escalables, aplicaciones web modernas y soluciones con IA. Basado en Manizales, Colombia.",
    },
    nav: {
      links: ["Sobre mí", "Stack", "Proyectos", "Experiencia", "Contacto"],
    },
    hero: {
      brand: "FreeAgents Dev",
      subtitle: "Construyendo productos digitales escalables y soluciones con IA",
      tagline: "Make it happen",
      roles: ["Ingeniero de Software", "Desarrollador Fullstack", "Constructor de Soluciones IA"],
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contáctame",
    },
    about: {
      title: "Sobre mí",
      text: "Ingeniero de Software enfocado en construir productos digitales escalables, aplicaciones web modernas y soluciones potenciadas por inteligencia artificial. Disfruto entender los desafíos del negocio y convertirlos en soluciones técnicas confiables y mantenibles.",
      highlights: [
        { value: "4+", label: "Años de Experiencia" },
        { value: "10+", label: "Proyectos Entregados" },
        { value: "1,200+", label: "Negocios Impactados" },
      ],
    },
    stack: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías y herramientas que uso para construir aplicaciones modernas y escalables.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud & DevOps",
        ai: "IA",
        mobile: "Mobile",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Proyectos profesionales seleccionados con impacto real.",
      badge: "Proyecto Profesional",
      items: {
        "magic-stars": {
          name: "Magic Stars",
          subtitle: "Plataforma Logística",
          description:
            "Plataforma de logística y gestión de pedidos en tiempo real que reemplazó operaciones basadas en hojas de cálculo, manejando 20+ mensajeros y 600+ pedidos diarios en múltiples empresas.",
          impact: "600+ daily orders",
        },
        freeagentsdev: {
          name: "Freeagentsdev",
          subtitle: "Estudio de Software a Medida",
          description:
            "Aplicaciones web personalizadas, plataformas e-commerce y soluciones con IA para PyMEs y emprendedores, sirviendo 100–500 usuarios activos por cliente.",
          impact: "100–500 active users per client",
        },
        umanizales: {
          name: "Universidad de Manizales",
          subtitle: "Plataforma de Movilidad",
          description:
            "Plataforma de gestión de movilidad académica e intercambios universitarios que sirve a 300+ estudiantes y personal académico.",
          impact: "300+ users",
        },
        "porter-metrics": {
          name: "Porter Metrics",
          subtitle: "Panel Administrativo",
          description:
            "Lideré la migración de Angular 12 a 16 mejorando estabilidad y cumplimiento de seguridad para un producto SaaS usado por 1,200+ negocios.",
          impact: "1,200+ businesses",
        },
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional construyendo productos digitales.",
      items: {
        freeagentsdev: {
          company: "Freeagentsdev",
          role: "Fundador & Lead Software Engineer",
          impact: "Lideré equipo de 4 desarrolladores entregando soluciones a medida para PyMEs",
        },
        "magic-stars": {
          company: "Magic Stars",
          role: "Lead Software Engineer",
          impact: "Construí plataforma logística manejando 600+ pedidos diarios",
        },
        sinapsis: {
          company: "SINAPSIS",
          role: "Desarrollador Frontend",
          impact: "Desarrollé apps web performantes con Next.js y Azure DevOps",
        },
        umanizales: {
          company: "Universidad de Manizales",
          role: "Frontend Lead",
          impact: "Lideré equipo frontend de 2 practicantes para plataforma universitaria",
        },
        "porter-metrics": {
          company: "Porter Metrics",
          role: "Junior Frontend Developer",
          impact: "Migré panel admin sirviendo 1,200+ clientes empresariales",
        },
      },
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle: "Abierto a oportunidades remotas y proyectos interesantes",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      copyright: "Miguel Angel Gallego Alvarez",
    },
  },
};

export const DEFAULT_LOCALE: Locale = "en";
export const STORAGE_KEY = "portfolio-locale";

export function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in (current as object)) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

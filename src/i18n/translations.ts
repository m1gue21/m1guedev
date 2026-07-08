export type Locale = "en" | "es";

export interface Translations {
  meta: { title: string; description: string };
  nav: { links: string[] };
  hero: {
    available: string;
    subtitle: string;
    roles: string[];
    ctaProjects: string;
    ctaContact: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    textHtml: string;
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
    featuredBadge: string;
    links: { demo: string; github: string; caseStudy: string };
    items: Record<
      string,
      {
        name: string;
        subtitle: string;
        description: string;
        impact: string;
        screenshots?: Record<string, string>;
      }
    >;
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    items: Record<string, { company: string; role: string; impact: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    response: string;
  };
  footer: { copyright: string; builtWith: string };
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
      available: "Available for remote work",
      subtitle: "Building scalable digital products and AI-driven solutions",
      roles: ["Software Engineer", "Fullstack Developer", "AI Solutions Builder"],
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      stats: [
        { value: "4+", label: "Years" },
        { value: "50+", label: "Projects" },
        { value: "1,200+", label: "Businesses" },
      ],
    },
    about: {
      title: "About",
      textHtml:
        'Software Engineer focused on building <span class="highlight-cyan">scalable</span> digital products, modern web applications, and <span class="highlight-cyan">AI-powered</span> solutions. I enjoy understanding business challenges and turning them into reliable, <span class="highlight-cyan">maintainable</span> technical solutions.',
      highlights: [
        { value: "4+", label: "Years of Experience" },
        { value: "50+", label: "Projects Delivered" },
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
        tools: "Tools",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Selected professional projects with real-world impact.",
      badge: "Professional Project",
      featuredBadge: "Featured Case Study",
      links: {
        demo: "Live Demo",
        github: "GitHub",
        caseStudy: "Case Study",
      },
      items: {
        expensetrack: {
          name: "ExpenseTrack",
          subtitle: "Corporate Travel Expense Platform",
          description:
            "Full-stack expense management platform inspired by SAP Concur — one REST API powering web (Next.js), mobile (Flutter), and an admin panel. Employees submit expense reports, managers approve or reject them, and a real-time analytics dashboard tracks spending by category and status. Includes AI receipt scanning, 41 automated tests, and CI/CD across 3 repos.",
          impact: "3 clients · 1 API · 41 tests",
          screenshots: {
            login: "ExpenseTrack login screen",
            dashboard: "ExpenseTrack analytics dashboard",
            admin: "ExpenseTrack admin panel",
          },
        },
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
      current: "Current",
      items: {
        freeagentsdev: {
          company: "Freeagentsdev",
          role: "Founder & Lead Software Engineer",
          impact:
            "Founded and led a 4-developer software studio delivering custom web apps, e-commerce platforms and AI-powered solutions for SMBs with 100–500 active users per client.",
        },
        "magic-stars": {
          company: "Magic Stars",
          role: "Lead Software Engineer",
          impact:
            "Designed and built a logistics platform from scratch replacing spreadsheet-based operations — enabling real-time coordination of 20+ messengers and 600+ daily orders across multiple companies.",
        },
        sinapsis: {
          company: "SINAPSIS",
          role: "Frontend Developer",
          impact:
            "Developed performant web apps with Next.js and React, built reusable component libraries, and contributed to CI/CD pipelines using Azure DevOps within agile Scrum teams.",
        },
        umanizales: {
          company: "Universidad de Manizales",
          role: "Frontend Lead",
          impact:
            "Led frontend development of a university mobility platform serving 300+ students, managing a team of 2 interns and driving architecture decisions and code quality standards.",
        },
        "porter-metrics": {
          company: "Porter Metrics",
          role: "Junior Frontend Developer",
          impact:
            "Contributed to the Angular 12 → 16 migration of the admin panel, improving stability, security compliance and maintainability for a SaaS product used by 1,200+ business clients.",
        },
      },
    },
    contact: {
      title: "Let's work together",
      subtitle: "Open to remote opportunities and interesting projects",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      response: "Response within 24 hours",
    },
    footer: {
      copyright: "Miguel Angel Gallego",
      builtWith: "Built with Astro & Tailwind",
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
      available: "Disponible para trabajo remoto",
      subtitle: "Construyendo productos digitales escalables y soluciones con IA",
      roles: ["Ingeniero de Software", "Desarrollador Fullstack", "Constructor de Soluciones IA"],
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contáctame",
      stats: [
        { value: "4+", label: "Años" },
        { value: "50+", label: "Proyectos" },
        { value: "1,200+", label: "Negocios" },
      ],
    },
    about: {
      title: "Sobre mí",
      textHtml:
        'Ingeniero de Software enfocado en construir productos digitales <span class="highlight-cyan">escalables</span>, aplicaciones web modernas y soluciones <span class="highlight-cyan">potenciadas por IA</span>. Disfruto entender los desafíos del negocio y convertirlos en soluciones técnicas confiables y <span class="highlight-cyan">mantenibles</span>.',
      highlights: [
        { value: "4+", label: "Años de Experiencia" },
        { value: "50+", label: "Proyectos Entregados" },
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
        tools: "Herramientas",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Proyectos profesionales seleccionados con impacto real.",
      badge: "Proyecto Profesional",
      featuredBadge: "Case Study Destacado",
      links: {
        demo: "Demo en vivo",
        github: "GitHub",
        caseStudy: "Case Study",
      },
      items: {
        expensetrack: {
          name: "ExpenseTrack",
          subtitle: "Plataforma de Gastos Corporativos de Viaje",
          description:
            "Plataforma full-stack de gestión de gastos inspirada en SAP Concur — una API REST que alimenta web (Next.js), mobile (Flutter) y panel admin. Los empleados envían reportes de gastos, los managers los aprueban o rechazan, y un dashboard analítico en tiempo real muestra el gasto por categoría y estado. Incluye escaneo de recibos con IA, 41 tests automatizados y CI/CD en 3 repos.",
          impact: "3 clientes · 1 API · 41 tests",
          screenshots: {
            login: "Pantalla de login de ExpenseTrack",
            dashboard: "Dashboard analítico de ExpenseTrack",
            admin: "Panel de administración de ExpenseTrack",
          },
        },
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
      current: "Actual",
      items: {
        freeagentsdev: {
          company: "Freeagentsdev",
          role: "Fundador & Lead Software Engineer",
          impact:
            "Fundé y lideré un estudio de software de 4 desarrolladores entregando aplicaciones web, e-commerce y soluciones con IA para pymes con 100–500 usuarios activos por cliente.",
        },
        "magic-stars": {
          company: "Magic Stars",
          role: "Lead Software Engineer",
          impact:
            "Diseñé y construí una plataforma logística desde cero reemplazando operaciones manuales — coordinando en tiempo real 20+ mensajeros y 600+ pedidos diarios entre múltiples empresas.",
        },
        sinapsis: {
          company: "SINAPSIS",
          role: "Desarrollador Frontend",
          impact:
            "Desarrollé aplicaciones web con Next.js y React, construí librerías de componentes reutilizables y contribuí a pipelines CI/CD con Azure DevOps en equipos ágiles Scrum.",
        },
        umanizales: {
          company: "Universidad de Manizales",
          role: "Frontend Lead",
          impact:
            "Lideré el frontend de una plataforma universitaria de movilidad para 300+ estudiantes, gestionando 2 practicantes y definiendo decisiones de arquitectura y estándares de calidad.",
        },
        "porter-metrics": {
          company: "Porter Metrics",
          role: "Junior Frontend Developer",
          impact:
            "Contribuí a la migración de Angular 12 → 16 del panel administrativo, mejorando estabilidad, seguridad y mantenibilidad de un producto SaaS usado por 1,200+ empresas clientes.",
        },
      },
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle: "Abierto a oportunidades remotas y proyectos interesantes",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      response: "Respuesta en menos de 24 horas",
    },
    footer: {
      copyright: "Miguel Angel Gallego",
      builtWith: "Hecho con Astro & Tailwind",
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

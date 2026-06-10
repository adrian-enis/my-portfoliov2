export type Experience = {
  company: string;
  role: string;
  period: string;
  desc: string;
  chips: string[];
  url?: string;
};

export async function getExperience(): Promise<Experience[]> {
  return [
    {
      company: "Helados Dibuluc",
      role: "Full-stack Developer",
      period: "ENE 2026 — PRESENTE",
      desc: "Marketplace artesanal con Spec-Driven Development (AI-First). Flujos agénticos con Cursor y MCP. CI/CD con GitHub Actions.",
      chips: ["React", "Node.js", "GitHub Actions", "Cursor MCP", "AI-First"],
    },
    {
      company: "Tiendas Daka",
      role: "Full-stack Developer",
      period: "ENE 2024 — AGO 2025",
      desc: "Modernicé módulos e-commerce con Next.js (App Router), mejorando rendimiento e indexación. Implementé Server Actions para simplificar la comunicación frontend-backend. Diseñé modelos en PostgreSQL con Prisma ORM y construí componentes accesibles con Tailwind CSS y Headless UI.",
      chips: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
      url: "https://www.tiendasdaka.com/ve",
    },
    {
      company: "MultiMax",
      role: "Full-stack Developer",
      period: "NOV 2022 — OCT 2023",
      desc: "Desarrollé plataforma e-commerce MERN con APIs REST seguras (JWT) y control de acceso por roles. Optimicé estado y sincronización con Zustand y React Query. Implementé formularios con React Hook Form y Zod para validación robusta.",
      chips: ["React", "MongoDB", "Express", "Zustand", "Zod"],
      url: "https://multimax.com.ve/",
    },
  ];
}
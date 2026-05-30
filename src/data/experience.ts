export type Experience = {
  company: string;
  role: string;
  period: string;
  desc: string;
  chips: string[];
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
      desc: "Migración a Next.js 14 App Router. Server Actions, Prisma ORM, PostgreSQL y componentes accesibles con Headless UI.",
      chips: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
    },
    {
      company: "MultiMax",
      role: "Full-stack Developer",
      period: "NOV 2022 — OCT 2023",
      desc: "E-commerce MERN con APIs RESTful, autenticación JWT por roles, Zustand, React Query y validación con Zod.",
      chips: ["React", "MongoDB", "Express", "Zustand", "Zod"],
    },
  ];
}
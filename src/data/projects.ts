export type Project = {
  title: string;
  desc: string;
  chips: string[];
  emoji: string;
};

export async function getProjects(): Promise<Project[]> {
  return [
    {
      emoji: "🍦",
      title: "Helados Dibuluc — Marketplace MVP",
      desc: "Marketplace end-to-end con gestión de inventario, carrito y pagos. Metodología AI-First con Cursor MCP.",
      chips: ["React", "Node.js", "PostgreSQL", "AI-First", "CI/CD"],
    },
    {
      emoji: "🏪",
      title: "Tiendas Daka — E-commerce",
      desc: "Plataforma de retail venezolana. Migración a Next.js 14 con mejoras críticas de Core Web Vitals y SEO.",
      chips: ["Next.js 14", "TypeScript", "Prisma", "Headless UI"],
    },
    {
      emoji: "🛒",
      title: "MultiMax — Plataforma E-commerce",
      desc: "E-commerce MERN con autenticación JWT por roles y estado global optimizado.",
      chips: ["React", "MongoDB", "Express", "React Query"],
    },
  ];
}
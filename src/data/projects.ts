export type ProjectVisual = "costs" | "store";

export type Project = {
  title: string;
  desc: string;
  chips: string[];
  visual: ProjectVisual;
  status?: { label: string; tone: "wip" | "neutral" };
  url?: string;
};

export type ArchivedProject = {
  title: string;
  chips: string[];
  url: string;
};

export async function getProjects(): Promise<Project[]> {
  return [
    {
      visual: "costs",
      title: "App de Costos y Rentabilidad",
      desc: "App móvil que calcula costos por lote, márgenes e inventario perpetuo con costo promedio ponderado. Funciona offline con SQLite y migraciones versionadas, y recibe actualizaciones OTA con EAS Update.",
      chips: ["React Native", "Expo", "TypeScript", "SQLite", "Zod"],
      status: { label: "App privada", tone: "neutral" },
    },
    {
      visual: "store",
      title: "Tienda Web · Heladería Dibiluc",
      desc: "Tienda online de pedidos para una heladería artesanal. Carrito, checkout integrado con WhatsApp y precios históricos por pedido en PostgreSQL (Supabase), sobre un backend en capas con Express.",
      chips: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Supabase"],
      status: { label: "En desarrollo", tone: "wip" },
    },
  ];
}

export async function getArchivedProjects(): Promise<ArchivedProject[]> {
  return [
    {
      title: "Expense Planner",
      chips: ["React", "Tailwind CSS", "Vite"],
      url: "https://radiant-pavlova-b62f1f.netlify.app/",
    },
    {
      title: "Tricki",
      chips: ["React", "Vite", "JavaScript"],
      url: "https://tricki.netlify.app/",
    },
    {
      title: "Landing Page",
      chips: ["React", "Vite", "Bootstrap"],
      url: "https://melodic-tiramisu-841958.netlify.app/",
    },
    {
      title: "Design Slider",
      chips: ["HTML", "CSS", "JavaScript"],
      url: "https://inquisitive-sprite-a6ef8a.netlify.app/",
    },
  ];
}

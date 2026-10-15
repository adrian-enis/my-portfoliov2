export type Experience = {
  company: string;
  role: string;
  period: string;
  desc: string;
  highlights: string[];
  chips: string[];
  url?: string;
};

export async function getExperience(): Promise<Experience[]> {
  return [
    {
      company: "Heladería Dibiluc",
      role: "Full-stack Developer",
      period: "ENE 2026 — PRESENTE",
      desc: "Ecosistema digital de una heladería artesanal: app móvil de costos y tienda online.",
      highlights: [
        "App móvil con React Native, Expo y TypeScript que calcula costos por lote, márgenes e inventario perpetuo con costo promedio ponderado.",
        "Persistencia offline en SQLite con migraciones versionadas y respaldos, y actualizaciones OTA con EAS Update.",
        "Lógica organizada en servicios y repositorios, validada con Zod y cubierta por **65 pruebas automatizadas**.",
        "Tienda online con React, Vite, Node.js y Express: carrito, checkout por WhatsApp y precios históricos por pedido en PostgreSQL (Supabase).",
      ],
      chips: ["TypeScript", "React Native", "Expo", "SQLite", "React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    },
    {
      company: "Freelance",
      role: "Full-stack Developer",
      period: "ENE 2023 — ABR 2026",
      desc: "Aplicaciones web a medida para pymes, desde el relevamiento hasta el despliegue y mantenimiento.",
      highlights: [
        "Modernicé módulos de e-commerce con Next.js (App Router) y Server Actions, mejorando la carga y el SEO.",
        "Desarrollé apps MERN y APIs REST con Node.js y TypeScript, con autenticación y autorización JWT.",
        "Diseñé modelos relacionales en PostgreSQL con Prisma ORM y consultas tipadas para procesos críticos.",
        "Construí paneles administrativos y formularios con React Hook Form, Zod, Tailwind CSS y Headless UI.",
      ],
      chips: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "MongoDB", "Tailwind CSS"],
    },
  ];
}

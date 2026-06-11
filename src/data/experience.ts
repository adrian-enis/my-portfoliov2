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
      desc: "Diseñé la arquitectura y desarrollé el backend de una tienda online para una heladería artesanal, estructurado en capas (routes, controllers, services, repositories) sobre Express + TypeScript con PostgreSQL vía Supabase. Definí el modelo de datos y el flujo de checkout con integración a WhatsApp. Configuré el proyecto como monorepo con pnpm workspaces para escalar a frontend en React + Vite + Tailwind CSS.",
      chips: ["TypeScript", "Express", "PostgreSQL", "Supabase", "React", "Tailwind CSS", "pnpm"],
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
      desc: "Participé en el desarrollo de una plataforma e-commerce basada en el stack MERN, implementando funcionalidades orientadas a escalabilidad y crecimiento del catálogo digital. • Diseñé APIs REST seguras con autenticación y autorización basada en JWT, fortaleciendo el control de acceso y la protección de recursos críticos. • Optimicé la gestión de estado y sincronización de datos mediante Zustand y React Query, mejorando la fluidez de la aplicación y reduciendo solicitudes redundantes al servidor. • Implementé formularios complejos con React Hook Form y Zod, fortaleciendo la validación de datos y disminuyendo errores en los procesos de captura de información.",
      chips: ["React", "MongoDB", "Express", "Zustand", "Zod"],
      url: "https://multimax.com.ve/",
    },
  ];
}
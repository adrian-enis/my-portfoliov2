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
      desc: "Lideré el desarrollo de un marketplace para una heladería artesanal, transformando procesos manuales de ventas e inventario en flujos digitales centralizados. • Implementé automatizaciones basadas en IA y herramientas MCP para agilizar la gestión operativa, reduciendo tareas repetitivas y mejorando la trazabilidad de pedidos e inventario. • Diseñé la arquitectura Full-stack de la solución utilizando React, Node.js y bases de datos relacionales, priorizando escalabilidad, mantenibilidad y rapidez de iteración. • Establecí prácticas de desarrollo guiadas por especificaciones y validación automatizada, acelerando la entrega de funcionalidades y disminuyendo retrabajos durante el desarrollo.",
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
      desc: "Participé en el desarrollo de una plataforma e-commerce basada en el stack MERN, implementando funcionalidades orientadas a escalabilidad y crecimiento del catálogo digital. • Diseñé APIs REST seguras con autenticación y autorización basada en JWT, fortaleciendo el control de acceso y la protección de recursos críticos. • Optimicé la gestión de estado y sincronización de datos mediante Zustand y React Query, mejorando la fluidez de la aplicación y reduciendo solicitudes redundantes al servidor. • Implementé formularios complejos con React Hook Form y Zod, fortaleciendo la validación de datos y disminuyendo errores en los procesos de captura de información.",
      chips: ["React", "MongoDB", "Express", "Zustand", "Zod"],
      url: "https://multimax.com.ve/",
    },
  ];
}
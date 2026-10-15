export type SkillGroup = { title: string; items: string[] };

export async function getSkills(): Promise<SkillGroup[]> {
  return [
    { title: "Frontend",       items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query"] },
    { title: "Mobile",         items: ["React Native", "Expo", "EAS Update"] },
    { title: "Backend",        items: ["Node.js", "Express", "APIs REST", "Prisma ORM", "JWT"] },
    { title: "Bases de datos", items: ["PostgreSQL", "SQLite", "MongoDB"] },
    { title: "Herramientas",   items: ["Git", "Conventional Commits", "Zod", "Cursor", "MCP", "Prompt Engineering"] },
  ];
}

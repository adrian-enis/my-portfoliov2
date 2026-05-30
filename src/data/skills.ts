export type SkillGroup = { title: string; items: string[] };

export async function getSkills(): Promise<SkillGroup[]> {
  return [
    { title: "Frontend",      items: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "React Query"] },
    { title: "Backend",       items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs / JWT"] },
    { title: "AI Engineering",items: ["Spec-Driven Dev", "Cursor & MCP", "Agentic Workflows", "Prompt Engineering", "GitHub Actions"] },
  ];
}
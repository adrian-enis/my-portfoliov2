export type SkillGroup = { title: string; items: string[] };

export async function getSkills(): Promise<SkillGroup[]> {
  return [
    { title: "Frontend",       items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query"] },
    { title: "Backend",        items: ["Node.js", "Express.js", "RESTful APIs", "Prisma ORM", "JWT"] },
    { title: "AI Engineering", items: ["Spec-Driven Development", "Agentic Workflows", "Cursor & MCP", "Prompt Engineering"] },
    { title: "Databases",      items: ["PostgreSQL", "MongoDB"] },
  ];
}
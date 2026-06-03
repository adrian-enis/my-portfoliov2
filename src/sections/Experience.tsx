import type { Experience } from "@/data/experience";

type Props = {
    id?: string;
    items: Experience[];
};

const chipColors: Record<string, string> = {
    blue: "bg-blue-900/30 text-blue-300 border border-blue-700/30",
    green: "bg-teal-900/30 text-teal-300 border border-teal-700/30",
    purple: "bg-purple-900/30 text-purple-300 border border-purple-700/30",
};

const chipColor = (chip: string) => {
    const green = ["Node.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Express", "GitHub Actions", "CI/CD"];
    const purple = ["AI-First", "Cursor MCP", "Agentic Workflows", "Spec-Driven Dev"];
    if (purple.some(t => chip.includes(t))) return chipColors.purple;
    if (green.some(t => chip.includes(t))) return chipColors.green;
    return chipColors.blue;
};

export default function Experience({ id, items }: Props) {
    return (
        <section id={id} className="mb-24 scroll-mt-24">
            <div className="flex flex-col gap-1">
                {items.map((exp) => (
                    <div
                        key={exp.company}
                        className="exp-card group grid gap-4 p-4 rounded-lg border border-transparent transition-all duration-300"
                        style={{ gridTemplateColumns: "110px 1fr" }}
                    >
                        <span className="text-xs text-(--color-slate) uppercase tracking-wider leading-relaxed pt-1 font-medium">
                            {exp.period}
                        </span>
                        <div>
                            <h3 className="text-sm font-medium text-(--color-slate-lighter) mb-1 leading-snug">
                                {exp.role}{" "}
                                <span className="text-(--color-green)">· {exp.company}</span>
                                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50">↗</span>
                            </h3>
                            <p className="text-xs text-(--color-slate) leading-relaxed mb-3">
                                {exp.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className={"text-xs px-3 py-1 rounded-full font-medium " + chipColor(chip)}
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-(--color-slate-lighter) border-b border-transparent hover:border-(--color-green) hover:text-(--color-green) transition-all duration-300 pb-px"
            >
                Ver CV completo
                <span className="transition-transform duration-200 hover:translate-x-1">→</span>
            </a>
        </section>
    );
}

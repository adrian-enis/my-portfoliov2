import type { Project } from "@/data/projects";

type Props = {
    id?: string;
    items: Project[];
};

const chipColor = (chip: string) => {
    const green = ["Node.js", "PostgreSQL", "MongoDB", "Prisma", "Express", "CI/CD"];
    const purple = ["AI-First", "Cursor MCP"];
    if (purple.some(t => chip.includes(t))) return "bg-purple-900/30 text-purple-300 border border-purple-700/30";
    if (green.some(t => chip.includes(t))) return "bg-teal-900/30 text-teal-300 border border-teal-700/30";
    return "bg-blue-900/30 text-blue-300 border border-blue-700/30";
};

export default function Projects({ id, items }: Props) {
    return (
        <section id={id} className="mb-24 scroll-mt-24">
            <div className="flex flex-col gap-1">
                {items.map((proj) => (
                    <div
                        key={proj.title}
                        className="exp-card group grid gap-4 p-4 rounded-lg border border-transparent transition-all duration-300"
                        style={{ gridTemplateColumns: "64px 1fr" }}
                    >
                        {/* Thumbnail */}
                        <div className="w-14 h-12 rounded border border-(--color-navy-lighter) bg-(--color-navy-light) flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 group-hover:border-teal-500/40">
                            {proj.emoji}
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-(--color-slate-lighter) mb-1 leading-snug flex items-center gap-1">
                                {proj.title}
                                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50 text-xs">↗</span>
                            </h3>
                            <p className="text-xs text-(--color-slate) leading-relaxed mb-3">
                                {proj.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {proj.chips.map((chip) => (
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
        </section>
    );
}
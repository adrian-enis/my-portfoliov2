import RevealWrapper from "@/components/common/RevealWrapper";
import type { Project } from "@/data/projects";
import {
    cardBodyClass,
    cardChipsClass,
    cardClassProjects,
    cardDescClass,
    cardTitleClass,
    listClass,
} from "@/sections/cardLayout";

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
        <section id={id} className="scroll-mt-24">
            <div className={listClass}>
                {items.map((proj, i) => (
                    <RevealWrapper key={proj.title} delay={i * 100}>
                        <a
                            href={proj.url}
                            target="_blank"
                            rel="noopener"
                            className="block"
                        >
                            <div className={cardClassProjects}>
                                <div className="w-14 h-12 rounded border border-(--color-navy-lighter) bg-(--color-navy-light) flex items-center justify-center text-2xl shrink-0 transition-all duration-300 group-hover:border-teal-500/40">
                                    {proj.emoji}
                                </div>

                                <div className={cardBodyClass}>
                                    <h3 className={`${cardTitleClass} flex items-center gap-1`}>
                                        {proj.title}
                                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50 text-xs">↗</span>
                                    </h3>
                                    <p className={cardDescClass}>{proj.desc}</p>
                                    <div className={cardChipsClass}>
                                        {proj.chips.map((chip) => (
                                            <span
                                                key={chip}
                                                className={"text-xs px-2.5 py-1 rounded-full font-medium " + chipColor(chip)}
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </RevealWrapper>
                ))}
            </div>
        </section>
    );
}

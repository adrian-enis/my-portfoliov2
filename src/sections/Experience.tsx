import RevealWrapper from "@/components/common/RevealWrapper";
import type { Experience } from "@/data/experience";
import {
    cardBodyClass,
    cardChipsClass,
    cardClass,
    cardDescClass,
    cardPeriodClass,
    cardTitleClass,
    listClass,
} from "@/sections/cardLayout";

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
        <section id={id} className="scroll-mt-24">
            <div className={listClass}>
                {items.map((exp, i) => (
                    <RevealWrapper key={exp.company} delay={i * 100}>
                        <div className={cardClass}>
                            <span className={cardPeriodClass}>
                                {exp.period}
                            </span>
                            <div className={cardBodyClass}>
                                <h3 className={cardTitleClass}>
                                    {exp.role}{" "}
                                    <span className="text-(--color-green)">· {exp.company}</span>
                                    <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50">↗</span>
                                </h3>
                                <p className={cardDescClass}>{exp.desc}</p>
                                <div className={cardChipsClass}>
                                    {exp.chips.map((chip) => (
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
                    </RevealWrapper>
                ))}
            </div>

            <a
                href="#"
                className="inline-flex items-center gap-2 mt-16 lg:ml-5 text-sm font-medium text-(--color-slate-lighter) border-b border-transparent hover:border-(--color-green) hover:text-(--color-green) transition-all duration-300 pb-px"
            >
                Ver CV completo
                <span className="transition-transform duration-200 hover:translate-x-1">→</span>
            </a>
        </section>
    );
}

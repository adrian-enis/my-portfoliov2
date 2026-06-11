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

function ExpCardContent({ exp }: { exp: Experience }) {
    return (
        <>
            <span className={`${cardPeriodClass} text-xs`}>
                {exp.period}
            </span>
            <div className={cardBodyClass}>
                <h3 className={`${cardTitleClass} text-base leading-tight`}>
                    {exp.role}{" "}
                    <span className="text-(--color-green)">· {exp.company}</span>
                    <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50">↗</span>
                </h3>
                <p className={`${cardDescClass} text-sm`}>{exp.desc}</p>
                <div className={cardChipsClass}>
                    {exp.chips.map((chip) => (
                        <span
                            key={chip}
                            className={"text-xs px-2.5 py-0.5 rounded-full font-medium " + chipColor(chip)}
                        >
                            {chip}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default function Experience({ id, items }: Props) {
    return (
        <section id={id} className="scroll-mt-24 min-h-dvh flex flex-col justify-center py-16">
            <div className={listClass}>
                {items.map((exp, i) => (
                    <RevealWrapper key={exp.company} delay={i * 100}>
                        {exp.url ? (
                            <a href={exp.url} target="_blank" rel="noopener" className={cardClass}>
                                <ExpCardContent exp={exp} />
                            </a>
                        ) : (
                            <div className={cardClass}>
                                <ExpCardContent exp={exp} />
                            </div>
                        )}
                    </RevealWrapper>
                ))}
            </div>

        </section>
    );
}

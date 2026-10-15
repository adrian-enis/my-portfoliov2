import RevealWrapper from "@/components/common/RevealWrapper";
import Section from "@/components/common/Section";
import MarkedText from "@/components/common/MarkedText";
import ChipList from "@/components/ui/ChipList";
import type { Experience } from "@/data/experience";
import { cardBodyClass, cardClass, listClass } from "@/sections/cardLayout";

type Props = {
    id: string;
    items: Experience[];
};

function Period({ period }: { period: string }) {
    const [start, end] = period.split(" — ");
    return (
        <span className="exp-period">
            {start} —{" "}
            {end === "PRESENTE" ? <span className="text-(--color-gold)">{end}</span> : end}
        </span>
    );
}

function ExpCardContent({ exp }: { exp: Experience }) {
    return (
        <>
            <Period period={exp.period} />
            <div className={cardBodyClass}>
                <h3 className="exp-title">
                    {exp.role}{" "}
                    <span className="text-(--color-green)">· {exp.company}</span>
                    {exp.url && (
                        <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-50">↗</span>
                    )}
                </h3>
                <p className="exp-lede">{exp.desc}</p>
                <ul className="flex flex-col gap-2">
                    {exp.highlights.map((item) => (
                        <li key={item} className="exp-point">
                            <span><MarkedText text={item} /></span>
                        </li>
                    ))}
                </ul>
                <div className="pt-1">
                    <ChipList chips={exp.chips} />
                </div>
            </div>
        </>
    );
}

export default function Experience({ id, items }: Props) {
    return (
        <Section id={id} title="Experiencia">
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
        </Section>
    );
}

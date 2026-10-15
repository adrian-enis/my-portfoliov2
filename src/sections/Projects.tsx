import RevealWrapper from "@/components/common/RevealWrapper";
import Section from "@/components/common/Section";
import ChipList from "@/components/ui/ChipList";
import ProjectVisual from "@/components/ui/ProjectVisual";
import type { ArchivedProject, Project } from "@/data/projects";

type Props = {
    id: string;
    items: Project[];
    archive: ArchivedProject[];
};

function ProjectCard({ proj }: { proj: Project }) {
    const card = (
        <article className="proj-card">
            <ProjectVisual visual={proj.visual} />
            <div className="flex flex-col gap-4 px-6 pt-5 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="proj-title">{proj.title}</h3>
                    {proj.status && (
                        <span className={proj.status.tone === "wip" ? "pill pill-wip" : "pill"}>
                            {proj.status.label}
                        </span>
                    )}
                </div>
                <p className="proj-desc">{proj.desc}</p>
                <ChipList chips={proj.chips} />
            </div>
        </article>
    );

    return proj.url ? (
        <a href={proj.url} target="_blank" rel="noopener" className="block">
            {card}
        </a>
    ) : (
        card
    );
}

export default function Projects({ id, items, archive }: Props) {
    return (
        <Section id={id} title="Proyectos">
            <div className="flex flex-col gap-6">
                {items.map((proj, i) => (
                    <RevealWrapper key={proj.title} delay={i * 100}>
                        <ProjectCard proj={proj} />
                    </RevealWrapper>
                ))}
            </div>

            <div className="flex flex-col pt-4">
                <h3 className="text-sm font-semibold text-(--color-slate-lighter) mb-2">
                    Proyectos anteriores
                </h3>
                {archive.map((proj) => (
                    <a key={proj.title} href={proj.url} target="_blank" rel="noopener" className="archive-row">
                        <span className="flex flex-col">
                            <span className="archive-name">{proj.title}</span>
                            <span className="text-sm">{proj.chips.join(" · ")}</span>
                        </span>
                        <span className="archive-arrow" aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        </Section>
    );
}

import { proseParagraphClass } from "@/sections/cardLayout";

type Props = {
    id?: string;
};

export default function About({ id }: Props) {
    return (
        <section id={id} className="scroll-mt-24 min-h-dvh flex flex-col justify-center py-16">
            <p className={proseParagraphClass}>
                Soy un desarrollador full-stack con{" "}
                <span className="text-(--color-slate-lighter) font-medium">3 años de experiencia</span>{" "}
                construyendo aplicaciones web escalables. Mi foco está en el ecosistema
                JavaScript/TypeScript y en integrar inteligencia artificial de forma
                estratégica para optimizar flujos de trabajo reales.
            </p>
            <p className={proseParagraphClass}>
                Me especializo en la metodología{" "}
                <span className="text-(--color-green) font-medium">Spec-Driven Development (AI-First)</span>,
                usando herramientas como Cursor y MCP para automatizar lógica de negocio
                y entregar productos alineados 100% con las especificaciones desde el primer día.
            </p>
            <p className={proseParagraphClass}>
                Actualmente curso Ingeniería en Informática en la{" "}
                <span className="text-(--color-slate-lighter) font-medium">
                    Universidad Nacional Experimental de Guayana
                </span>{" "}
                y trabajo en proyectos propios de marketplace y automatización.
            </p>
        </section>
    );
}

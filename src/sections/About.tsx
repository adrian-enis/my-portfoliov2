import { proseParagraphClass } from "@/sections/cardLayout";

type Props = {
    id?: string;
};

export default function About({ id }: Props) {
    return (
        <section id={id} className="scroll-mt-24 min-h-dvh flex flex-col justify-center py-16">
            <p className={proseParagraphClass}>
                Soy desarrollador Full-stack especializado en la creación de aplicaciones web
                utilizando React, Next.js, Node.js y TypeScript. Disfruto construir productos
                que resuelvan problemas reales y aporten valor a negocios y usuarios.
            </p>
            <p className={proseParagraphClass}>
                He trabajado en proyectos relacionados con e-commerce, gestión de datos y
                automatización de procesos, participando tanto en el desarrollo de interfaces
                modernas como en la implementación de lógica de negocio y APIs.
            </p>
            <p className={proseParagraphClass}>
                Utilizo herramientas modernas como Cursor y MCP para acelerar el desarrollo,
                validar especificaciones y mejorar la productividad, manteniendo siempre el
                foco en la calidad, mantenibilidad y escalabilidad del software.
            </p>
        </section>
    );
}

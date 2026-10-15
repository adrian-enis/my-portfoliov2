import Section from "@/components/common/Section";

type Props = {
    id: string;
};

export default function About({ id }: Props) {
    return (
        <Section id={id} title="Sobre mí">
            <div className="flex flex-col gap-5 text-lg leading-[1.75]">
                <p>
                    Soy desarrollador Full-stack con <span className="metric">más de 3 años</span>{" "}
                    construyendo aplicaciones web y móviles para pymes y e-commerce con React,
                    Next.js, Node.js y TypeScript. Me enfoco en modelar bien la lógica de negocio y
                    en llevar productos completos desde la especificación hasta producción.
                </p>
                <p>
                    Hoy desarrollo el ecosistema digital de una heladería artesanal: una{" "}
                    <span className="text-(--color-slate-lighter)">app móvil</span> que calcula
                    costos, márgenes e inventario y funciona sin conexión, y la{" "}
                    <span className="text-(--color-slate-lighter)">tienda online</span> donde los
                    clientes arman y envían sus pedidos. Antes trabajé como freelance creando
                    tiendas, APIs y paneles administrativos a medida para pymes.
                </p>
                <p>
                    Organizo el código en capas, valido los datos con Zod y escribo pruebas
                    automatizadas para que el software sea fácil de mantener. Uso herramientas como
                    Cursor y MCP para acelerar el desarrollo. Soy estudiante de Ingeniería en
                    Informática y me estoy formando intensivamente en inglés.
                </p>
            </div>
        </Section>
    );
}

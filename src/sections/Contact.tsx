import Section from "@/components/common/Section";
import CopyButton from "@/components/ui/CopyButton";
import DownloadCV from "@/components/ui/DownloadCV";
import { EMAIL } from "@/data/contact";

type Props = { id: string };

export default function Contact({ id }: Props) {
    return (
        <Section id={id} title="Contacto">
            <div className="contact-card">
                <h3 className="text-2xl font-bold tracking-tight text-(--color-white) text-balance">
                    Si tienes un proyecto o una vacante, escríbeme.
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                    <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>
                    <CopyButton text={EMAIL} />
                </div>
                <DownloadCV />
            </div>
            <p className="text-sm">Hecho con Next.js y Tailwind CSS.</p>
        </Section>
    );
}

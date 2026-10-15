type Props = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function Section({ id, title, children }: Props) {
    return (
        <section id={id} className="scroll-mt-24 flex flex-col gap-7">
            <h2 className="section-title">{title}</h2>
            {children}
        </section>
    );
}

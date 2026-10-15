/** Resalta en dorado los fragmentos marcados con **doble asterisco**. */
export default function MarkedText({ text }: { text: string }) {
    const parts = text.split(/\*\*(.+?)\*\*/);
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <span key={i} className="metric">{part}</span> : part
            )}
        </>
    );
}

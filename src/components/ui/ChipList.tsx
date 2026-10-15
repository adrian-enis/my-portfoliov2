type Props = {
    chips: string[];
    muted?: boolean;
};

export default function ChipList({ chips, muted = false }: Props) {
    return (
        <ul className="flex flex-wrap gap-2">
            {chips.map((chip) => (
                <li key={chip} className={muted ? "chip chip-muted" : "chip"}>
                    {chip}
                </li>
            ))}
        </ul>
    );
}

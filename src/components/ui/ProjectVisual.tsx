import type { ProjectVisual as Visual } from "@/data/projects";

/** Ilustraciones de los proyectos sin captura pública. Reemplazar por capturas reales cuando existan. */
export default function ProjectVisual({ visual }: { visual: Visual }) {
    return (
        <div className="proj-visual" aria-hidden="true">
            {visual === "costs" ? <CostsMock /> : <StoreMock />}
        </div>
    );
}

function CostsMock() {
    const rows = [
        ["Insumos", "$ 18.400"],
        ["Mano de obra", "$ 6.200"],
    ];
    return (
        <div className="w-38 h-[84%] rounded-[1.2rem] border-2 border-(--color-navy-lighter) bg-(--color-navy-light) px-2.5 py-3 flex flex-col gap-2 text-[0.6rem] leading-tight text-(--color-slate-light) tabular-nums">
            <span className="text-[0.68rem] font-semibold text-(--color-white)">Lote #24 · Dulce de leche</span>
            {rows.map(([label, value]) => (
                <span key={label} className="flex justify-between border-b border-(--color-navy-lighter) pb-1">
                    {label} <b className="font-semibold text-(--color-slate-lighter)">{value}</b>
                </span>
            ))}
            <span className="flex justify-between border-b border-(--color-navy-lighter) pb-1">
                Costo por kg <b className="font-semibold text-(--color-green)">$ 2.460</b>
            </span>
            <span>Margen 38 %</span>
            <span className="mt-auto h-1.5 rounded-full bg-(--color-navy-lighter) overflow-hidden">
                <span className="block h-full w-[38%] bg-(--color-green)" />
            </span>
        </div>
    );
}

function StoreMock() {
    const flavors = [
        ["Dulce de leche", "bg-[#c98f5c]"],
        ["Frutilla", "bg-[#f2d7e0]"],
        ["Menta", "bg-[#8fd4b5]"],
    ];
    return (
        <div className="w-[82%] h-[80%] rounded-[0.6rem] border border-(--color-navy-lighter) bg-(--color-navy-light) flex flex-col overflow-hidden">
            <div className="flex gap-1 px-2.5 py-2 border-b border-(--color-navy-lighter)">
                {[0, 1, 2].map((i) => (
                    <i key={i} className="size-1.75 rounded-full bg-(--color-navy-lighter)" />
                ))}
            </div>
            <div className="flex-1 grid grid-cols-3 gap-2 p-2.5">
                {flavors.map(([name, color]) => (
                    <div key={name} className="rounded-[0.45rem] border border-(--color-navy-lighter) flex flex-col items-center justify-center gap-1 text-[0.58rem] text-(--color-slate-light)">
                        <span className={`size-6 rounded-[50%_50%_45%_45%] ${color}`} />
                        {name}
                    </div>
                ))}
            </div>
            <div className="mx-2.5 mb-2.5 rounded-[0.35rem] bg-(--color-green) py-1.5 text-center text-[0.6rem] font-semibold text-(--color-navy)">
                Enviar pedido por WhatsApp
            </div>
        </div>
    );
}

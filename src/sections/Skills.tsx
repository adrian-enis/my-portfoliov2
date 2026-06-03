import type { SkillGroup } from "@/data/skills";

type Props = { id?: string; items: SkillGroup[] };

export default function Skills({ id, items }: Props) {
  return (
    <section id={id} className="mb-24 scroll-mt-24">
      <div className="grid grid-cols-3 gap-8">
        {items.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-(--color-green) mb-4">{group.title}</h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-xs text-(--color-slate-light)">
                  <span className="text-(--color-green) text-xs">▹</span>{skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
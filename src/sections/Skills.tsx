import type { SkillGroup } from "@/data/skills";
import { cardDescClass } from "@/sections/cardLayout";

type Props = { id?: string; items: SkillGroup[] };

export default function Skills({ id, items }: Props) {
  return (
    <section id={id} className="scroll-mt-24 min-h-dvh flex flex-col justify-center py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-12">
        {items.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-(--color-green) mb-5">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((skill) => (
                <li key={skill} className={`flex items-start gap-2.5 ${cardDescClass}`}>
                  <span className="text-(--color-green) mt-1.5 flex-shrink-0">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

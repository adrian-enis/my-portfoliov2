import Section from "@/components/common/Section";
import ChipList from "@/components/ui/ChipList";
import type { SkillGroup } from "@/data/skills";

type Props = { id: string; items: SkillGroup[] };

export default function Skills({ id, items }: Props) {
  return (
    <Section id={id} title="Skills">
      <div className="flex flex-col">
        {items.map((group) => (
          <div key={group.title} className="skill-row">
            <h3 className="font-mono text-sm font-medium text-(--color-green)">
              {group.title}
            </h3>
            <ChipList chips={group.items} muted />
          </div>
        ))}
      </div>
    </Section>
  );
}

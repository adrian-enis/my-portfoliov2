"use client";
import { useActiveSection } from "@/hooks/useActiveSection";

const items = ["sobre-mí", "experiencia", "proyectos", "skills"];
const labels: Record<string, string> = {
  "sobre-mí":   "Sobre mí",
  "experiencia":"Experiencia",
  "proyectos":  "Proyectos",
  "skills":     "Skills",
};

export default function NavMenu() {
  const active = useActiveSection(items);

  return (
    <nav className="flex flex-col gap-1">
      {items.map((id) => (
        <a
          key={id}
          href={"#" + id}
          className="nav-item flex items-center gap-4 py-2 w-fit"
        >
          <span className={`nav-line ${active === id ? "nav-line-active" : ""}`} />
          <span className={`nav-text text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${active === id ? "nav-text-active" : "text-(--color-slate)"}`}>
            {labels[id]}
          </span>
        </a>
      ))}
    </nav>
  );
}
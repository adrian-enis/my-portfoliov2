export type Project = {
  title: string;
  desc: string;
  chips: string[];
  emoji: string;
  url: string;
};

export async function getProjects(): Promise<Project[]> {
  return [
    {
      emoji: "🎠",
      title: "Design Slider — Carrusel Interactivo",
      desc: "Carrusel de imágenes con navegación por thumbnails y flechas. HTML, CSS y JavaScript vanilla con diseño responsivo.",
      chips: ["HTML", "CSS", "JavaScript"],
      url: "https://inquisitive-sprite-a6ef8a.netlify.app/",
    },
    {
      emoji: "⚡",
      title: "React App — Landing Page",
      desc: "Aplicación React con Bootstrap y tipografía personalizada. Interfaz moderna y responsive.",
      chips: ["React", "Vite", "Bootstrap"],
      url: "https://melodic-tiramisu-841958.netlify.app/",
    },
    {
      emoji: "📊",
      title: "Expense Planner",
      desc: "Planificador de gastos personal. Aplicación para registrar, categorizar y visualizar gastos con Tailwind CSS.",
      chips: ["React", "Tailwind CSS", "Vite"],
      url: "https://radiant-pavlova-b62f1f.netlify.app/",
    },
    {
      emoji: "🧩",
      title: "Tricki — App Web",
      desc: "Aplicación web desarrollada con React y Vite. Interfaz dinámica y optimizada para rendimiento.",
      chips: ["React", "Vite", "JavaScript"],
      url: "https://tricki.netlify.app/",
    },
  ];
}
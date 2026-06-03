import { getExperience } from "@/data/experience";
import { getProjects } from "@/data/projects";
import { getSkills } from "@/data/skills";
import About from "@/sections/About";
import Experience from "@/sections/Experience";


export default async function Home() {
  const [experience, projects, skills] = await Promise.all([
    getExperience(),
    getProjects(),
    getSkills(),
  ]);

  return (
    <div className="main-container ">

      {/* LEFT — sticky */}
      <aside className=" flex flex-col justify-between h-100vh position-sticky top-0 ">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-(--color-green) font-mono text-sm mb-4">Hola, mi nombre es</p>
            <h1 className="text-5xl font-semibold text-(--color-white) mb-3 leading-tight">
              Adrian Enis
            </h1>
            <h2 className="text-xl text-(--color-slate-light) mb-6">
              Full-stack Developer · AI-First
            </h2>
            <p className="text-(--color-slate) text-sm leading-relaxed max-w-xs">
              Construyo aplicaciones web escalables con{" "}
              <span className="text-(--color-slate-lighter)">React, Next.js y Node.js</span>,
              con enfoque en arquitecturas{" "}
              <span className="text-(--color-green)">AI-First</span>.
            </p>
          </div>

          <nav className="flex flex-col gap-1">
            {["Sobre mí", "Experiencia", "Proyectos", "Skills", "Contacto"].map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase().replace(/\s+/g, "-")}
                className="nav-item flex items-center gap-4 py-2 w-fit"
              >
                <span className="nav-line" />
                <span className="nav-text text-xs font-medium uppercase tracking-widest text-(--color-slate)">
                  {item}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="flex gap-5">
          <a href="https://github.com/adrianenis" target="_blank" rel="noopener" aria-label="GitHub"
            className="text-(--color-slate) hover:text-(--color-green) transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/adrianenis" target="_blank" rel="noopener" aria-label="LinkedIn"
            className="text-(--color-slate) hover:text-(--color-green) transition-colors duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:adrianenis2000@gmail.com" aria-label="Email"
            className="text-(--color-slate) hover:text-(--color-green) transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </aside>

      {/* RIGHT — scrollable */}
      <main className="flex-1 flex flex-col gap-20">
        <About id="sobre-mí" />
        <Experience id="experiencia" items={experience} />
      </main>

    </div>
  );
}
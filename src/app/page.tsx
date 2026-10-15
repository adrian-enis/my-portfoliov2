import { getExperience } from "@/data/experience";
import { getArchivedProjects, getProjects } from "@/data/projects";
import { getSkills } from "@/data/skills";
import ProfileHeader from "@/components/ui/ProfileHeader";
import SocialLinks from "@/components/ui/SocialLinks";
import NavMenu from "@/components/ui/NavMenu";
import DownloadCV from "@/components/ui/DownloadCV";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default async function Home() {
  const [experience, projects, archivedProjects, skills] = await Promise.all([
    getExperience(),
    getProjects(),
    getArchivedProjects(),
    getSkills(),
  ]);

  return (
    <div className="main-container">

      {/* Sidebar: solo desktop (lg+) */}
      <aside className="site-aside hidden lg:flex flex-col justify-between">
        <ProfileHeader />
        <NavMenu />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
          <DownloadCV />
          <SocialLinks />
        </div>
      </aside>

      <main className="site-main flex flex-col gap-20 lg:gap-24">
        {/* Encabezado mobile/tablet */}
        <header className="lg:hidden flex flex-col gap-8 pt-16">
          <ProfileHeader />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
            <DownloadCV />
            <SocialLinks />
          </div>
        </header>

        <About id="sobre-mí" />
        <Experience id="experiencia" items={experience} />
        <Projects id="proyectos" items={projects} archive={archivedProjects} />
        <Skills id="skills" items={skills} />
        <Contact id="contacto" />
      </main>

    </div>
  );
}

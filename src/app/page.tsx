import { getExperience } from "@/data/experience";
import { getProjects } from "@/data/projects";
import { getSkills } from "@/data/skills";
import ProfileHeader from "@/components/ui/ProfileHeader";
import SocialLinks from "@/components/ui/SocialLinks";
import NavMenu from "@/components/ui/NavMenu";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default async function Home() {
  const [experience, projects, skills] = await Promise.all([
    getExperience(),
    getProjects(),
    getSkills(),
  ]);

  return (
    <div className="main-container">

      {/* Sidebar: solo desktop (lg+) */}
      <aside className="site-aside hidden lg:flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <ProfileHeader />
          <NavMenu />
        </div>
        <SocialLinks />
      </aside>

      <main className="site-main flex flex-col">
        {/* Encabezado mobile/tablet */}
        <header className="lg:hidden flex flex-col gap-10 pt-16 pb-4">
          <ProfileHeader showBio={false} />
          <SocialLinks />
        </header>

        <About id="sobre-mí" />
        <Experience id="experiencia" items={experience} />
        <Projects id="proyectos" items={projects} />
        <Skills id="skills" items={skills} />
      </main>

    </div>
  );
}

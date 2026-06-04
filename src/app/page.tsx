import { getExperience } from "@/data/experience";
import { getProjects } from "@/data/projects";
import { getSkills } from "@/data/skills";
import ProfileHeader from "@/components/ui/ProfileHeader";
import SocialLinks from "@/components/ui/SocialLinks";
import NavMenu from "@/components/ui/NavMenu";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default async function Home() {
  const [experience, projects] = await Promise.all([
    getExperience(),
    getProjects(),
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

      <main className="site-main flex flex-col gap-28 sm:gap-32 lg:gap-40">
        {/* Encabezado mobile/tablet */}
        <header className="lg:hidden flex flex-col gap-10 pb-4">
          <ProfileHeader showBio={false} />
          <SocialLinks />
        </header>

        <About id="sobre-mí" />
        <Experience id="experiencia" items={experience} />
        <Projects id="proyectos" items={projects} />
      </main>

    </div>
  );
}

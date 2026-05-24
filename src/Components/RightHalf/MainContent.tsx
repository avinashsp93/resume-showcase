import Contact from "./A_Contact";
import Biography from "./B_Biography";
import Experience from "./C_Experience";
import TechStack from "./F_TechStack";
import Project from "./E_Project";
import Footer from "../LeftHalf/C_Footer";
import FootNotes from "./G_FootNotes";
import { useData } from "../../contexts/DataContext";

function MainContent() {
  const { rightHalf } = useData();

  return (
    <div>
      <section id="contact">
        <Contact />
      </section>
      <section id="biography">
        <Biography />
      </section>
      <section id="experiences">
        {rightHalf.experiences.map(function (experience: any) {
          return <Experience key={experience.key} expKey={experience.key} />;
        })}
      </section>
      <section id="tech-stacks">
        <TechStack />
      </section>
      <section id="projects">
        {rightHalf.projects.map(function (project: any) {
          return <Project key={project.key} projKey={project.key} />;
        })}
      </section>
      <section id="small-screen-footer">
        <Footer />
      </section>
      <section id="footer" className="no-border-bottom">
        <FootNotes footnotes={rightHalf.footnotes} />
      </section>
    </div>
  );
}

export default MainContent;

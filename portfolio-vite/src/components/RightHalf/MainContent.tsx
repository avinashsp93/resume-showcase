import Contact from "./A_Contact";
import Biography from "./B_Biography";
import Experience from "./C_Experience";
import TechStack from "./F_TechStack";
import Project from "./E_Project";
import { useData } from "../../contexts/DataContext";

function MainContent() {
  const { rightHalf } = useData();

  return (
    <div className="right-half">
      <hr />
      <Contact />
      <hr />
      <Biography />
      <hr />
      {rightHalf.experiences.map(function (experience: any) {
        return <Experience key={experience.key} expKey={experience.key} />;
      })}
      <hr />
      <TechStack />
      <hr />
      {rightHalf.projects.map(function (project: any) {
        return <Project key={project.key} projKey={project.key} />;
      })}
      <hr />
    </div>
  );
}

export default MainContent;

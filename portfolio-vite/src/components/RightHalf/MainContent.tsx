import Contact from "./A_Contact";
import Biography from "./B_Biography";
import Experience from "./C_Experience";
import TechStack from "./F_TechStack";
import Project from "./E_Project";
import FootNotes from "./G_FootNotes";

function MainContent(props: any) {
  var rightHalf = props.rightHalf;

  return (
    <div className="right-half">
      <hr />
      <Contact bio={rightHalf.bio} />
      <hr />
      <Biography bio={rightHalf.bio} />
      <hr />
      {rightHalf.experiences.map(function (experience: any) {
        return <Experience key={experience.key} experience={experience} />;
      })}
      <hr />
      <TechStack techStacks={rightHalf.techStacks} />
      <hr />
      {rightHalf.projects.map(function (project: any) {
        return <Project key={project.key} project={project} />;
      })}
      <hr />
      <FootNotes footnotes={rightHalf.footnotes} />
      <hr />
    </div>
  );
}

export default MainContent;

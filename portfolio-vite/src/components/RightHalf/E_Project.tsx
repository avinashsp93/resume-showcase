import { useData } from "../../contexts/DataContext";

function Project(props: any) {
  const {
    rightHalf: { projects },
  } = useData();
  const project = projects.find((p: any) => p.key === props.projKey);

  if (!project) return null;

  return (
    <div className="project row m-2 p-2">
      <div className="col-sm-4 text-center text-uppercase">
        <h6>{project.name}</h6>
      </div>
      <div className="col-sm-8">
        <h5>
          {project.name} - {project.client}
        </h5>
        <p>{project.description}</p>
        <br />
      </div>
    </div>
  );
}

export default Project;

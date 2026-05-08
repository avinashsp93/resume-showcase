function Project(props: any) {
  var project = props.project;

  return (
    <div id="proj" className="project row m-2 p-2">
      <div className="mt-2 col-sm-4 text-center">
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

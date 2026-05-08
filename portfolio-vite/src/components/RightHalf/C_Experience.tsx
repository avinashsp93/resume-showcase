import Link from "./D_Link";

function Experience(props: any) {
  var experience = props.experience;

  return (
    <div id="exp" className="experience row">
      <div className="mt-2 col-sm-4 text-center">
        <h6>{experience.timeline}</h6>
      </div>
      <div className="col-sm-8 text-justify">
        <h5>
          {experience.designation} &#x2022; {experience.company}
        </h5>
        <p>{experience.summary}</p>
        {experience.links.map(function (link) {
          return <Link key={link} link={link} />;
        })}
      </div>
    </div>
  );
}

export default Experience;

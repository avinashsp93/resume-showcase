import Link from "./D_Link";
import { useData } from "../../contexts/DataContext";

function Experience(props: any) {
  const {
    rightHalf: { experiences },
  } = useData();
  const experience = experiences.find((e: any) => e.key === props.expKey);

  if (!experience) return null;

  return (
    <div className="experience row">
      <div className="col-sm-12 col-md-4 text-center">
        <h6>{experience.timeline}</h6>
      </div>
      <div className="col-sm-12 col-md-8 text-justify">
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

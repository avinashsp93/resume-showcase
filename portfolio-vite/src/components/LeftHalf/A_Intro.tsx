import { useData } from "../../contexts/DataContext";
import "./Sidebar.css";

function Intro() {
  const {
    leftHalf: { name, tagline },
  } = useData();

  return (
    <div className="my-brief">
      <h1 className="display-3">{name}</h1>
      <h3 className="fs-3">{tagline}</h3>
    </div>
  );
}

export default Intro;

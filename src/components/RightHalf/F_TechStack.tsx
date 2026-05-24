import { useEffect, useState } from "react";

import "./MainContent.css";

import { useData } from "../../contexts/DataContext";

function TechStack() {
  const {
    rightHalf: { techStacks },
  } = useData();

  const [activeOption, setActiveOption] = useState("Languages");

  useEffect(() => {
    console.log(activeOption);
  }, [activeOption]);

  const isActiveLanguages = activeOption === "Languages";
  const isActiveFrameworks = activeOption === "Frameworks";
  const isActiveTools = activeOption === "Tools";

  return (
    <div className="tech-stack">
      <ul>
        <li
          className={`h6 text-uppercase ${isActiveLanguages ? "active" : ""}`}
          onClick={setActiveOption.bind(null, "Languages")}
        >
          Languages
        </li>
        <li
          className={`h6 text-uppercase ${isActiveFrameworks ? "active" : ""}`}
          onClick={setActiveOption.bind(null, "Frameworks")}
        >
          Frameworks
        </li>
        <li
          className={`h6 text-uppercase ${isActiveTools ? "active" : ""}`}
          onClick={setActiveOption.bind(null, "Tools")}
        >
          Tools
        </li>
      </ul>
      <div className={`tech-icons-container`}>
        <div className="language-container">
          {techStacks
            .filter((tech: any) => tech.category === "Languages")
            .map((tech: any) => (
              <div
                key={tech.name}
                className={`tech-icon ${isActiveLanguages ? "fading-in" : "fading-out"}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/${tech.name}.svg`}
                  alt={tech.name}
                  title={tech.name}
                />
              </div>
            ))}
        </div>
        <div className="framework-container">
          {techStacks
            .filter((tech: any) => tech.category === "Frameworks")
            .map((tech: any) => (
              <div
                key={tech.name}
                className={`tech-icon ${isActiveFrameworks ? "fading-in" : "fading-out"}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/${tech.name}.svg`}
                  alt={tech.name}
                  title={tech.name}
                />
              </div>
            ))}
        </div>
        <div className="tool-container">
          {techStacks
            .filter((tech: any) => tech.category === "Tools")
            .map((tech: any) => (
              <div
                key={tech.name}
                className={`tech-icon ${isActiveTools ? "fading-in" : "fading-out"}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/${tech.name}.svg`}
                  alt={tech.name}
                  title={tech.name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;

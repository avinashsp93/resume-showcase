import { useState } from "react";

import "./MainContent.css";

import { useData } from "../../contexts/DataContext";

function TechStack() {
  const {
    rightHalf: { techStacks },
  } = useData();

  var _useState2 = useState(true),
    isActiveLanguages = _useState2[0],
    setIsActiveLanguages = _useState2[1];
  var _useState3 = useState(false),
    isActiveFrameworks = _useState3[0],
    setIsActiveFrameworks = _useState3[1];
  var _useState4 = useState(false),
    isActiveTools = _useState4[0],
    setIsActiveTools = _useState4[1];

  function handleOptionSelected(event: any) {
    var option = event.target.innerHTML;

    switch (option) {
      case "Languages":
        setIsActiveLanguages(true);
        setIsActiveFrameworks(false);
        setIsActiveTools(false);
        break;
      case "Frameworks":
        setIsActiveLanguages(false);
        setIsActiveFrameworks(true);
        setIsActiveTools(false);
        break;
      case "Tools":
        setIsActiveLanguages(false);
        setIsActiveFrameworks(false);
        setIsActiveTools(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tech-stack">
      <ul>
        <li className="h6 text-uppercase" onClick={handleOptionSelected}>
          Languages
        </li>
        <li className="h6 text-uppercase" onClick={handleOptionSelected}>
          Frameworks
        </li>
        <li className="h6 text-uppercase" onClick={handleOptionSelected}>
          Tools
        </li>
      </ul>
      <div className="tech-icons-container">
        {techStacks.map(function (techStackSvg) {
          if (
            (isActiveLanguages && techStackSvg.category === "Languages") ||
            (isActiveFrameworks && techStackSvg.category === "Frameworks") ||
            (isActiveTools && techStackSvg.category === "Tools")
          ) {
            return (
              <img
                key={techStackSvg.name}
                src={`./../../src/images/${techStackSvg.name}.svg`}
                alt="Tech Stack"
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}

export default TechStack;

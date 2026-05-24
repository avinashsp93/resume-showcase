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
  var _useState5 = useState(false),
    isFading = _useState5[0],
    setIsFading = _useState5[1];

  function handleOptionSelected(event: any) {
    var option = event.target.innerHTML;

    // Trigger fade-out
    setIsFading(true);

    // Wait for fade-out animation to complete, then switch category and fade back in
    setTimeout(() => {
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
      setIsFading(false);
    }, 300); // Match the CSS transition duration
  }

  return (
    <div className="tech-stack">
      <ul>
        <li
          className={`h6 text-uppercase ${isActiveLanguages ? "active" : ""}`}
          onClick={handleOptionSelected}
        >
          Languages
        </li>
        <li
          className={`h6 text-uppercase ${isActiveFrameworks ? "active" : ""}`}
          onClick={handleOptionSelected}
        >
          Frameworks
        </li>
        <li
          className={`h6 text-uppercase ${isActiveTools ? "active" : ""}`}
          onClick={handleOptionSelected}
        >
          Tools
        </li>
      </ul>
      <div className={`tech-icons-container ${isFading ? "fading-out" : ""}`}>
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
                title={techStackSvg.name}
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

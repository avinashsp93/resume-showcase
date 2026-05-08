import React, { useState } from "react";

import Angular from "./../../Images/Angular.svg";
import Apple from "./../../Images/Apple.svg";
import Bamboo from "./../../Images/Bamboo.svg";
import BitBucket from "./../../Images/BitBucket.svg";
import Bootstrap from "./../../Images/Bootstrap.svg";
import Bulma from "./../../Images/Bulma.svg";
import C from "./../../Images/C.svg";
import CSharp from "./../../Images/CSharp.svg";
import CSS3 from "./../../Images/CSS3.svg";
import Express from "./../../Images/Express.svg";
import Git from "./../../Images/Git.svg";
import GitHub from "./../../Images/GitHub.svg";
import GoogleCloud from "./../../Images/GoogleCloud.svg";
import HTML5 from "./../../Images/HTML5.svg";
import IntelliJIDEA from "./../../Images/IntelliJIDEA.svg";
import Jasmine from "./../../Images/Jasmine.svg";
import JavaScript from "./../../Images/JavaScript.svg";
import Jira from "./../../Images/Jira.svg";
import jQuery from "./../../Images/jQuery.svg";
import LaTeX from "./../../Images/LaTeX.svg";
import Linux from "./../../Images/Linux.svg";
import MongoDB from "./../../Images/MongoDB.svg";
import NETCore from "./../../Images/NETCore.svg";
import Node from "./../../Images/Nodejs.svg";
import Nodemon from "./../../Images/Nodemon.svg";
import NPM from "./../../Images/NPM.svg";
import NuGet from "./../../Images/NuGet.svg";
import ObjectiveC from "./../../Images/ObjectiveC.svg";
import Oracle from "./../../Images/Oracle.svg";
import Postman from "./../../Images/Postman.svg";
import Python from "./../../Images/Python.svg";
import RabbitMQ from "./../../Images/RabbitMQ.svg";
import Reacter from "./../../Images/Reacter.svg";
import Redux from "./../../Images/Redux.svg";
import Sass from "./../../Images/Sass.svg";
import Splunk from "./../../Images/Splunk.svg";
import SQLDeveloper from "./../../Images/SQLDeveloper.svg";
import Swagger from "./../../Images/Swagger.svg";
import TypeScript from "./../../Images/TypeScript.svg";
import Ubuntu from "./../../Images/Ubuntu.svg";
import VisualStudio from "./../../Images/VisualStudio.svg";
import VSCode from "./../../Images/VSCode.svg";

import "./MainContent.css";

function TechStack(props: any) {
  var techStackSvgs = [
    { name: Angular, category: "Frameworks" },
    { name: Apple, category: "Tools" },
    { name: Bamboo, category: "Tools" },
    { name: BitBucket, category: "Tools" },
    { name: Bootstrap, category: "Frameworks" },
    { name: Bulma, category: "Frameworks" },
    { name: C, category: "Languages" },
    { name: CSharp, category: "Languages" },
    { name: CSS3, category: "Languages" },
    { name: Express, category: "Frameworks" },
    { name: Git, category: "Languages" },
    { name: GitHub, category: "Tools" },
    { name: GoogleCloud, category: "Tools" },
    { name: HTML5, category: "Languages" },
    { name: IntelliJIDEA, category: "Tools" },
    { name: Jasmine, category: "Frameworks" },
    { name: JavaScript, category: "Languages" },
    { name: Jira, category: "Tools" },
    { name: jQuery, category: "Frameworks" },
    { name: LaTeX, category: "Languages" },
    { name: Linux, category: "Tools" },
    { name: MongoDB, category: "Languages" },
    { name: NETCore, category: "Frameworks" },
    { name: Node, category: "Frameworks" },
    { name: Nodemon, category: "Tools" },
    { name: NPM, category: "Frameworks" },
    { name: NuGet, category: "Frameworks" },
    { name: ObjectiveC, category: "Languages" },
    { name: Oracle, category: "Languages" },
    { name: Postman, category: "Tools" },
    { name: Python, category: "Languages" },
    { name: RabbitMQ, category: "Tools" },
    { name: Reacter, category: "Frameworks" },
    { name: Redux, category: "Frameworks" },
    { name: Sass, category: "Languages" },
    { name: Splunk, category: "Tools" },
    { name: SQLDeveloper, category: "Tools" },
    { name: Swagger, category: "Tools" },
    { name: TypeScript, category: "Languages" },
    { name: Ubuntu, category: "Tools" },
    { name: VisualStudio, category: "Tools" },
    { name: VSCode, category: "Tools" },
  ];

  var rightHalfTechStacks = props.techStacks;
  var _useState = useState("Languages"),
    optionSelected = _useState[0],
    setOptionSelectedState = _useState[1];
  var _useState2 = useState(true),
    isActiveLanguages = _useState2[0],
    setIsActiveLanguages = _useState2[1];
  var _useState3 = useState(false),
    isActiveFrameworks = _useState3[0],
    setIsActiveFrameworks = _useState3[1];
  var _useState4 = useState(false),
    isActiveTools = _useState4[0],
    setIsActiveTools = _useState4[1];

  function handleOptionSelected(event) {
    var option = event.target.innerHTML;
    setOptionSelectedState(option);

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
    <div id="tech" className="tech-stack">
      <ul>
        <li onClick={handleOptionSelected}>Languages</li>
        <li onClick={handleOptionSelected}>Frameworks</li>
        <li onClick={handleOptionSelected}>Tools</li>
      </ul>
      <div className="tech-icons-container">
        {techStackSvgs.map(function (techStackSvg) {
          if (
            (isActiveLanguages && techStackSvg.category === "Languages") ||
            (isActiveFrameworks && techStackSvg.category === "Frameworks") ||
            (isActiveTools && techStackSvg.category === "Tools")
          ) {
            return (
              <img
                key={techStackSvg.name}
                src={techStackSvg.name}
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

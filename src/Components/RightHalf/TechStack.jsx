import React, { Component } from 'react'

import Apple from './../../Images/Apple.svg';
import Bamboo from './../../Images/Bamboo.svg';
import BitBucket from './../../Images/BitBucket.svg';
import Bootstrap from './../../Images/Bootstrap.svg';
import Bulma from './../../Images/Bulma.svg';
import C from './../../Images/C.svg';
import CSharp from './../../Images/CSharp.svg';
import CSS3 from './../../Images/CSS3.svg';
import Express from './../../Images/Express.svg';
import GitHub from './../../Images/GitHub.svg';
import GoogleCloud from './../../Images/GoogleCloud.svg';
import HTML5 from './../../Images/HTML5.svg';
import IntelliJIDEA from './../../Images/IntelliJIDEA.svg';
import Jasmine from './../../Images/Jasmine.svg';
import JavaScript from './../../Images/JavaScript.svg';
import Jira from './../../Images/Jira.svg';
import jQuery from './../../Images/jQuery.svg';
import LaTeX from './../../Images/LaTeX.svg';
import Linux from './../../Images/Linux.svg';
import MongoDB from './../../Images/MongoDB.svg';
import NETCore from './../../Images/NETCore.svg';
import Node from './../../Images/Nodejs.svg';
import Nodemon from './../../Images/Nodemon.svg';
import NPM from './../../Images/NPM.svg';
import NuGet from './../../Images/NuGet.svg';
import ObjectiveC from './../../Images/ObjectiveC.svg';
import Oracle from './../../Images/Oracle.svg';
import Postman from './../../Images/Postman.svg';
import Python from './../../Images/Python.svg';
import RabbitMQ from './../../Images/RabbitMQ.svg';
import Reacter from './../../Images/Reacter.svg';
import Redux from './../../Images/Redux.svg';
import Sass from './../../Images/Sass.svg';
import Splunk from './../../Images/Splunk.svg';
import SQLDeveloper from './../../Images/SQLDeveloper.svg';
import Swagger from './../../Images/Swagger.svg';
import TypeScript from './../../Images/TypeScript.svg';
import Ubuntu from './../../Images/Ubuntu.svg';
import VisualStudio from './../../Images/VisualStudio.svg';
import VSCode from './../../Images/VSCode.svg';


import './RightHalf.css';

export class TechStack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            techStacks: props.techStacks,
            techStackSvgs: [
              { "name": Apple, "category": "Tools" },
              { "name": Bamboo, "category": "Tools" },
              { "name": BitBucket, "category": "Tools" },
              { "name": Bootstrap, "category": "Frameworks" },
              { "name": Bulma, "category": "Frameworks" },
              { "name": C, "category": "Languages" },
              { "name": CSharp, "category": "Languages" },
              { "name": CSS3, "category": "Languages" },
              { "name": Express, "category": "Frameworks" },
              { "name": GitHub, "category": "Tools" },
              { "name": GoogleCloud, "category":"Frameworks" },
              { "name": HTML5, "category": "Languages" },
              { "name": IntelliJIDEA, "category": "Tools" },
              { "name": Jasmine, "category": "Frameworks" },
              { "name": JavaScript, "category": "Languages" },
              { "name": Jira, "category": "Tools" },
              { "name": jQuery, "category": "Frameworks" },
              { "name": LaTeX, "category": "Languages" },
              { "name": Linux, "category": "Tools" },
              { "name": MongoDB, "category": "Languages" },
              { "name": NETCore, "category": "Frameworks" },
              { "name": Node, "category": "Frameworks" },
              { "name": Nodemon, "category": "Tools" },
              { "name": NPM, "category": "Frameworks" },
              { "name": NuGet, "category": "Frameworks" },
              { "name": ObjectiveC, "category":"Languages" },
              { "name": Oracle, "category": "Languages" },
              { "name": Postman, "category": "Tools" },
              { "name": Python, "category": "Languages" },
              { "name": RabbitMQ, "category": "Tools" },
              { "name": Reacter, "category": "Frameworks" },
              { "name": Redux, "category": "Frameworks" },
              { "name": Sass, "category": "Languages" },
              { "name": Splunk, "category": "Tools" },
              { "name": SQLDeveloper, "category": "Tools" },
              { "name": Swagger, "category": "Tools" },
              { "name": TypeScript, "category": "Languages" },
              { "name": Ubuntu, "category": "Tools" },
              { "name": VisualStudio, "category": "Tools" },
              { "name": VSCode, "category": "Tools" }
            ],
            optionSelected: "Languages"
        }
    }

    setOptionSelected = (event) => {
      this.setState({
        optionSelected: event.target.innerHTML
      });
    }

    render() {
      return (
        <div id="tech" className='tech-stack row ps-3'>
          <div className='tech-tab row mt-5 mb-5'>
            <div className='h6 text-uppercase p-2 option col-sm-4' onClick={this.setOptionSelected}>Languages</div>
            <div className='h6 text-uppercase p-2 option col-sm-4' onClick={this.setOptionSelected}>Frameworks</div>
            <div className='h6 text-uppercase p-2 option col-sm-4' onClick={this.setOptionSelected}>Tools</div>
          </div>
          {
            this.state.techStackSvgs.filter((svg) => svg.category === this.state.optionSelected).map((svg) =>
              <div key={svg.name} className='tech-icon col-sm-2 mt-2 mb-2 p-4'>
                <img width='40px' alt='no svg' src={svg.name} />
              </div>
            )
          }
        </div>
      )
    }
}

export default TechStack
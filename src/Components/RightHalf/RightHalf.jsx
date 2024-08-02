import React from 'react'
import Biography from './Biography'
import Experience from './Experience';
import TechStack from './TechStack';
import Project from './Project';

function RightHalf({ rightHalf }) {

  return (
    <div className='col-lg-6'>
      <Biography bio={rightHalf.bio}/>
      <br />
      <hr />
      <br />
      {
        rightHalf.experiences.map((experience) => {
          return <Experience key={experience.key} experience={experience}/>
        })
      }
      <br />
      <hr />
      <br />
      <TechStack techStacks={rightHalf.techStacks}/>
      <br />
      <hr />
      <br />
      {
        rightHalf.projects.map((project) => {
          return <Project key={project.key} project={project} />
        })
      }
    </div>
  )
}

export default RightHalf
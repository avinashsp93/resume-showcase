import React from 'react'
import Biography from './A_Biography'
import Experience from './B_Experience';
import TechStack from './D_TechStack';
import Project from './E_Project';
import FootNotes from './F_FootNotes';

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
      <br />
      <hr />
      <br />
      <FootNotes footnotes={rightHalf.footnotes}/>
    </div>
  )
}

export default RightHalf
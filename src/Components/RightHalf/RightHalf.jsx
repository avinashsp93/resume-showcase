import React from 'react'
import Contact from './A_Contact';
import Biography from './B_Biography';
import Experience from './C_Experience';
import TechStack from './F_TechStack';
import Project from './E_Project';
import FootNotes from './G_FootNotes';

function RightHalf({ rightHalf }) {

  return (
    <div className='right-half col-lg-6'>
      <hr />
      <br />
      <Contact bio={rightHalf.bio}/>
      <br />
      <hr />
      <br />
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
      <br />
      <hr />
      <br />
    </div>
  )
}

export default RightHalf
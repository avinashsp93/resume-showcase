import React from 'react'
import Intro from './A_Intro'
import Navigator from './B_Navigator'
import Footer from './C_Footer'

function LeftHalf({ leftHalf }) {
  return (
    <div className='sticky-pos col-lg-6'>
        <Intro />
        <br />
        <hr />
        <br />
        <Navigator />
        <br />
        <br />
        <Footer />
    </div>
    
  )
}

export default LeftHalf
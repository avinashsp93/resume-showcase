import React from 'react'
import Intro from './Intro'
import Navigator from './Navigator'
import Footer from './Footer'

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
import React from 'react'
import LeftHalf from './LeftHalf/LeftHalf'
import RightHalf from './RightHalf/RightHalf'

function Container({ data }) {
  return (
    <div className='container'>
      <div className='row'>
        <LeftHalf leftHalf={data.leftHalf}/>
        <RightHalf rightHalf={data.rightHalf}/>
      </div>
    </div>
  )
}

export default Container
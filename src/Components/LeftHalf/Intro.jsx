import React, { Component } from 'react'
import './LeftHalf.css';

export class Intro extends Component {
  render() {
    return (
      <div className='my-brief'>
        <h1 className='display-3'>Avinash Sorab</h1>
        <h3 className='fs-3'>Software Developer | Ping Pong Player</h3>
      </div>
    )
  }
}

export default Intro
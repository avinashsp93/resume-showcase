import React, { Component } from 'react'

export class Link extends Component {
    constructor(props) {
      super(props)
      this.state = {
        link: props.link
      };
  }
  render() {
    return (
      <div className='tech-links m-1 p-1'>
        <a href='/' className='h6 m-2' target='_blank' rel='noreferrer'>{this.state.link}</a>
      </div>
    )
  }
}

export default Link
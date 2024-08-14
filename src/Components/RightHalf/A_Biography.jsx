import React, { Component } from 'react'

export class Biography extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: props.bio
    }
  }
  render() {
    return (
        <p id="bio" className='m-2'>
            {this.state.bio}
        </p>
    )
  }
}

export default Biography
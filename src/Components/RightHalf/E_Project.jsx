import React, { Component } from 'react'

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project
    };
  }
  render() {
    return (
      <div id="proj" className='project row m-2 p-2'>
        <div className='mt-2 col-sm-4 text-center'>
            <h6>{this.state.project.name}</h6>
        </div>
        <div className='col-sm-8'>
            <h5>{this.state.project.name} - {this.state.project.client}</h5>
            <p>{this.state.project.description}</p>
            <br />
        </div>
      </div>
    )
  }
}

export default Project
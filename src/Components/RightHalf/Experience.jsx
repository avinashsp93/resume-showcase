import React, { Component } from 'react'
import Link from './Link';

export class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
          experience : props.experience
        }
    }

  render() {
    return (
      <div id="exp" className='experience row m-2 p-2'>
        <div className='mt-2 col-sm-4 text-center'>
            <h6>{this.state.experience.timeline}</h6>
        </div>
        <div className='col-sm-8'>
            <h5>{this.state.experience.designation} &#x2022; {this.state.experience.company}</h5>
            <p>{this.state.experience.summary}</p>
            {
              this.state.experience.links.map(link => {
                return <Link key={link} link={link}/>;
              })
            }
        </div>
      </div>
    )
  }
}

export default Experience
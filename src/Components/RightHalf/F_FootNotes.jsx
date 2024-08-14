import React, { Component } from 'react'

export class FootNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footnotes: props.footnotes
        }
        
    }
  render() {
    return (
      <footer id="footnotes" className='m-2'>
        {this.state.footnotes}
      </footer>
    )
  }
}

export default FootNotes
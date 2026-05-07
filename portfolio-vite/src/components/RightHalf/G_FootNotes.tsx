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
      <footer id="footnotes" className='footnotes m-2 me-1'>
        {this.state.footnotes}
      </footer>
    )
  }
}

export default FootNotes
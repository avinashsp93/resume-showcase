import React, { Component } from 'react'

export class Navigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 0,
      ref1: React.createRef(),
      ref2: React.createRef(),
      ref3: React.createRef(),
      ref4: React.createRef(),
      isActiveAbout: false,
      isActiveExperience: false,
      isActiveTechStack: false,
      isActiveProjects: false
    };
  }

  componentDidMount() {
    this.state.ref1 = document.getElementById('bio');
    this.state.ref2 = document.getElementById('exp');
    this.state.ref3 = document.getElementById('tech');
    this.state.ref4 = document.getElementById('proj');
  }

  scrollToSection = (event) => {
    switch(event.target.innerHTML) {
      case 'About': this.state.ref1.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveAbout: true,
          isActiveExperience: false,
          isActiveTechStack: false,
          isActiveProjects: false
        })
        break;
      case 'Experience': this.state.ref2.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveAbout: false,
          isActiveExperience: true,
          isActiveTechStack: false,
          isActiveProjects: false
        })
        break;
      case 'Tech Stack': this.state.ref3.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveAbout: false,
          isActiveExperience: false,
          isActiveTechStack: true,
          isActiveProjects: false
        })
        break;
      case 'Projects': this.state.ref4.scrollIntoView({behavior: "smooth" }); 
        this.setState({
          isActiveAbout: false,
          isActiveExperience: false,
          isActiveTechStack: false,
          isActiveProjects: true
        })
        break;
    }
  }

  render() {
    return (
      <div className='navigator'>
        <ul>
            <li className={this.state.isActiveAbout ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a className='h6 text-uppercase text-decoration-none' target='_blank' onClick={this.scrollToSection}>About</a>
            </li>
            <li className={this.state.isActiveExperience ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a className='h6 text-uppercase text-decoration-none' target='_blank' onClick={this.scrollToSection}>Experience</a>
            </li>
            <li className={this.state.isActiveTechStack ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a className='h6 text-uppercase text-decoration-none' target='_blank' onClick={this.scrollToSection}>Tech Stack</a>
            </li>
            <li className={this.state.isActiveProjects ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a className='h6 text-uppercase text-decoration-none' target='_blank' onClick={this.scrollToSection}>Projects</a>
            </li>
        </ul>        
      </div>
    )
  }
}

export default Navigator
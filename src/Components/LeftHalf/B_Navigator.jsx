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
      ref5: React.createRef(),
      isActiveContact: false,
      isActiveAbout: false,
      isActiveExperience: false,
      isActiveTechStack: false,
      isActiveProjects: false
    };
  }

  componentDidMount() {
    this.setState({
      ref1 : document.getElementById('con'),
      ref2 : document.getElementById('bio'),
      ref3 : document.getElementById('exp'),
      ref4 : document.getElementById('tech'),
      ref5 : document.getElementById('proj')
    });
  }

  scrollToSection = (event) => {
    switch(event.target.innerHTML) {
      case 'Contact': this.state.ref1.scrollIntoView({behavior: "smooth" }); 
        this.setState({
          isActiveContact: true,
          isActiveAbout: false,
          isActiveExperience: false,
          isActiveTechStack: false,
          isActiveProjects: true
        })
        break;
      case 'About': this.state.ref2.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveContact: false,
          isActiveAbout: true,
          isActiveExperience: false,
          isActiveTechStack: false,
          isActiveProjects: false
        })
        break;
      case 'Experience': this.state.ref3.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveContact: false,
          isActiveAbout: false,
          isActiveExperience: true,
          isActiveTechStack: false,
          isActiveProjects: false
        })
        break;
      case 'Tech Stack': this.state.ref4.scrollIntoView({behavior: "smooth" });
        this.setState({
          isActiveContact: false,
          isActiveAbout: false,
          isActiveExperience: false,
          isActiveTechStack: true,
          isActiveProjects: false
        })
        break;
      case 'Projects': this.state.ref5.scrollIntoView({behavior: "smooth" }); 
        this.setState({
          isActiveContact: false,
          isActiveAbout: false,
          isActiveExperience: false,
          isActiveTechStack: false,
          isActiveProjects: true
        })
        break;
      default : break;
    }
  }

  render() {
    return (
      <div className='navigator'>
        <ul>
            <li className={this.state.isActiveAbout ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a href='/' className='h6 text-uppercase text-decoration-none' target='_blank' rel="noreferrer" onClick={this.scrollToSection}>Contact</a>
            </li>
            <li className={this.state.isActiveAbout ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a href='/' className='h6 text-uppercase text-decoration-none' target='_blank' rel="noreferrer" onClick={this.scrollToSection}>About</a>
            </li>
            <li className={this.state.isActiveExperience ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a href='/' className='h6 text-uppercase text-decoration-none' target='_blank' rel="noreferrer" onClick={this.scrollToSection}>Experience</a>
            </li>
            <li className={this.state.isActiveTechStack ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a href='/' className='h6 text-uppercase text-decoration-none' target='_blank' rel="noreferrer" onClick={this.scrollToSection}>Tech Stack</a>
            </li>
            <li className={this.state.isActiveProjects ? 'mt-4 selected-navigator' : 'mt-4'}>
                <a href='/' className='h6 text-uppercase text-decoration-none' target='_blank' rel="noreferrer" onClick={this.scrollToSection}>Projects</a>
            </li>
        </ul>        
      </div>
    )
  }
}

export default Navigator
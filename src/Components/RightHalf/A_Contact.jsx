import React, { Component } from "react"

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "location": "Cary, NC",
            "phone": "+1(618)353-4297",
            "email": "avinashsp93@gmail.com",
            "Resume": "External Link"
        }
    }

    loadText = (event) => {
        let buttonText = event.target.innerHTML;
        if(['location', 'phone', 'email'].includes(buttonText)) {
            switch(event.target.parentNode.id) {
                case "location": setTimeout(() => event.target.innerHTML = `${this.state.location}`, 250); break;
                case "phone": setTimeout(() => event.target.innerHTML = `${this.state.phone}`, 250); break;
                case "email": setTimeout(() => event.target.innerHTML = `${this.state.email}`, 250); break;
                default: break;
            }
        }
    }

    unloadText = (event) => {
        switch(event.target.parentNode.id) {
            case "location": setTimeout(() => event.target.innerHTML = 'location', 250); break;
            case "phone": setTimeout(() => event.target.innerHTML = 'phone', 250); break;
            case "email": setTimeout(() => event.target.innerHTML = 'email', 250); break;
            default: break;
        }
    }

    render() {
        return (
        <div id="con" className="contact row">
            <button id="location" className="animative col-sm-3 fs-6 text-uppercase">
                <div onMouseOver={this.loadText} onMouseLeave={this.unloadText}>location</div>
            </button>
            <button id="phone" className="animative col-sm-3 fs-6 text-uppercase">
                <div onMouseOver={this.loadText} onMouseLeave={this.unloadText}>phone</div>
            </button>
            <button id="email" className="animative col-sm-3 fs-6 text-uppercase">
                <div onMouseOver={this.loadText} onMouseLeave={this.unloadText}>email</div>
            </button>
            <button className="external-link col-sm-3 fs-6 text-uppercase">
                <div onMouseOver={this.loadText} onMouseLeave={this.unloadText}>
                    <a href="https://drive.google.com/file/d/1CZcCyUwt-fxxa68AHzum6Y7ttd7a2Tjn/view" target="_blank">Resume </a>
                    <i className="fa-duotone fa-solid fa-square-up-right"></i>
                </div>
            </button>
        </div>
        )
    }
}

export default Contact
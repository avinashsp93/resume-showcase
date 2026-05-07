import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Cary, NC",
      phone: "+1(618)353-4297",
      email: "avinashsp93@gmail.com",
      resume: "External Link",
    };
  }

  render() {
    return (
      <div id="contact" className="contact row">
        <ul className="contact-list">
          <li id="location" className="text-uppercase">
            {this.state.location}
          </li>
          <li id="phone" className="text-uppercase">
            {this.state.phone}
          </li>
          <li id="email" className="text-uppercase">
            {this.state.email}
          </li>
          <li id="resume" className="text-uppercase">
            {this.state.resume}
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;

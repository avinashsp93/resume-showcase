import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='footer text-center fs-4'>
        <div className="d-table-cell"><a href="https://www.facebook.com/avinashsp93" target="_blank"><i className="fa-brands fa-facebook" /></a></div>
        <div className="d-table-cell"><a href="https://www.instagram.com/avinashsp93" target="_blank"><i className="fa-brands fa-instagram" /></a></div>
        <div className="d-table-cell"><a href="https://www.linkedin.com/in/avinash-sorab-876a56a5/" target="_blank"><i className="fa-brands fa-linkedin" /></a></div>
        <div className="d-table-cell"><a href="https://github.com/avinashsp93" target="_blank"><i className="fa-brands fa-github" /></a></div>
        <div className="d-table-cell"><a href="https://www.hackerrank.com/profile/avinashsp93" target="_blank"><i className="fa-brands fa-hackerrank" /></a></div>
        <div className="d-table-cell"><a href="https://codepen.io/avinashsp93/" target="_blank"><i className="fa-brands fa-codepen" /></a></div>
        <div className="d-table-cell"><a href="https://leetcode.com/u/avinashsp93/" target="_blank"><i className="fa-solid fa-code" /></a></div>
        <div className="d-table-cell"><a href="https://stackoverflow.com/users/5646079/avinash-sorab" target="_blank"><i className="fa-brands fa-stack-overflow" /></a></div>
      </div>
    )
  }
}

export default Footer
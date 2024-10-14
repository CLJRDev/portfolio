import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {

  const subNavClick = (section) => {
    console.log(section);
  }

  return (
    <div className='header'>
      <img className='logo' src={logo} />
      <div onClick={() => subNavClick("1")} className="sub-nav">Home</div>
      <div onClick={() => subNavClick("2")} className="sub-nav">Education & Skills</div>
      <div onClick={() => subNavClick("3")} className="sub-nav">Experience</div>
      <div onClick={() => subNavClick("4")} className="sub-nav">Projects</div>
      <div onClick={() => subNavClick("5")} className="sub-nav">Contact</div>
    </div>
  )
}

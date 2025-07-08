import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'> 
    {/* profile img */}
    {/* <img src='/logo512.png' alt="Logo" className='hero-logo' /> */}
    <h1><span>Hi I am Wojciech Jurasz!</span></h1>
    <p>I'am back-end developer, and computer science student in Rzeszów, Poland.</p>
    <div className='hero-action'>
        <div className='hero-connect'>Connect with Me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero
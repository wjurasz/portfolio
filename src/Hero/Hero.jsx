import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'> 
    {/* profile img */}
    {/* <img src='/logo512.png' alt="Logo" className='hero-logo' /> */}
    <h1><span>Hi I am Wojciech Jurasz!</span></h1>
    <p>Software developer, and Computer Science student in Rzeszów, Poland.</p>
    <p>I work in <span>.NET</span>, <span>React</span>, <span>Python</span>.</p>
    <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='hero-resume'>
  My resume
</a>

    </div>
    </div>
  )
}

export default Hero
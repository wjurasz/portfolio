import React from 'react'
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            {/* moge image dać */}
        </div>
        <div className='about-sections'>
            <div className="about-left">
                {/* Image */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>text text test</p>
                    <p>text text text</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>.NET</p><hr style={{width:'70%'}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'50%'}}></hr></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'50%'}}></hr></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:'60%'}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years of expirence</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>coś</p>
            </div>
            


        </div>
    </div>
  )
}

export default About
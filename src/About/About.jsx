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
                    <p>I am a passionate and driven third-year Computer Science student at UITM in Rzeszów, Poland. Over the years, I have developed a strong foundation in software development, particularly in technologies like .NET, React, and Python.</p>
                    <p>Constantly seeking new challenges and opportunities to learn, I engage in academic courses, personal projects, and collaborations with other developers. My goal is to leverage my technical knowledge to contribute to meaningful projects that make a real-world impact.</p>
                    <p>In addition to my technical abilities, I possess excellent communication skills, enabling me to collaborate effectively in team environments. I am always eager to learn new programming languages, tools, and frameworks to stay up-to-date with the latest trends in the software development industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>.NET</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'58%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:'54%'}}/></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width:'52%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1</h1>
                <p>cos</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1</h1>
                <p>cos</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>x1</h1>
                <p>coś</p>
            </div>
        </div>
    </div>
  )
}

export default About
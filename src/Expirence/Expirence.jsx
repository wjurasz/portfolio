import React from 'react'
import './Expirence.css';

const Expirence = () => {
  return (
    <div>
        <div className="exp">
            <div className='exp-title'>Expirence</div>
            <div className="work">
                 <img src='/Icons/mobitouch.png'></img>
                <h1>Mobitouch</h1>
                <p>Intern back-end developer working in .NET</p>
                <p>07.2025 - Present</p>
                <hr />
                <img></img>
                <h1>Techtop Łukasz Mazur</h1>
                <p>Computer service technician</p>
                <p>06.2024 - 09.2024</p>
                <hr />
                <img></img>
                <h1>ARIVI sp.z o.o.</h1>
                <p>Intern software developer working in Java</p>
                <p>07.2023 - Present</p>
                <hr />
            </div>
            <div className='edu'>
                <div className='edu-title'>Education</div>
                <img src="/Icons/wsiiz.jpeg" alt="Edu" />
                <h1>UITM Rzeszow, Poland</h1>
                <p>Computer Science, Engineer Degree</p>
                <p>10.2022 - Present</p>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default Expirence
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img></img> */}
                <p></p>
            </div>
            <div className="footer-top-right">
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bootom-left">© 2025 Wojciech Jurasz</p>
            <div className="footer-bottom-right">
                <p><a href='https://github.com/wjurasz' target='_blank' rel='noopener noreferrer' className='footer-link'>GitHub</a></p>
                <p><a href='https://www.linkedin.com/in/wojciech-jurasz/' target='_blank' rel='noopener noreferrer' className='footer-link'>LinkedIn</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer
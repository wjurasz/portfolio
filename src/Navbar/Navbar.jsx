import React from 'react';
import './Navbar.css';

const navbar = () => {
  return (
    <div className='navbar'>  
    {/* potrzeba logo */}
      {/* <img src='/logo192.png' alt="Logo" className='logo' /> */}
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect with Me</div>
    </div>
  );
};

export default navbar;

import React from 'react';
import './DynamicTile.css';

const DynamicTile = () => {
  return (
    <div className="dynamic-tile">
       <div>
        <p><a href='https://github.com/wjurasz' target='_blank' rel='noopener noreferrer' className='tile-button'>GitHub</a></p>
      </div>
      <div>
        <p><a href='https://www.linkedin.com/in/wojciech-jurasz/' target='_blank' rel='noopener noreferrer' className='tile-button'>LinkedIn</a></p>
      </div>
    </div>
  );
}

export default DynamicTile;
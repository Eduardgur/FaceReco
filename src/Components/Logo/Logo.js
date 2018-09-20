import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brainImg from './brain.png'

const Logo = () => {
  return (
    <div className='ma3'>
      <Tilt className="Tilt br4 ba shadow-5" options={{ max : 55, scale:'1.1' }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa1">
          <img className='logo' src={brainImg} alt='Logo'/>
        </div>
      </Tilt>
    </div>
  );
}
export default Logo;

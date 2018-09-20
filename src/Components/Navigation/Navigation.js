import React from 'react';
import Logo from '../Logo/Logo'

const Navigation = () => {
  return (
    <nav className='flex justify-between '>
      <div>
        <Logo/>
      </div>
      <div className='self-start '>
        <p className='f4 link dim black underline pa3 pointer self-end'>Sign Out</p>
      </div>
    </nav>
  );
}

export default Navigation;

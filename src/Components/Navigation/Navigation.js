import React from 'react';
import Logo from '../Logo/Logo'

const Navigation = (props) => {


  const renderRoute = (route) => {
    console.log('navi: ', route );
    switch (route) {
      case 'signin':
      return (
        <div className='self-end '>
          <p className='f4 link dim black underline mr3 pointer self-end'
            onClick={() => props.onRouteChange('signup') }>
            Sing Up
          </p>
        </div>
      )
      break;

      case 'signup':
      return (
        <div className='self-end '>
          <p className='f4 link dim black underline mr3 pointer self-end'
            onClick={() => props.onRouteChange('signin') }>
            Sign In
          </p>
        </div>
      )
      break;

      case 'home':
      return (
        <div className='self-end '>
          <p className='f4 link dim black underline mr3 pointer self-end'
            onClick={() => props.onSignout() }>
            Sign Out
          </p>
        </div>
      )
      break;
      // default:

    }



  }

  return (
    <nav className='flex justify-between mb3 '>
      <div>
        <Logo/>
      </div>
      <div
        className='gradient-background flex justify-end h3 shadow-5 br4 mt3 mr2 w-100 '
        >
          { renderRoute(props.route) }
        </div>
      </nav>
    );
  }

  export default Navigation;

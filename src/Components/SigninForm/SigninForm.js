import React from 'react';
import './SigninForm.css'
const LoginForm = (props) => {
  return (
    <div >
      <div className='center '>
        <form
          className='gradient-background login-cont flex flex-column items-center justify-center absolute br3 shadow-1 pa3'>
          <legend
            className='f2 self-center underline '>
            Sign In
          </legend>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2 '
              >
               Email:
             </label>
            <input
              className='self-start f5 input w5 h-auto shadow-2'
              id='emailadress'
              name='emailadress'
              type='email' ></input>
          </div>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2'>
              Password:
            </label>
            <input
              className='self-start f56 input w5 h-auto'
              id='password'
              name='password'
              type='password' ></input>
            </div>
            <input
              className='button-p ma3 grow f5 ph3 pv2 br3 shadow-5'
              id='signin'
              type='submit'
              value='Sign In'
              onClick={() => props.onRouteChange('home')}/>
            </form>
          </div>
        </div>
      );
    }

    export default LoginForm;

import React from 'react';

const SignupForm = (props) => {
  return (
    <div >
      <div className='center '>
        <form
          className='gradient-background login-cont flex flex-column items-center justify-center absolute br3 shadow-1 pa3'>
          <legend
            className='f2 self-center underline '>
            Sign Up
          </legend>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2 '
              >
               Email:
             </label>
            <input
              className='self-start f5 input w5 h-auto shadow-2'
              type='email' ></input>
          </div>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2'>
              Password:
            </label>
            <input
              className='self-start f56 input w5 h-auto'
              type='password' ></input>
            </div>
            <div className='flex flex-column ma3'>
              <label
                className='self-start mb2'>
                Full Name:
              </label>
              <input
                className='self-start f56 input w5 h-auto'
                type='text' ></input>
              </div>
            <input
              className='button-p ma3 grow f5 ph3 pv2 br3 shadow-5'
              type='submit'
              value='Register'
              onClick={() => props.onRouteChange('signin')}/>
            </form>
          </div>
        </div>
      );

}

export default SignupForm;

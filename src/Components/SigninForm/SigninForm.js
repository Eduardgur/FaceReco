import React from 'react';
import './SigninForm.css';

class LoginForm extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    signinEmail : '',
    signinPassword: '',
  }

  this.onSubmitSignin = this.onSubmitSignin.bind(this);
  this.onEmailChange = this.onEmailChange.bind(this);
  this.onPaswwordChange = this.onPaswwordChange.bind(this);
}

onSubmitSignin = () => {
  fetch('https://myfacereco-api.herokuapp.com/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: this.state.signinEmail,
      password: this.state.signinPassword
    })
  }).then((res) => {
    if (res.status === 200) {
      res.json().then(res => {
        console.log(res.user);
        
          this.props.loadUser(res.user);
          this.props.onRouteChange('home');
          alert(res.response);
      });
    } else {
      res.json().then(res => {
        alert(res.err);
      });
    }
  });
}

onEmailChange = (event) => {
  this.setState({signinEmail: event.target.value});
}

onPaswwordChange = (event) => {
  this.setState({signinPassword: event.target.value});
}

render() {
  return (
    <div>
      <div className='center '>
        <div
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
              type='email' 
              onChange={this.onEmailChange}
              required></input>
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
              type='password' 
              onChange={this.onPaswwordChange}
              required></input>
            </div>
            <input
              className='button-p ma3 grow f5 ph3 pv2 br3 shadow-5'
              id='signin'
              type='submit'
              value='Sign In'
              onClick={this.onSubmitSignin}
              />
          </div>
        </div>
      </div> 
    )
  }
}
export default LoginForm;

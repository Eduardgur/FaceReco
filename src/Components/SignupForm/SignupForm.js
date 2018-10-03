import React from 'react';

class SignupForm extends React.Component {

constructor(props){
  super(props);
  this.state = {
    signupEmail: '',
    signupPassword: '',
    signupName: '',
  }

  this.onSubmitSignup = this.onSubmitSignup.bind(this);
  this.onEmailChange = this.onEmailChange.bind(this);
  this.onPasswordChange = this.onPasswordChange.bind(this);
  this.onNameChange = this.onNameChange.bind(this);
}

onSubmitSignup = () => {
  fetch('https://myfacereco-api.herokuapp.com/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      name: this.state.signupName,
    })
  }).then((res) => {
    if (res.status === 200) {
      res.json().then(res => {
        alert(res.response);
      });
      this.props.onRouteChange('signin');
    } else{
      res.json().then(err => {
        alert(err.err);
      });
      
    }
  })
  .catch(err => console.log(err));
}

onEmailChange = (event) => {
  this.setState({signupEmail: event.target.value});
}

onPasswordChange = (event) => {
  this.setState({signupPassword: event.target.value});
}

onNameChange = (event) => {
  this.setState({signupName: event.target.value});
}


render() {
  return (
    <div>
      <div className='center'>
        <div
          className='gradient-background login-cont flex flex-column items-center justify-center absolute br3 shadow-1 pa3'>
          <legend
            className='f2 self-center underline'>
            Sign Up
          </legend>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2'>
              Email:
            </label>
            <input
              className='self-start f5 input w5 h-auto shadow-2'
              type='email'
              onChange={this.onEmailChange}></input>
          </div>
          <div className='flex flex-column ma3'>
            <label
              className='self-start mb2'>
              Password:
            </label>
            <input
              className='self-start f56 input w5 h-auto'
              type='password' 
              onChange={this.onPasswordChange}></input>
            </div>
            <div className='flex flex-column ma3'>
              <label
                className='self-start mb2'>
                Full Name:
              </label>
              <input
                className='self-start f56 input w5 h-auto'
                type='text'
                onChange={this.onNameChange}></input>
              </div>
            <input
              className='button-p ma3 grow f5 ph3 pv2 br3 shadow-5'
              type='submit'
              value='Signup'
              onClick={this.onSubmitSignup}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;

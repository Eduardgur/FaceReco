import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import SigninForm from '../../components/SigninForm/SigninForm.js'
import SignupForm from '../../components/SignupForm/SignupForm.js'
import ImageEngine from '../ImageEngine/ImageEngine.js'
import './App.css';



class App extends Component {

constructor() {
  super();
  this.state = {
    input: '',
    image: '',
    boxs: [],
    route: 'signin',
    isSignedin: false,
    user: {
      id: '',
      name: '',
      email: '',
      enteries: 0,
      joined: '',
    }
  }

  this.onInputChange = this.onInputChange.bind(this);
  this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

loadUser = (user) => {
  console.log(user);
  console.log(user.id, user.name, user.email, user.enteries, user.joined);
  this.setState({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      enteries: user.enteries,
      joined: user.joined,
    }
  })
}

getFaces = () => {
  fetch('http://localhost:3001/getFaces', {
    method: 'put',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      id: this.state.user.id,
      imageUrl: this.state.input,
    })
  })
  .then((res) => res.json())
  .then(json => {
      if(json.faces){
        this.setState(
          Object.assign(this.state.user, {
            enteries: json.enteries,
            boxs: this.calculateFaceLocation(json.faces),
          })
        );
      }
  }).catch(err => {
    console.log(err);
  })
}

calculateFaceLocation = (response) => {
  const image = document.getElementById('inputimage');
  const faces = response.outputs[0].data.regions.map(output => {
  const face = output.region_info.bounding_box;
  const width = Number(image.width);
  const height = Number(image.height);
  return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height),
      key: output.id,
  }
  });
  return faces;
}

onSignout = () => {
  this.setState({
    boxs: [],
    image: '',
    user: {
      id: '',
      name: '',
      email: '',
      enteries: 0,
      joined: '',
    }
  });
  this.onRouteChange('signin');
}

onInputChange = (event) =>{
  this.setState({
    input: event.target.value,
  });
}

onButtonSubmit = () => {
  this.setState({ image: this.state.input });
  this.getFaces();
}


onRouteChange = (route) => {
  this.setState({route: route});
}

renderRoute = (route) => {
    switch (route) {
      case 'home':
      return (
        <ImageEngine
          onInputChange={ this.onInputChange }
          onButtonSubmit={ this.onButtonSubmit }
          image={ this.state.image }
          boxs={ this.state.boxs }
          user={ this.state.user }
        />
      )
      break;

      case 'signin':
      return (
        <SigninForm onRouteChange={ this.onRouteChange } loadUser={ this.loadUser }/>
      )
      break;

      case 'signup':
      return (
      <SignupForm onRouteChange={ this.onRouteChange }/>
      )
      break;

      default:
      return (
        <SigninForm onRouteChange={ this.onRouteChange } loadUser={ this.loadUser }/>
      )
    }
  }

  render() {
    return (
      <div className="App ">

        <Navigation
          onRouteChange={ this.onRouteChange }
          isSignedin={ this.state.isSignedin }
          route={ this.state.route }
          onSignout={  this.onSignout }
        />
        <div>
          { this.renderRoute(this.state.route) }
        </div>
      </div>
    );
  }
}

export default App;

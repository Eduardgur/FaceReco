import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import SigninForm from '../../components/SigninForm/SigninForm.js'
import SignupForm from '../../components/SignupForm/SignupForm.js'
import ImageEngine from '../ImageEngine/ImageEngine.js'
import Clarifai from 'clarifai';
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      clarifi: null,
      image: "",
      boxs: [],
      route: 'signin',
      isSignedin: false,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onInputChange = (event) =>{
    console.log('onInputChange: ',event.target.value);
    this.setState({
      input: event.target.value,
    });
  }

  onButtonSubmit = () => {
    console.log('onButtonSubmit: ', this.state.input);
    this.setState({ image: this.state.input});
    this.state.clrifi.models.predict(
      'a403429f2ddf4b49b307e318f00e528b',
      this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.error(err));
      }

      calculateFaceLocation = (response) => {
        const image = document.getElementById('inputimage');
        console.log('response: ', response);
        const faces = response.outputs[0].data.regions.map(output => {
          console.log('output: ', output);
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

      displayFaceBox = (boxs) => {
        console.log("boxs: ", boxs);
        this.setState({boxs: boxs});
      }

      componentDidMount() {
        const clrifi = new Clarifai.App({
          apiKey: 'f3b8b2a3fc9e4d93b266487e315bf64f'
        });

        this.setState({
          clrifi: clrifi,
        });
      }

      onRouteChange = (route) => {
        this.setState({route: route});
        // route === 'home' ? this.setState({isSignedin: true}) : this.setState({isSignedin: false});
      }

      renderRoute = (route) => {
        console.log('render: ', route);
        switch (route) {
          case 'home':
          return (
            <ImageEngine
              onInputChange={ this.onInputChange }
              onButtonSubmit={ this.onButtonSubmit }
              image={ this.state.image }
              boxs={ this.state.boxs }
            />
          )
          break;

          case 'signin':
          return (
            <SigninForm onRouteChange={ this.onRouteChange }/>
          )
          break;

          case 'signup':
          return (
          <SignupForm onRouteChange={ this.onRouteChange }/>
          )
          break;

          default:
          return (
            <SigninForm onRouteChange={ this.onRouteChange }/>
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
            />
            <div>
              { this.renderRoute(this.state.route) }
            </div>
          </div>
        );
      }
    }

    export default App;

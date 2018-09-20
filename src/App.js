import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import ImageUrlForm from './Components/ImageUrlForm/ImageUrlForm'
import Rank from './Components/Rank/Rank'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particlesParam = {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 700
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: "",
      clarifi: null,
      image: "",
      boxs: [],
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

      render() {
        return (
          <div className="App">
            <Particles className='particales' params={particlesParam} />
            <Navigation/>
            <Rank/>
            <ImageUrlForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } />
            <FaceRecognition image={ this.state.image } boxs={ this.state.boxs }/>
          </div>
        );
      }
    }

    export default App;

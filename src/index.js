import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import Particles from 'react-particles-js';
import 'tachyons';

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

ReactDOM.render(
  <div>
  <Particles
    className='particales'
    params={ particlesParam }
  />
  <App />
  </div>,
document.getElementById('root'));
registerServiceWorker();

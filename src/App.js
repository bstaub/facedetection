import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '76b1c66f1b184e219f2844f12156409b'
});

const particalesoptions = {
  particles: {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    //console.log(event.target.value);
    //https://www.indezine.com/products/powerpoint/learn/color/images/rgb01.png
    //https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
    this.setState({ input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('clicked');
    this.setState({ imageUrl: this.state.input });
    //https://clarifai.com/models  --> face FaceDetection  -> register
    //https://clarifai.com/developer/guide/  ->client -> js


    app.models
      .predict(
        //Clarifai.COLOR_MODEL,
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
        .then(
      function (response) {
        // do something with response
        console.log(response);
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function (err) {
        // there was an error
      }
    );




  }

  render() {
    return (
      <div className="App">
        <Particles
          params={particalesoptions} className='particales'
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceDetection imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceDetection />
      </div>
    );
  }
}

export default App;

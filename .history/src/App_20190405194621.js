import React, { Component } from 'react';
import Navigation from './components'
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

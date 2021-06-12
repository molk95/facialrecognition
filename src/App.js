import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';

import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

import './App.css';

const app = new Clarifai.App({
  apiKey : '8b7f21215d1640c0950c08407576fd7e'
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3ca9d1",
        blur: 5
      }
    }
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
    }
  }
  

  InputonChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  ButtononSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
      function(response) {
        console.log(response)
      },
      function(err) {

      }
    );
  }
  render() {
    return (
      <div className="App">
         <Particles className='particles '
         params={particlesOptions} /> 
         <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm 
         InputonChange={this.InputonChange}
         ButtononSubmit={this.ButtononSubmit} />
         <FaceRecognition imageUrl={this.state.imageUrl} /> 
      </div>
    );
  }
}

export default App;

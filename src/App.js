import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Signin from './components/signin/Singin';
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
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
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
      box:{},
    }
  }
  

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.output[0].data.regions[0].region.info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
        this.state.input).
      then(res => this.displayFaceBox(this.calculateFaceLocation(res))
      .catch(err => console.log(err))
    );
  }
  render() {
    const {imageUrl, box} = this.state;
    return (
      <div className="App">
         <Particles className='particles '
         params={particlesOptions} /> 
         <Navigation />
         <Signin />
         <Logo />
         <Rank />
         <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

import './App.css';
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
  render() {
    return (
      <div className="App">
         <Particles className='particles '
         params={particlesOptions} /> 
         <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm />
      {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

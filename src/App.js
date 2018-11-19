import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import Hero from './Slides/Hero';
import Work from './Slides/Work';
import Skills from './Slides/Skills';
import Contact from './Slides/Contact';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Hero />
          <Work />
          <Skills />
          <Contact />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div>You are a tablet or mobile phone</div>
          <Hero />
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

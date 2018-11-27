import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import WideScreenHero from './Slides/WideScreen/Hero';
import WideScreenWork from './Slides/WideScreen/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import WideScreenContact from './Slides/WideScreen/Contact';
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
          <WideScreenHero />
          <WideScreenWork />
          <WideScreenSkills />
          <WideScreenContact />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

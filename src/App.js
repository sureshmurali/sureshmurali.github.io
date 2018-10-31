import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Hero from './Components/Hero';
import AvenirRoman from './Assets/Fonts/Avenir/Avenir-Roman-12.ttf';
import Valencia from './Assets/Fonts/Valencia/Valencia.ttf';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0; }
*, *:before, *:after { box-sizing: border-box; }

@font-face {
  font-family: 'AvenirRoman';
  src: url(${AvenirRoman});
}

@font-face {
  font-family: 'Valencia';
  src: url(${Valencia});
}
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Hero from './Slides/Hero';
import Work from './Slides/Work';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0; }
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        {/* <Work /> */}
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

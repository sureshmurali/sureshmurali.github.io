import React, { Component } from 'react';
import { render } from 'react-dom';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <Hero />
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Hero from './Slides/Hero';
import Work from './Slides/Work';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ vh: Math.round(window.innerHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh } = this.state;
    console.log(Math.max(body.scrollTop, documentElement.scrollTop));
    console.log('VH: ', vh);
  }

  render() {
    return (
      <React.Fragment>
        <Hero />
        <Work />
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));

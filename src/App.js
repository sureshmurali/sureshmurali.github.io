import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import MobileHero from './Slides/Mobile/HeroSlide/Hero';
import MobileWork from './Slides/Mobile/WorkSlide/Work';
import MobileSkills from './Slides/Mobile/Skills';
import MobileContact from './Slides/Mobile/ContactSlide/Contact';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        MediaQuery,
        { query: "(min-device-width: 1224px)" },
        React.createElement(WideScreenHero, null),
        React.createElement(WideScreenWork, null),
        React.createElement(WideScreenSkills, null),
        React.createElement(WideScreenContact, null)
      ),
      React.createElement(
        MediaQuery,
        { query: "(max-device-width: 1224px)" },
        React.createElement(MobileHero, null),
        React.createElement(MobileWork, null),
        React.createElement(MobileSkills, null),
        React.createElement(MobileContact, null)
      ),
      React.createElement(GlobalStyle, null)
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));

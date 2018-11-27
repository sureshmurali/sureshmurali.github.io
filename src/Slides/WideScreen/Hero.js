import React, { Component } from 'react';
import NameAndJobTitle from '../../Components/HeroSlide/NameAndJobTitle';
import AboutMe from '../../Components/HeroSlide/AboutMe';

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <NameAndJobTitle />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Hero;

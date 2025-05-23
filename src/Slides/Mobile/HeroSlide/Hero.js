import React from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import AboutMe from './AboutMe';

const Hero = () => {
  return (
    <React.Fragment>
      <NameAndJobTitle />
      <AboutMe />
    </React.Fragment>
  );
}

export default Hero;

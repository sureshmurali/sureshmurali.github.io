import React, { Component } from 'react';
import styled from 'styled-components';
import TextReveal from '../Components/HeroSlide/TextReveal';

const NameAndJobTitle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
`;/* Since pageSplitTime is 1.4 */

const AboutMe = styled.div`
    height: 40vh;
    width:100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-family: 'AvenirRoman';
    text-align: center;
    transform: translateY(40%);
`;

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <NameAndJobTitle>
          <TextReveal text="Suresh Murali" fontFam="Valencia" fontSizeInPx="150" timeDelay={500} />
          <br />
          <TextReveal text="UI/UX Designer & Front-end Developer" fontFam="AvenirRoman" fontSizeInPx="50" timeDelay={1300} />
        </NameAndJobTitle>
        <AboutMe>
        I’m a front-end developer who cares deeply about user experience.
          <br />
        I have serious passion for UI design and new technologies.
        </AboutMe>
      </React.Fragment>
    );
  }
}

export default Hero;

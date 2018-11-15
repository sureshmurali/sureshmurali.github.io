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
    /* border: 1px solid blue; */
`;

const AboutMeContainer = styled.div`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
`;

// const AboutMeTitle = styled.div`
//   font-family: 'AvenirHeavy';
//   font-size: 100px;
//   position: absolute;
//   color: #DEDEDE;
//   top:0;
//   left:0;
// `;

// const AboutMeDescription = styled.div`
//   align-items: center;
//   font-size: 40px;
//   font-family: 'AvenirRoman';
//   text-align: right;
//   padding-left: 4%;
//   padding-right: 4%;
//   transform: translateY(150%);
// `;

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <NameAndJobTitle>
          <TextReveal text="Suresh Murali" fontFam="Valencia" fontSizeInPx="150" timeDelay={500} />
          <br />
          <TextReveal text="UI/UX Designer & Front-end Developer" fontFam="AvenirRoman" fontSizeInPx="50" timeDelay={1300} />
        </NameAndJobTitle>
        <AboutMeContainer>
          {/* <AboutMeTitle>ABOUT ME</AboutMeTitle>
          <AboutMeDescription>
          Front-end developer who cares deeply about user experience.
            <br />
          Serious passion for UI design and new technologies.
            <br />
          </AboutMeDescription> */}
        </AboutMeContainer>
      </React.Fragment>
    );
  }
}

export default Hero;

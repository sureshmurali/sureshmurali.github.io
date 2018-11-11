import React, { Component } from 'react';
import styled from 'styled-components';
import TextReveal from '../Components/HeroSlide/TextReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px dashed #EEE;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    margin-bottom: 50vh;
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <TextReveal text="Suresh Murali" fontFam="Valencia" fontSizeInPx="150" timeDelay={500} />
        <br />
        <TextReveal text="UI/UX Designer & Front-end Developer" fontFam="AvenirRoman" fontSizeInPx="50" timeDelay={1300} />
      </Container>
    );
  }
}

export default Hero;

import React, { Component } from 'react';
import styled from 'styled-components';
import TextReveal from '../Components/TextReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px dashed #EEE;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <TextReveal text="Suresh Murali" fontFam="Valencia" fontSizeInPx="150" timeDelay={500} />
        <br />
        <TextReveal text="UI/UX designer & Front end developer" fontFam="AvenirRoman" fontSizeInPx="50" timeDelay={1300} />
      </Container>
    );
  }
}

export default Hero;

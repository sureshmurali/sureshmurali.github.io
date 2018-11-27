import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <NameReveal text="Suresh Murali" fontFam="Valencia" timeDelay={500} />
        <br />
        <TitleReveal text="Front-end Developer & UI/UX Designer" fontFam="AvenirRoman" timeDelay={1300} />
      </Container>
    );
  }
}

export default NameAndJobTitle;

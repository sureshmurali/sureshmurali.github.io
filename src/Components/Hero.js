import React, { Component } from 'react';
import styled from 'styled-components';

const MyName = styled.div`
  font-family: 'Valencia';
  font-size: 150px;
  text-align:center;
`;

const MyPosition = styled.div`
  font-family: 'AvenirRoman';
  font-size: 50px;
  text-align:center;
`;
const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px dashed red;
    justify-content: center;
    align-items: center;
    height:100vh;
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <MyName>
            Suresh Murali
        </MyName>
        <br />
        <MyPosition>
          {'UI/UX designer & Front end developer'}
        </MyPosition>
      </Container>
    );
  }
}

export default Hero;

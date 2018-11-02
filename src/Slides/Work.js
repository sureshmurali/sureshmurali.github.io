import React, { Component } from 'react';
import styled from 'styled-components';

const MyName = styled.div`
  font-family: 'Valencia';
  font-size: 150px;
  text-align:center;
`;
const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px dashed #EEE;
    justify-content: center;
    align-items: center;
    height:100vh;
`;

class Work extends Component {
  render() {
    return (
      <Container>
        <MyName>
            Suresh Murali
        </MyName>
      </Container>
    );
  }
}

export default Work;

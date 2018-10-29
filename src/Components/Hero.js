import React, { Component } from 'react';
import styled from 'styled-components';

const MyName = styled.div`
  font-size: 100px;
  text-align:center;
`;

class Hero extends Component {
  render() {
    return (
      <MyName>
        SURESH MURALI
      </MyName>
    );
  }
}

export default Hero;

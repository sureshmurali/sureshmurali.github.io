import React from 'react';
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
`;

const NameAndJobTitle = () => {
  return (
    <Container>
      <NameReveal text="Suresh Murali" fontFamily="Valencia" timeDelay={500} />
      <br />
      <TitleReveal text="UI/UX Architect" fontFamily="AvenirRoman" timeDelay={1300} />
    </Container>
  );
}

export default NameAndJobTitle;

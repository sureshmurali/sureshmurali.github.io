import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from '../Components/WorkSlide/TextContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
    height:100vh;
`;

class Work extends Component {
  render() {
    return (
      <Container>
        <TextContent
          number="01"
          projectName="Voistrap"
          projectDesc="IoT project to give workplace insights using indoor localization, voice and schedule."
          projectType="WEB APP"
          roles={['UI designer', 'Front-end developer']}
        />
      </Container>
    );
  }
}

export default Work;

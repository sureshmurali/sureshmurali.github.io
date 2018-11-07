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
      <React.Fragment>
        <Container>
          <TextContent
            number="01"
            projectName="Voistrap"
            projectDesc="IoT project to give workplace insights using indoor localization, voice and schedule."
            projectType="WEB APP"
            roles={['UI designer', 'Full stack developer']}
          />
        </Container>
        <Container>
          <TextContent
            number="02"
            projectName="ComingOrNot"
            projectDesc="Event planner web app that strives to ease the work of an organizer, conduct events and get togethers in a much planned and less chaotic way."
            projectType="WEB APP"
            roles={['UI designer', 'Front-end developer']}
          />
        </Container>
        <Container>
          <TextContent
            number="03"
            projectName="WhatsMyFood"
            projectDesc="iOS app to remember your fav food at each restaurant you eat.."
            projectType="iOS APP"
            roles={['UI designer', 'Front-end developer']}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default Work;

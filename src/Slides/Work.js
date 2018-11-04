import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 100px;
  /* border: 1px dashed black; */
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
  font-size: 30px;
  /* border: 1px dashed black; */
`;

const MyRole = styled.div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  font-size: 30px;
  /* border: 1px dashed black; */
`;

const ProjectID = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 35px;
  /* border: 1px dashed black; */
  padding: 5%;
`;

const ProjectType = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 30px;
  /* border: 1px dashed black; */
  padding: 5%;
`;

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
    height:100vh;
`;

const TextContainer = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 2px solid black; */
`;

const EmptyBlock = styled.div`
height:30%; /** NEED RESPO */
/* border: 2px solid black; */
`;

const ProjectDetailsContainer = styled.div`
display: flex;
justify-content:center;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-left:20%;
height: 100%;
`;

class Work extends Component {
  render() {
    return (
      <Container>
        <TextContainer>
          <ProjectID>
            01
          </ProjectID>
          <ProjectDetailsContainer>
            <ProjectDetails>
              <ProjectName>
              Voistrap
              </ProjectName>
              <ProjectDesc>
              IoT project to give workplace insights using indoor localization, voice and schedule.
              </ProjectDesc>
              <MyRole>
              UI Designer&nbsp; • &nbsp;Full stack developer
              </MyRole>
            </ProjectDetails>
            <EmptyBlock />
          </ProjectDetailsContainer>

          <ProjectType>
            WEB APP
          </ProjectType>
        </TextContainer>
      </Container>
    );
  }
}

export default Work;

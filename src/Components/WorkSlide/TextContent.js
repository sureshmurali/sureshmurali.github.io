import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.div`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
border: 1px dashed black;
height:100vh;
width: 50%;
`;

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 80px;
  border: 1px dashed black;
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
  font-size: 30px;
  min-height: 150px; /** NEED RESPO */
  border: 1px dashed black;
`;

const MyRole = styled.div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  font-size: 30px;
  border: 1px dashed black;
`;

const ProjectID = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 35px;
  border: 1px dashed black;
  padding: 5%;
`;

const ProjectType = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 30px;
  border: 1px dashed black;
  padding: 5%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
border: 1px dashed black;
width: 100%;
padding-left:20%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
border: 2px solid black;
padding-top:10%;
height: 100%;
`;

class TextContent extends Component {
  render() {
    const {
      number, projectName, projectDesc, roles, projectType,
    } = this.props;
    return (
      <TextContainer>
        <ProjectID>
          {number}
        </ProjectID>
        <ProjectDetailsContainer>
          <ProjectDetails>
            <ProjectName>
              {projectName}
            </ProjectName>
            <MyRole>
              {roles.map((role, index, arr) => (index === arr.length - 1 ? (
                <span key={role}>
                  {role}
                </span>
              ) : (
                <span key={role}>
                  {role}
                        &nbsp; • &nbsp;
                </span>
              )))}
            </MyRole>
            <ProjectDesc>
              {projectDesc}
            </ProjectDesc>
          </ProjectDetails>
        </ProjectDetailsContainer>

        <ProjectType>
          {projectType}
        </ProjectType>
      </TextContainer>
    );
  }
}

TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
};

export default TextContent;

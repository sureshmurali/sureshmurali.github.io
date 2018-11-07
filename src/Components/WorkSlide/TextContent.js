import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 100px;
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

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
border: 1px dashed black;
width: 100%;
padding-left:20%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
justify-content:center;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */

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
            <ProjectDesc>
              {projectDesc}
            </ProjectDesc>
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

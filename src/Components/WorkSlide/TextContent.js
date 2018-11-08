import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.div`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`;

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  font-size: 80px;
  /* border: 1px dashed black; */
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
  font-size: 30px;
  min-height: 150px; /** NEED RESPO */
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

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding-left:20%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:10%;
height: 100%;
`;

const appearText = () => keyframes`
0%{
  color: #FFF;
}
100%{
  color: #333;
}
`;

const revBlock = () => keyframes`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`;


let BlockTextReveal = styled.span`
`;

const BlockTextRevealQuick = styled.span`
color: #FFF;
animation: ${appearText} 0.0001s linear forwards;
animation-delay: 0.5s;
position: relative;

&::after{
content:'';
top:0;
left:0;
position:absolute;
width:0%;
height:100%;
background: #222;
animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
animation-delay:0s;
}
`;

const BlockTextRevealNoAnim = styled.span`

`;

class TextContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshBlock: false,
    };
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.refresh(nextProps);
  }

  refresh(nextProps) {
    const { block } = nextProps;
    if (block) {
      BlockTextReveal = BlockTextRevealNoAnim;
      this.setState({ refreshBlock: true },
        () => {
          BlockTextReveal = BlockTextRevealQuick;
          this.setState({ refreshBlock: false });
        });
    }
  }

  render() {
    const {
      number, projectName, projectDesc, roles, projectType, block,
    } = this.props;
    return (
      <TextContainer>
        <ProjectID>
          <BlockTextReveal block={block}>
            {number}
          </BlockTextReveal>
        </ProjectID>
        <ProjectDetailsContainer>
          <ProjectDetails>
            <ProjectName>
              <BlockTextReveal block={block}>
                {projectName}
              </BlockTextReveal>
            </ProjectName>
            <MyRole>
              <BlockTextReveal block={block}>
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
              </BlockTextReveal>
            </MyRole>
            <ProjectDesc>
              {projectDesc}
            </ProjectDesc>
          </ProjectDetails>
        </ProjectDetailsContainer>

        <ProjectType>
          <BlockTextReveal block={block}>
            {projectType}
          </BlockTextReveal>
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
  block: PropTypes.bool.isRequired,
};

export default TextContent;

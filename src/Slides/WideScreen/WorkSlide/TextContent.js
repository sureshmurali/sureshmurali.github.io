import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const TextContainer = styled.section`
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
  @media ${device.laptop} {
    font-size: 70px;
  }
  @media ${device.laptopL} {
    font-size: 80px;
  }
  @media ${device.desktop} {
    font-size: 120px;
  }
  /* border: 1px dashed black; */
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;

const MyRole = styled.div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;

const ProjectID = styled.div`
  font-family: 'AvenirHeavy';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`;

const ProjectType = styled.div`
  font-family: 'AvenirHeavy';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
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
display:${props => (props.inline ? 'inline' : 'block')};
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
    const { refreshToggle } = nextProps;
    if (refreshToggle) {
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
      number, projectName, projectDesc, roles, projectType, refreshToggle,
    } = this.props;
    return (
      <TextContainer>
        <ProjectID>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {number}
          </BlockTextReveal>
        </ProjectID>
        <ProjectDetailsContainer>
          <ProjectDetails>
            <ProjectName>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {projectName}
              </BlockTextReveal>
            </ProjectName>
            <MyRole>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
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
              <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
                {projectDesc}
              </BlockTextReveal>
            </ProjectDesc>
          </ProjectDetails>
        </ProjectDetailsContainer>

        <ProjectType>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
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
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;

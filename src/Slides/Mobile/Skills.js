import React from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    }
`;

const SkillsTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SkillsList = styled.div`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${device.mobileS} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 45px;
  }
`;

const Skills = () => {
  return (
    <Container>
      <SkillsTitle>SKILLS</SkillsTitle>
      <SkillsList>
        <div>
          Product Design
          <br />
          Design system
          <br />
          Information architect
          <br />
          <br />
          HTML & CSS
          <br />
          React
          <br />
          Node JS
          <br />
        </div>
        <br />
        <div>
          Project Management
          <br />
          Visual Communication
          <br />
          Concept development
          <br />
          <br />
          Figma
          <br />
          Sketch
          <br />
          Principle
          <br />
        </div>
      </SkillsList>
    </Container>
  );
}

export default Skills;

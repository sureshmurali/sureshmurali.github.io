import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.div`
    height: 120vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(-${(scrollPercent) * 10}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:30%;
  right:-50%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 35px;
  }
  @media ${device.desktop} {
    font-size: 65px;
  }
`;

const Skills = () =>  {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { body, documentElement } = window.document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 950) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      setScrollPercent(sp);
    }
  };


    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
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

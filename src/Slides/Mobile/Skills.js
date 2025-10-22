/**
 * Skills Component - Mobile version
 * 
 * This component handles:
 * 1. Displaying the skills section with staggered animations
 * 2. Responsive text sizing based on screen size
 */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // GreenSock Animation Platform
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
  // Create refs for animation targets
  const titleRef = useRef(null);
  const skillsListRef = useRef(null);
  const skillItems = useRef([]);
  
  // Set up animations when component mounts
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Get all skill items for staggered animation
    const skillElements = skillsListRef.current.querySelectorAll('div');
    skillItems.current = skillElements;
    
    // Animate the title with a slide in from left
    tl.fromTo(titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
    // Animate each skill item with a staggered fade in
    .fromTo(skillItems.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1 // Stagger each item's animation
      },
      "-=0.4" // Start slightly before the title animation finishes
    );
    
    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline if component unmounts
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <Container>
      <SkillsTitle ref={titleRef}>SKILLS</SkillsTitle>
      <SkillsList ref={skillsListRef}>
        <div>
          Design System
          <br />
          UI/UX Design
          <br />
          Design Tokens
          <br />
          <br />
          HTML & CSS
          <br />
          Next JS
          <br />
          Node JS
          <br />
        </div>
        <br />
        <div>
          Team Leadership
          <br />
          Agile Planning
          <br />
          Project Management
          <br />
          <br />
          Figma Plugins
          <br />
          Icon Management
          <br />
          Workflow Automation
          <br />
        </div>
      </SkillsList>
    </Container>
  );
}

export default Skills;

/**
 * TextContent Component - Displays project details with reveal animations
 * 
 * This component handles:
 * 1. Displaying project information (name, description, roles, etc.)
 * 2. Animating text reveals using GSAP
 * 3. Responsive text sizing based on screen size
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform
import device from '../../../Assets/Responsive/breakpoints';

const TextContainer = styled.section`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 100%;
`;

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 45px;
  }
  @media ${device.mobileL} {
    font-size: 50px;
  }
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  /* border: 1px dashed black; */
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'AvenirBook';
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
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`;

/**
 * TextReveal component - Handles the text reveal animation using GSAP
 * This replaces the previous CSS keyframes approach with GSAP for better performance
 */
const TextReveal = ({ children, inline, refreshToggle }) => {
  // Create refs for the text and overlay elements
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  
  // Set up animations when the component mounts or refreshToggle changes
  useEffect(() => {
    if (!textRef.current || !overlayRef.current) return;
    
    // Reset the animation state
    gsap.set(textRef.current, { color: '#FFF' });
    gsap.set(overlayRef.current, { 
      left: 0,
      width: '0%',
      opacity: 1
    });
    
    // Create a timeline for better control of animation sequence
    const tl = gsap.timeline();
    
    // Add the overlay reveal animation
    tl.to(overlayRef.current, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    .to(overlayRef.current, {
      left: '100%',
      width: '0%',
      duration: 0.5,
      ease: 'power2.inOut'
    })
    .to(textRef.current, {
      color: '#333',
      duration: 0.01,
      delay: -0.5 // Start slightly before the overlay finishes
    });
    
    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline if component unmounts during animation
    };
  }, [refreshToggle]); // Re-run when refreshToggle changes
  
  return (
    <span 
      ref={textRef}
      style={{
        display: inline ? 'inline' : 'block',
        color: '#FFF',
        position: 'relative'
      }}
    >
      {children}
      <span 
        ref={overlayRef}
        style={{
          content: '',
          top: 0,
          left: 0,
          position: 'absolute',
          width: '0%',
          height: '100%',
          background: '#222',
          zIndex: 1
        }}
      />
    </span>
  );
};

/**
 * TextContent Component - Displays project details with animated text reveals
 */
const TextContent = ({ number, projectName, projectDesc, roles, projectType, refreshToggle = false }) => {
  // Helper function to render roles with bullet separators
  const renderRoles = (roleList) => {
    return roleList.map((role, index, arr) => {
      return index === arr.length - 1 ? (
        <span key={role}>{role}</span>
      ) : (
        <span key={role}>
          {role}
          &nbsp; • &nbsp;
        </span>
      );
    });
  };
  return (
    <TextContainer>
      <ProjectID>
        <TextReveal refreshToggle={refreshToggle} inline>
          {number}
        </TextReveal>
      </ProjectID>
      <ProjectDetailsContainer>
        <ProjectDetails>
          <ProjectName>
            <TextReveal refreshToggle={refreshToggle} inline>
              {projectName}
            </TextReveal>
          </ProjectName>
          <MyRole>
            <TextReveal refreshToggle={refreshToggle} inline>
              {renderRoles(roles)}
            </TextReveal>
          </MyRole>
          <ProjectDesc>
            <TextReveal refreshToggle={refreshToggle} inline>
              {projectDesc}
            </TextReveal>
          </ProjectDesc>
        </ProjectDetails>
      </ProjectDetailsContainer>
      
      <ProjectType>
        <TextReveal refreshToggle={refreshToggle} inline>
          {projectType}
        </TextReveal>
      </ProjectType>
    </TextContainer>
  );
};

/**
 * PropTypes for TextContent component
 */
TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  projectType: PropTypes.string.isRequired,
  refreshToggle: PropTypes.bool,
};

/**
 * PropTypes for TextReveal component
 */
TextReveal.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  refreshToggle: PropTypes.bool,
};

export default TextContent;

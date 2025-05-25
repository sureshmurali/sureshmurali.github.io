/**
 * NameAndJobTitle Component - Mobile version
 * 
 * This component handles:
 * 1. Displaying the name and job title with animations similar to WideScreen
 * 2. Responsive text sizing based on screen size
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // GreenSock Animation Platform
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100%;
    background-color: white;
    overflow: hidden; /* Prevent any overflow issues */
`;

// Name reveal section
const NameStage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

// Title reveal section
const TitleStage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  overflow: hidden;
  margin-top: 10px;
`;

// Name text element
const NameText = styled.div`
  font-family: 'Valencia';
  text-align: center;
  color: #333;
  position: relative;
  @media ${device.mobileS} {
    font-size: 70px;
  }
  @media ${device.mobileM} {
    font-size: 80px;
  }
  @media ${device.mobileL} {
    font-size: 90px;
  }
  @media ${device.tablet} {
    font-size: 150px;
  }
  @media ${device.laptop} {
    font-size: 160px;
  }
`;

// Title text element
const TitleText = styled.div`
  font-family: 'AvenirRoman';
  text-align: center;
  color: #333;
  position: relative;
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

// White block overlay for name
const NameWhiteBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  background-color: white;
  z-index: 2;
`;

// White block overlay for title
const TitleWhiteBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  height: 100%;
  background-color: white;
  z-index: 2;
`;

const NameAndJobTitle = () => {
  // Create refs for animation targets
  const nameTextRef = useRef(null);
  const nameBlockRef = useRef(null);
  const titleTextRef = useRef(null);
  const titleBlockRef = useRef(null);
  
  // Animation setup
  useEffect(() => {
    // Get the DOM elements from refs
    const nameText = nameTextRef.current;
    const nameBlock = nameBlockRef.current;
    const titleText = titleTextRef.current;
    const titleBlock = titleBlockRef.current;
    
    if (!nameText || !nameBlock || !titleText || !titleBlock) return;
    
    // Set initial states
    gsap.set(nameText, { y: 100, autoAlpha: 1 });
    gsap.set(nameBlock, { autoAlpha: 1, height: '100%' });
    gsap.set(titleText, { y: 30, autoAlpha: 1 });
    gsap.set(titleBlock, { autoAlpha: 1, height: '100%' });
    
    // Create a master timeline
    const masterTl = gsap.timeline();
    
    // Name reveal timeline
    const nameTl = gsap.timeline();
    nameTl.to(nameText, {
      y: 0,
      duration: 1,
      ease: "cubic-bezier(0, 0.1, 0.12, 0.99)",
      immediateRender: false
    }).to(nameBlock, {
      opacity: 0,
      height: 0,
      duration: 0.8,
      ease: "power1.out"
    }, ">+0.5"); // Start 0.5 seconds after text animation
    
    // Title reveal timeline
    const titleTl = gsap.timeline();
    titleTl.to(titleText, {
      y: 0,
      duration: 0.8,
      ease: "cubic-bezier(0, 0.1, 0.12, 0.99)",
      immediateRender: false
    }).to(titleBlock, {
      opacity: 0,
      height: 0,
      duration: 0.6,
      ease: "power1.out"
    }, ">+0.3"); // Start 0.3 seconds after text animation
    
    // Add both timelines to master timeline with appropriate sequencing
    masterTl.add(nameTl)
            .add(titleTl, ">-0.3"); // Start title animation slightly before name animation completes
    
    // Start the animation after a short delay
    masterTl.delay(0.5);
    
    // Return cleanup function
    return () => {
      masterTl.kill();
    };
  }, []); // Run only once on mount
  
  return (
    <Container>
      <NameStage>
        <NameText ref={nameTextRef}>Suresh Murali</NameText>
        <NameWhiteBlock ref={nameBlockRef} />
      </NameStage>
      
      <TitleStage>
        <TitleText ref={titleTextRef}>UI/UX Architect</TitleText>
        <TitleWhiteBlock ref={titleBlockRef} />
      </TitleStage>
    </Container>
  );
}

export default NameAndJobTitle;

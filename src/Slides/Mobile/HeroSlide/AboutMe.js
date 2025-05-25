/* eslint-disable react/no-unescaped-entities */
/**
 * AboutMe Component - Mobile version
 * 
 * This component handles:
 * 1. Displaying the about me text with animations
 * 2. Responsive text sizing based on screen size
 */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // GreenSock Animation Platform
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 50vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const AboutMeDescription = styled.span`
  font-family: 'AvenirRoman';
  font-size: 24px;
  text-align: center;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 40px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 45px;
  }
`;

const AboutMe = () => {
  // Create ref for animation target
  const textRef = useRef(null);
  
  // Set up animations when component mounts
  useEffect(() => {
    // Animate the about me text with a fade in and slight scale
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out",
        delay: 0.5 // Delay to start after the name and title animations
      }
    );
    
    // Cleanup function
    return () => {
      // Kill any active animations on unmount
      gsap.killTweensOf(textRef.current);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <Container>
      <AboutMeDescription ref={textRef}>
        Crafting user friendly and aesthetic UI designs
        is not just my profession, it's my passion.
      </AboutMeDescription>
    </Container>
  );
}

export default AboutMe;

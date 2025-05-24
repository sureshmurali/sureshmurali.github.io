/**
 * Contact Component - Displays the Contact section with scroll-based animations
 * 
 * This component creates a parallax-like effect where:
 * 1. The "CONTACT" title moves based on scroll position
 * 2. The social media icons remain fixed in position
 */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // GreenSock Animation Platform

// Social media icons
import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';

// Components
import SocialLogo from './SocialLogo';

// Responsive breakpoints
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

/**
 * Font size configuration for ContactTitle based on screen sizes
 */
const TITLE_FONT_SIZES = {
  desktop: 350, // >= 2560px
  laptopL: 200, // >= 1440px
  laptop: 180,  // >= 1024px
  tablet: 150   // < 1024px
};

/**
 * Get font size for ContactTitle based on screen width
 * @returns {string} Font size with px unit
 */
const getTitleFontSize = () => {
  const width = window.innerWidth;
  
  if (width >= 2560) return `${TITLE_FONT_SIZES.desktop}px`;
  if (width >= 1440) return `${TITLE_FONT_SIZES.laptopL}px`;
  if (width >= 1024) return `${TITLE_FONT_SIZES.laptop}px`;
  return `${TITLE_FONT_SIZES.tablet}px`;
};

/**
 * ContactTitle component - Large title that moves with scroll
 */
const ContactTitle = styled.div`
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top: 12%;
  left: -70%;
  font-size: ${getTitleFontSize};
  /* GSAP will handle the transform instead of CSS */
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

/**
 * Contact Component - Displays the Contact section with social media links
 */
const Contact = () => {
  // Create ref for the title element we'll animate with GSAP
  const titleRef = useRef(null);
  
  /**
   * Scroll multiplier - controls how fast the title moves relative to scroll
   * Higher value = faster movement
   */
  const SCROLL_MULTIPLIER = 8;
  
  /**
   * Handle scroll event - animates the title based on scroll position
   * Uses GSAP for smoother animation with less jank
   */
  const handleScroll = () => {
    // Get scroll information
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    // Calculate scroll percentage (0-100)
    let scrollPercent = (scrollTop / (scrollHeight - clientHeight) * 100);
    
    // Calculate minimum scroll limit for this section
    const minLimit = (clientHeight * 1040) / scrollHeight;
    
    // Only apply animation within our desired scroll range
    if (scrollPercent >= minLimit && scrollPercent <= 100 && titleRef.current) {
      // Adjust scroll percentage to start from 0 at the min limit
      scrollPercent -= minLimit;
      
      // Use GSAP to animate the title position
      gsap.to(titleRef.current, {
        x: `${scrollPercent * SCROLL_MULTIPLIER}%`,
        duration: 0.5, // Smooth animation duration
        ease: 'power1.out', // Smooth easing function
        overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
      });
    }
  };

  // Set up scroll listener when component mounts
  useEffect(() => {
    // Add passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position setup
    handleScroll();
    
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  return (
    <Container>
      <ContactTitle ref={titleRef}>CONTACT</ContactTitle>
      <SocialMediaIcons>
        <SocialLogo imgURL={twitterImg} alternate="Twitter" redirectURL="https://twitter.com/sureshmurali29" />
        <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/sureshmurali" />
        <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:sureshmurali29@gmail.com" />
        <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="https://www.instagram.com/sureshmurali_/" />
        <SocialLogo imgURL={dribbbleImg} alternate="Dribbble" redirectURL="https://dribbble.com/sureshmurali29" />
        <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/sureshmurali29" />
      </SocialMediaIcons>
    </Container>
  );
}

export default Contact;

/**
 * AboutMe Component - Displays the About Me section with scroll-based animations
 * 
 * This component creates a parallax-like effect where:
 * 1. The "ABOUT ME" title moves based on scroll position
 * 2. The description text remains fixed in position
 */

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap'; // GreenSock Animation Platform
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

/**
 * Font size configuration for AboutMeTitle based on screen sizes
 */
const TITLE_FONT_SIZES = {
  desktop: 350, // >= 2560px
  laptopL: 200, // >= 1440px
  laptop: 180,  // >= 1024px
  tablet: 150   // < 1024px
};

/**
 * Get font size for AboutMeTitle based on screen width
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
 * AboutMeTitle component - Large title that moves with scroll
 */
const AboutMeTitle = styled.div`
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top: 10%;
  left: -15%;
  font-size: ${getTitleFontSize};
  /* GSAP will handle the transform instead of CSS */
`;

/**
 * Font size configuration for AboutMeDescription based on screen sizes
 */
const DESCRIPTION_FONT_SIZES = {
  desktop: 70, // >= 2560px
  laptopL: 38, // >= 1440px
  laptop: 30,  // >= 1024px
  tablet: 24   // < 1024px
};

/**
 * Transform Y values for description positioning
 */
const DESCRIPTION_TRANSFORM_Y = {
  desktop: 80, // >= 2560px
  laptopL: 87, // >= 1440px
  laptop: 90,  // >= 1024px
  tablet: 90   // < 1024px
};

/**
 * Get font size for AboutMeDescription based on screen width
 * @returns {string} Font size with px unit
 */
const getDescriptionFontSize = () => {
  const width = window.innerWidth;
  
  if (width >= 2560) return `${DESCRIPTION_FONT_SIZES.desktop}px`;
  if (width >= 1440) return `${DESCRIPTION_FONT_SIZES.laptopL}px`;
  if (width >= 1024) return `${DESCRIPTION_FONT_SIZES.laptop}px`;
  return `${DESCRIPTION_FONT_SIZES.tablet}px`;
};

/**
 * Get transform Y value for AboutMeDescription based on screen width
 * @returns {string} Transform value with % unit
 */
const getDescriptionTransform = () => {
  const width = window.innerWidth;
  
  if (width >= 2560) return `translateY(${DESCRIPTION_TRANSFORM_Y.desktop}%)`;
  if (width >= 1440) return `translateY(${DESCRIPTION_TRANSFORM_Y.laptopL}%)`;
  if (width >= 1024) return `translateY(${DESCRIPTION_TRANSFORM_Y.laptop}%)`;
  return `translateY(${DESCRIPTION_TRANSFORM_Y.tablet}%)`;
};

/**
 * AboutMeDescription component - Text description that appears below the title
 */
const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  position: absolute;
  margin-left: 30%;
  margin-right: 5%;
  top: 20%;
  font-size: ${getDescriptionFontSize};
  transform: ${getDescriptionTransform};
`;

/**
 * AboutMe Component - Displays the About Me section with scroll-based animations
 */
const AboutMe = () => {
  // Create ref for the title element we'll animate with GSAP
  const titleRef = useRef(null);
  
  /**
   * Scroll multiplier - controls how fast the title moves relative to scroll
   * Higher value = faster movement
   */
  const SCROLL_MULTIPLIER = 5.5;
  
  /**
   * Handle scroll event - animates the title based on scroll position
   * Uses GSAP for smoother animation with less jank
   */
  const handleScroll = () => {
    // Get scroll information
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    // Calculate scroll percentage (0-100)
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight) * 100);
    
    // Calculate maximum scroll limit for this effect
    const maxLimit = (clientHeight * 150) / scrollHeight;
    
    // Only apply animation within our desired scroll range
    if (scrollPercent >= 0 && scrollPercent <= maxLimit && titleRef.current) {
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
      <AboutMeTitle ref={titleRef}>ABOUT ME</AboutMeTitle>
      <AboutMeDescription>
        Crafting user friendly and aesthetic UI designs
        is not just my profession, it's my passion.
      </AboutMeDescription>
    </Container>
  );
}

export default AboutMe;

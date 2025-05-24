/**
 * NameReveal Component - Animated text reveal with GSAP
 * 
 * This component creates a text reveal animation where:
 * 1. Text slides up from below
 * 2. A white block covers the text initially
 * 3. The white block fades away to reveal the text
 */

// React imports
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Animation library
import gsap from 'gsap'; // GreenSock Animation Platform

/**
 * Styled container for the animation
 */
const Stage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

/**
 * Font size configuration for different screen sizes
 * Centralizing these values makes it easy to adjust all sizes from one place
 */
const FONT_SIZES = {
  desktop: 180,  // >= 2560px
  laptopL: 140,  // >= 1440px
  laptop: 130,   // >= 1024px
  tablet: 100    // < 1024px
};

/**
 * Transform multiplier for initial position
 * Text starts below the visible area and slides up from white block
 */
const TRANSFORM_MULTIPLIER = 1.4;

/**
 * Get font size value based on screen width breakpoints
 * @returns {number} Font size value in pixels (without 'px' unit)
 */
const getFontSizeByBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width >= 2560) return FONT_SIZES.desktop;
  if (width >= 1440) return FONT_SIZES.laptopL;
  if (width >= 1024) return FONT_SIZES.laptop;
  return FONT_SIZES.tablet;
};

/**
 * The text element that will be revealed with animation
 * Using forwardRef to allow GSAP to animate this element
 */
const TextToReveal = React.forwardRef((props, ref) => {
  // Calculate these values once when component mounts instead of on every render
  const fontSize = `${getFontSizeByBreakpoint()}px`; // Font size in pixels
  const translateY = getFontSizeByBreakpoint() * TRANSFORM_MULTIPLIER; // Initial transform position
  const initialTransform = `translateY(${translateY}px)`; // Initial transform value
  
  return (
    <div 
      ref={ref} 
      style={{
        // border: '5px solid red',
        fontFamily: props.fontFamily,
        textAlign: 'center',
        fontSize,
        transform: initialTransform,
        ...(props.style || {})
      }}
    >
      {props.children}
    </div>
  );
});

// Add display name for debugging
TextToReveal.displayName = 'TextToReveal';

/**
 * White overlay block that will animate away to reveal text
 */
const WhiteBlock = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref}
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        marginRight: '100%',
        // border: '5px solid green',
        width: '120%',
        height: '35vh',
        ...(props.style || {})
      }}
    />
  );
});

// Add display name for debugging
WhiteBlock.displayName = 'WhiteBlock';


/**
 * NameReveal Component - Text reveal animation using GSAP
 * 
 * @param {string} text - The text to be revealed
 * @param {string} fontFamily - Font family to use for the text
 * @param {number} timeDelay - Delay in milliseconds before starting the animation
 */
const NameReveal = ({ text, fontFamily, timeDelay }) => {
  // Create refs to DOM elements we'll animate with GSAP
  const textRef = useRef(null);    // Reference to the text element
  const blockRef = useRef(null);   // Reference to the white block overlay
  const [reveal, setReveal] = useState(false); // Track reveal state like original
  
  // Set up the reveal trigger with the original timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, timeDelay);
    
    return () => clearTimeout(timer);
  }, [timeDelay]);
  
  // Animation configuration - defined outside the effect to prevent recreation on each render
  const textAnimConfig = {
    y: 0,                  // Move to final position (0)
    duration: 1,           // Animation takes 1 second
    ease: "cubic-bezier(0, 0.1, 0.12, 0.99)", // Exact same easing as original
    immediateRender: true  // Ensure the animation starts from the initial position
  };
  
  const blockAnimConfig = {
    opacity: 0,            // Fade to transparent
    height: 0,             // Shrink height to 0
    duration: 0.5,         // Animation takes 0.5 seconds
    ease: "linear",        // Linear easing like original
    delay: 2               // 2 second delay like original
  };
  
  // Set up animations when reveal state changes
  useEffect(() => {
    if (!reveal) return; // Only run animations when reveal is true
    
    // Get the DOM elements from refs
    const textElement = textRef.current;
    const blockElement = blockRef.current;
    
    // Create a GSAP timeline for better control and cleanup
    const tl = gsap.timeline();
    
    // Add animations to the timeline
    tl.to(textElement, textAnimConfig)
      .to(blockElement, blockAnimConfig, ">+2"); // Start 2 seconds after previous animation ends
      
    // Return cleanup function
    return () => {
      // Kill the timeline if component unmounts during animation
      tl.kill();
    };
    
  }, [reveal]); // Run when reveal state changes

  return (
    <Stage>
      <TextToReveal
        ref={textRef}        // Attach ref for GSAP animations
        fontFamily={fontFamily}    // Apply font family from props
      >
        {text}
      </TextToReveal>
      <WhiteBlock ref={blockRef} />
    </Stage>
  );
}

NameReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

NameReveal.defaultProps = {
  fontFamily: 'Valencia',
};
export default NameReveal;

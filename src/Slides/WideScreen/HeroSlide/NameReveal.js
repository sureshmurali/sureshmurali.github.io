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

// Responsive breakpoints
import device from '../../../Assets/Responsive/breakpoints';

/**
 * Styled container for the animation
 */
const Stage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

/**
 * The text element that will be revealed with animation
 * Using forwardRef to allow GSAP to animate this element
 */
const TextToReveal = React.forwardRef((props, ref) => {
  // Get initial transform value based on screen size
  const getInitialTransform = () => {
    const width = window.innerWidth;
    let translateY;
    
    if (width >= 2560) { // desktop
      translateY = 200 * 1.4;
    } else if (width >= 1440) { // laptopL
      translateY = 150 * 1.4;
    } else if (width >= 1024) { // laptop
      translateY = 140 * 1.4;
    } else { // tablet and below
      translateY = 100 * 1.4;
    }
    
    return `translateY(${translateY}px)`;
  };
  
  // Get font size based on screen size
  const getFontSize = () => {
    const width = window.innerWidth;
    
    if (width >= 2560) return '180px'; // desktop
    if (width >= 1440) return '140px'; // laptopL
    if (width >= 1024) return '130px'; // laptop
    return '100px'; // tablet and below
  };
  
  return (
    <div 
      ref={ref} 
      style={{
        fontFamily: props.fontFamily,
        textAlign: 'center',
        fontSize: getFontSize(),
        transform: getInitialTransform(),
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
  
  // Set up animations when reveal state changes
  useEffect(() => {
    if (!reveal) return; // Only run animations when reveal is true
    
    // Get the DOM elements from refs
    const textElement = textRef.current;
    const blockElement = blockRef.current;
    
    // Get the initial Y position based on screen width
    const getInitialY = () => {
      const width = window.innerWidth;
      if (width >= 2560) return 200; // desktop
      if (width >= 1440) return 150; // laptopL
      if (width >= 1024) return 140; // laptop
      return 100; // tablet and below
    };
    
    const initialY = getInitialY();
    
    // First animation: Text slides up from below with exact same cubic-bezier
    gsap.to(textElement, {
      y: 0,                  // Move to final position (0)
      duration: 1,           // Animation takes 1 second
      ease: "cubic-bezier(0, 0.1, 0.12, 0.99)", // Exact same easing as original
      immediateRender: true  // Ensure the animation starts from the initial position
    });
    
    // Second animation: White block fades away after 2 seconds (matches original delay)
    gsap.to(blockElement, {
      opacity: 0,            // Fade to transparent
      height: 0,             // Shrink height to 0
      duration: 0.5,         // Animation takes 0.5 seconds
      ease: "linear",        // Linear easing like original
      delay: 2               // 2 second delay like original
    });
    
  }, [reveal]); // Re-run when reveal state changes

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

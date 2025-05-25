/**
 * EyepImages Component - Displays project images with parallax scrolling effect
 */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform

// Images
import eyepTabletImg from '../../../../Assets/Images/Eyep/Tablet.png';
import eyepIphoneImg from '../../../../Assets/Images/Eyep/Iphone.png';


/**
 * Styled components for the device images
 * GSAP will handle the animations instead of styled-components
 */
const Iphone = styled.img`
  position: absolute;
  bottom: -70vh;
  left: 0vw;
  height: 80vh;
`;

const Tablet = styled.img`
  position: absolute;
  bottom: -40vh;
  right: 0vw;
  height: 80vh;
  filter: blur(0.6px);
  transform: scale(0.94); /* Initial scale */
`;

/**
 * EyepImages Component - Displays project images with parallax scrolling effect
 * Uses GSAP for smoother animations instead of CSS transitions
 */
const EyepImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Create refs for the elements we want to animate
  const tabletRef = useRef(null);
  const iphoneRef = useRef(null);
  
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;
  
  // Animation multipliers - same as the original values
  const TABLET_SCROLL_MULTIPLIER = 2;
  const IPHONE_SCROLL_MULTIPLIER = 12;
  
  // Use GSAP to animate the elements based on scroll position
  useEffect(() => {
    if (!tabletRef.current || !iphoneRef.current) return;
    
    // Animate tablet with GSAP
    gsap.to(tabletRef.current, {
      y: -(scrollPercent * TABLET_SCROLL_MULTIPLIER) + '%',
      duration: 0.2, // Same as the original transition duration
      ease: 'power1.out', // Similar to ease-out
      overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
    });
    
    // Animate iPhone with GSAP
    gsap.to(iphoneRef.current, {
      y: -(scrollPercent * IPHONE_SCROLL_MULTIPLIER) + '%',
      duration: 0.2, // Same as the original transition duration
      ease: 'power1.out', // Similar to ease-out
      overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
    });
  }, [scrollPercent]); // Only re-run when scrollPercent changes

  return (
    <>
      <Tablet ref={tabletRef} src={eyepTabletImg} alt="eyepTablet" />
      <Iphone ref={iphoneRef} src={eyepIphoneImg} alt="eyepIphone" />
    </>
  );
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;

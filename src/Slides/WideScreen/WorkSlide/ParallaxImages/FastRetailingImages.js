/**
 * FastRetailingImages Component - Displays project images with parallax scrolling effect
 */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform

// Images
import fastRetailingUQImg from '../../../../Assets/Images/FastRetailing/UQ.png';
import fastRetailingGUImg from '../../../../Assets/Images/FastRetailing/GU.png';
import fastRetailingPLSTImg from '../../../../Assets/Images/FastRetailing/PLST.png';
import fastRetailingGU2Img from '../../../../Assets/Images/FastRetailing/GU2.png';


/**
 * Styled components for the device images
 * GSAP will handle the animations instead of styled-components
 */
const FastRetailingPhoneUQ = styled.img`
  position: absolute;
  top: 90vh;
  left: 0vw;
  height: 80vh;
`;

const FastRetailingPhoneGU = styled.img`
  position: absolute;
  top: 45vh;
  right: 2vw;
  height: 80vh;
  filter: blur(0.6px);
  transform: scale(0.9); /* Initial scale */
`;

const FastRetailingPhonePLST = styled.img`
  position: absolute;
  top: 75vh;
  left: 2vw;
  height: 80vh;
  filter: blur(0.8px);
  transform: scale(0.7); /* Initial scale */
`;

const FastRetailingPhoneGU2 = styled.img`
  position: absolute;
  top: 55vh;
  right: 5vw;
  height: 80vh;
  filter: blur(1.2px);
  transform: scale(0.6); /* Initial scale */
`;

/**
 * FastRetailingImages Component - Displays project images with parallax scrolling effect
 * Uses GSAP for smoother animations instead of CSS transitions
 */
const FastRetailingImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Create refs for the elements we want to animate
  const uqRef = useRef(null);
  const guRef = useRef(null);
  const plstRef = useRef(null);
  const gu2Ref = useRef(null);
  
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;
  
  // Animation multipliers - same as the original values
  const UQ_SCROLL_MULTIPLIER = 15;
  const GU_SCROLL_MULTIPLIER = 8;
  const PLST_SCROLL_MULTIPLIER = 5;
  const GU2_SCROLL_MULTIPLIER = 2;
  
  // Use GSAP to animate the elements based on scroll position
  useEffect(() => {
    // Only run animations if all refs are available
    if (!uqRef.current || !guRef.current || !plstRef.current || !gu2Ref.current) return;
    
    // Animate UQ phone with GSAP
    gsap.to(uqRef.current, {
      y: -(scrollPercent * UQ_SCROLL_MULTIPLIER) + '%',
      duration: 0.2, // Same as the original transition duration
      ease: 'power1.out', // Similar to ease-out
      overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
    });
    
    // Animate GU phone with GSAP
    gsap.to(guRef.current, {
      y: -(scrollPercent * GU_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
    
    // Animate PLST phone with GSAP
    gsap.to(plstRef.current, {
      y: -(scrollPercent * PLST_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
    
    // Animate GU2 phone with GSAP
    gsap.to(gu2Ref.current, {
      y: -(scrollPercent * GU2_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  }, [scrollPercent]); // Only re-run when scrollPercent changes

  return (
    <>
      <FastRetailingPhonePLST ref={plstRef} src={fastRetailingPLSTImg} alt="fastRetailingPLST" />
      <FastRetailingPhoneGU2 ref={gu2Ref} src={fastRetailingGU2Img} alt="fastRetailingGU2" />
      <FastRetailingPhoneUQ ref={uqRef} src={fastRetailingUQImg} alt="fastRetailingUQ" />
      <FastRetailingPhoneGU ref={guRef} src={fastRetailingGUImg} alt="fastRetailingGU" />
    </>
  );
}

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;

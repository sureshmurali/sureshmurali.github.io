/**
 * KosenImages Component - Displays project images with parallax scrolling effect
 */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform

// Images
import englishHome from '../../../../Assets/Images/Kosen/EnglishHome.png';
import jpnHome from '../../../../Assets/Images/Kosen/JpnHome.png';
import player from '../../../../Assets/Images/Kosen/Player.png';

/**
 * Styled components for the device images
 * GSAP will handle the animations instead of styled-components
 */
const JapaneseTab = styled.img`
  position: absolute;
  bottom: -140vh;
  left: 0vw;
  height: 80vh;
`;

const EnglishTab = styled.img`
  position: absolute;
  bottom: -120vh;
  right: 0.5vw;
  height: 80vh;
  filter: blur(0.6px);
  transform: scale(0.9); /* Initial scale */
`;

const PlayerTab = styled.img`
  position: absolute;
  bottom: -65vh;
  left: 1vw;
  height: 80vh;
  filter: blur(1px);
  transform: scale(0.6); /* Initial scale */
`;

/**
 * KosenImages Component - Displays project images with parallax scrolling effect
 * Uses GSAP for smoother animations instead of CSS transitions
 */
const KosenImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Create refs for the elements we want to animate
  const playerRef = useRef(null);
  const englishRef = useRef(null);
  const japaneseRef = useRef(null);
  
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;
  
  // Animation multipliers - same as the original values
  const JAPANESE_SCROLL_MULTIPLIER = 15;
  const ENGLISH_SCROLL_MULTIPLIER = 8;
  const PLAYER_SCROLL_MULTIPLIER = 2;
  
  // Use GSAP to animate the elements based on scroll position
  useEffect(() => {
    // Only run animations if all refs are available
    if (!playerRef.current || !englishRef.current || !japaneseRef.current) return;
    
    // Animate Japanese tab with GSAP
    gsap.to(japaneseRef.current, {
      y: -(scrollPercent * JAPANESE_SCROLL_MULTIPLIER) + '%',
      duration: 0.2, // Same as the original transition duration
      ease: 'power1.out', // Similar to ease-out
      overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
    });
    
    // Animate English tab with GSAP
    gsap.to(englishRef.current, {
      y: -(scrollPercent * ENGLISH_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
    
    // Animate Player tab with GSAP
    gsap.to(playerRef.current, {
      y: -(scrollPercent * PLAYER_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  }, [scrollPercent]); // Only re-run when scrollPercent changes

  return (
    <React.Fragment>
      <PlayerTab ref={playerRef} src={player} alt="kosenPlayer" />
      <EnglishTab ref={englishRef} src={englishHome} alt="kosenEnglish" />
      <JapaneseTab ref={japaneseRef} src={jpnHome} alt="kosenJapanese" />
    </React.Fragment>
  );
}

KosenImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default KosenImages;

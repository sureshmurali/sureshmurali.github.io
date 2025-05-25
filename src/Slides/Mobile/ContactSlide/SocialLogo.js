/**
 * SocialLogo Component - Mobile version
 * 
 * This component handles:
 * 1. Displaying social media icons with hover animations
 * 2. Responsive sizing based on screen size
 * 3. Handling external links to social profiles
 */

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform
import device from '../../../Assets/Responsive/breakpoints';

const LogoImage = styled.img`
/* border: 1px solid black; */
  @media ${device.mobileS} {
    height: 50px;
    width: 50px;
  }
  @media ${device.mobileM} {
    height: 65px;
    width: 65px;
  }
  @media ${device.mobileL} {
    height: 85px;
    width: 85px;
  }
  @media ${device.tablet} {
    height: 115px;
    width: 115px;
  }
`;

const SocialLogo = ({ imgURL, alternate, redirectURL }) => {
  // Create ref for animation target
  const logoRef = useRef(null);
  
  // Set up hover animations
  useEffect(() => {
    if (!logoRef.current) return;
    
    // Create hover animations
    const handleMouseEnter = () => {
      gsap.to(logoRef.current, {
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(logoRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    // Add event listeners
    const element = logoRef.current;
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup function
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(logoRef.current);
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div ref={logoRef} style={{ display: 'inline-block' }}>
      <a href={redirectURL} target="_blank" rel="noopener noreferrer">
        <LogoImage src={imgURL} alt={alternate} />
      </a>
    </div>
  );
}

SocialLogo.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default SocialLogo;

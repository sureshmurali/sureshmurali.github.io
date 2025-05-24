/**
 * SocialLogo Component - Displays a social media icon with a link
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

/**
 * Logo size configuration based on screen sizes
 */
const LOGO_SIZES = {
  desktop: 180, // >= 2560px
  laptopL: 90,  // >= 1440px
  laptop: 85,   // >= 1024px
  tablet: 70    // < 1024px
};

/**
 * Get logo size based on screen width
 * @returns {string} Size with px unit
 */
const getLogoSize = () => {
  const width = window.innerWidth;
  
  if (width >= 2560) return `${LOGO_SIZES.desktop}px`;
  if (width >= 1440) return `${LOGO_SIZES.laptopL}px`;
  if (width >= 1024) return `${LOGO_SIZES.laptop}px`;
  return `${LOGO_SIZES.tablet}px`;
};

/**
 * LogoImage component - Styled image for social media icons
 */
const LogoImage = styled.img`
  height: ${getLogoSize};
  width: ${getLogoSize};
`;

/**
 * SocialLogo component - Renders a social media icon with a link
 * @param {string} imgURL - URL of the social media icon image
 * @param {string} alternate - Alt text for the image and accessibility
 * @param {string} redirectURL - URL to redirect to when clicked
 */
const SocialLogo = ({ imgURL, alternate, redirectURL }) => {
  return (
    <a href={redirectURL} target="_blank" rel="noopener noreferrer">
      <LogoImage src={imgURL} alt={alternate} />
    </a>
  );
}

SocialLogo.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default SocialLogo;

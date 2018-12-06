import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const LogoImage = styled.img`
/* border: 1px solid black; */
  @media ${device.mobileS} {
    height: 65px;
    width: 65px;
  }
  @media ${device.mobileM} {
    height: 80px;
    width: 80px;
  }
  @media ${device.mobileL} {
    height: 100px;
    width: 100px;
  }
  @media ${device.tablet} {
    height: 130px;
    width: 130px;
  }
`;

class SocialLogo extends React.Component {
  render() {
    const { imgURL, alternate, redirectURL } = this.props;
    return (
      <a href={redirectURL} target="_blank" rel="noopener noreferrer">
        <LogoImage src={imgURL} alt={alternate} />
      </a>

    );
  }
}

SocialLogo.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default SocialLogo;

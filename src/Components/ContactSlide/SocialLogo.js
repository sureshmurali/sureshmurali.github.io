import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoImage = styled.img`
height: 90px;
width: 90px;
/* border: 1px solid black; */
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

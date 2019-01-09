import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const LogoImage = styled.img`
/* border: 1px solid black; */
@media ${device.laptop} {
    height: 85px;
    width: 85px;
  }
@media ${device.laptopL} {
    height: 90px;
    width: 90px;
  }
  @media ${device.desktop} {
    height: 180px;
    width: 180px;
  }
`;

class SocialLogo extends React.Component {
  constructor(props) {
    super(props);
    this.notifySlack = this.notifySlack.bind(this);
  }

  notifySlack() {
    const { alternate } = this.props;
    console.log(alternate);
    fetch(process.env.SLACK_URL, {
      credentials: 'omit',
      method: 'POST',
      body: JSON.stringify({ text: `🚀 ${alternate}` }),
    });
  }

  render() {
    const { imgURL, alternate, redirectURL } = this.props;
    return (
      <a href={redirectURL} onClick={this.notifySlack} target="_blank" rel="noopener noreferrer">
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

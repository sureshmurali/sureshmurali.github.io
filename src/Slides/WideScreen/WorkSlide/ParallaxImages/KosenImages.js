import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import englishHome from '../../../../Assets/Images/Kosen/EnglishHome.png';
import jpnHome from '../../../../Assets/Images/Kosen/JpnHome.png';
import player from '../../../../Assets/Images/Kosen/Player.png';

const JapaneseTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-140vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;

`;

const EnglishTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -120vh;
right:0.5vw;
/* border: 1px dashed red; */
filter: blur(0.6px);
height: 80vh; 
`;

const PlayerTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
left: 1vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1px);
`;

class KosenImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <PlayerTab src={player} scroll={scrollPercent} alt="kosenPlayer" />
        <EnglishTab src={englishHome} scroll={scrollPercent} alt="kosenEnglish" />
        <JapaneseTab src={jpnHome} scroll={scrollPercent} alt="kosenJapanese" />
      </React.Fragment>
    );
  }
}

KosenImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default KosenImages;

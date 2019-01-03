import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import englishHome from '../../../../Assets/Images/Kosen/EnglishHome.png';
import jpnHome from '../../../../Assets/Images/Kosen/JpnHome.png';
import player from '../../../../Assets/Images/Kosen/Player.png';

const JapaneseTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 14}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-240vh;
left: 2vw;
transform-origin: left center;
/* border: 1px dashed red; */
height: 80vh;

`;

const EnglishTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -220vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
filter: blur(0.6px);
height: 80vh; 
`;

const PlayerTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-165vh;
left: 2vw;
transform-origin: left center;
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
    // console.log('Voistrap scrollOffsetPercent ', scrollOffsetInPercent);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('Voistrap');
    }
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

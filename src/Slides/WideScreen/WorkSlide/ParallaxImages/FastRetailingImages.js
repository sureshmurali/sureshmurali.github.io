import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import fastRetailingUQImg from '../../../../Assets/Images/FastRetailing/UQ.png';
import fastRetailingGUImg from '../../../../Assets/Images/FastRetailing/GU.png';
import fastRetailingPLSTImg from '../../../../Assets/Images/FastRetailing/PLST.png';
import fastRetailingGU2Img from '../../../../Assets/Images/FastRetailing/GU2.png';


const FastRetailingPhoneUQ = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top: 90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const FastRetailingPhoneGU = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top:45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const FastRetailingPhonePLST = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
top:75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const FastRetailingPhoneGU2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
top: 55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class FastRetailingImages extends Component {
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
        <FastRetailingPhonePLST src={fastRetailingPLSTImg} scroll={scrollPercent} alt="fastRetailingPLST" />
        <FastRetailingPhoneGU2 src={fastRetailingGU2Img} scroll={scrollPercent} alt="fastRetailingGU2" />
        <FastRetailingPhoneUQ src={fastRetailingUQImg} scroll={scrollPercent} alt="fastRetailingUQ" />
        <FastRetailingPhoneGU src={fastRetailingGUImg} scroll={scrollPercent} alt="fastRetailingGU" />
      </React.Fragment>
    );
  }
}

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;

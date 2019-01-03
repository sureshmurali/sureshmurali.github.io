import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dots from '../../../../Assets/Images/Showcase/Dots.png';
import bubbles from '../../../../Assets/Images/Showcase/Bubble.png';
import paths from '../../../../Assets/Images/Showcase/Paths.png';
import bigBubble from '../../../../Assets/Images/Showcase/BigBubble.png';


const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 30}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -240vh;
left:0vw;
/* border: 1px dashed red; */
height: 50vh; 
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 23}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-225vh;
right: 0vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.6px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.7)`,
  }),
})`
bottom:-125vh;
left:-4vw;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.8px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
bottom:-80vh;
right: 1vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(1.2px);
`;

class VoistrapWebImages extends Component {
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
        <Paths src={paths} scroll={scrollPercent} alt="paths" />
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="bigBubble" />
        <Bubbles src={bubbles} scroll={scrollPercent} alt="bubbles" />
        <Dots src={dots} scroll={scrollPercent} alt="dots" />
      </React.Fragment>
    );
  }
}

VoistrapWebImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages;

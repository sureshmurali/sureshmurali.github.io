import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dots from '../../../../Assets/Images/Showcase/Dots.png';
import bubbles from '../../../../Assets/Images/Showcase/Bubble.png';
import paths from '../../../../Assets/Images/Showcase/Paths.png';
import bigBubble from '../../../../Assets/Images/Showcase/BigBubble.png';


const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 36}%) scale(0.99)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -250vh;
left:2vw;
transform-origin: left center;
/* border: 1px dashed red; */
width: 80vw; 
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 25}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-210vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
width: 80vw;
filter: blur(0.2px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
bottom:-160vh;
left:2vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
filter: blur(0.5px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.7)`,
  }),
})`
bottom:-120vh;
right: 2vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
filter: blur(0.8px);
`;

const VoistrapWebImages = ({ scrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage for this specific section
  let adjustedScrollPercent = scrollPercent;
  
  // Calculate how much to offset the scroll percentage based on this component's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  
  // Apply the offset to get the scroll percentage relative to this component
  adjustedScrollPercent -= scrollOffsetInPercent;
  
  return (
    <React.Fragment>
      <Paths src={paths} scroll={adjustedScrollPercent} alt="paths" />
      <BigBubble src={bigBubble} scroll={adjustedScrollPercent} alt="bigBubble" />
      <Bubbles src={bubbles} scroll={adjustedScrollPercent} alt="bubbles" />
      <Dots src={dots} scroll={adjustedScrollPercent} alt="dots" />
    </React.Fragment>
  );
}

VoistrapWebImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages;

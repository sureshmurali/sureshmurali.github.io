import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cmgOrNotTabletImg from '../../../../Assets/Images/ComingOrNot/Tablet.png';
import cmgOrNotIphoneImg from '../../../../Assets/Images/ComingOrNot/Iphone.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -320vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 100vh; 
mix-blend-mode: difference;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -180vh;
transform-origin: right center;
right:2vw;
/* border: 1px dashed red; */
height: 100vh; 
mix-blend-mode: difference;
`;

const ComingOrNotImages = ({ scrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage for this specific section
  let adjustedScrollPercent = scrollPercent;
  
  // Calculate how much to offset the scroll percentage based on this component's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  
  // Apply the offset to get the scroll percentage relative to this component
  adjustedScrollPercent -= scrollOffsetInPercent;
  
  return (
    <>
      <Tablet src={cmgOrNotTabletImg} scroll={adjustedScrollPercent} alt="cmgOrNotTablet" />
      <Iphone src={cmgOrNotIphoneImg} scroll={adjustedScrollPercent} alt="cmgOrNotIphone" />
    </>
  );
}

ComingOrNotImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ComingOrNotImages;

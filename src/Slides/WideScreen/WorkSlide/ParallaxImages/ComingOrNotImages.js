import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cmgOrNotTabletImg from '../../../../Assets/Images/ComingOrNot/Tablet.png';
import cmgOrNotIphoneImg from '../../../../Assets/Images/ComingOrNot/Iphone.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:0vw;
/* border: 1px dashed red; */
height: 80vh; 
filter: blur(0.6px);
`;

const ComingOrNotImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;

  return (
    <React.Fragment>
      <Tablet src={cmgOrNotTabletImg} scroll={scrollPercent} alt="cmgOrNotTablet" />
      <Iphone src={cmgOrNotIphoneImg} scroll={scrollPercent} alt="cmgOrNotIphone" />
    </React.Fragment>
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

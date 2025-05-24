import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import eyepTabletImg from '../../../../Assets/Images/Eyep/Tablet.png';
import eyepIphoneImg from '../../../../Assets/Images/Eyep/Iphone.png';


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

const EyepImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;

  return (
    <React.Fragment>
      <Tablet src={eyepTabletImg} scroll={scrollPercent} alt="eyepTablet" />
      <Iphone src={eyepIphoneImg} scroll={scrollPercent} alt="eyepIphone" />
    </React.Fragment>
  );
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;

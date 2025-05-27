import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import voistrapHomeImg from '../../../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../../../Assets/Images/Voistrap/Meetings.png';
import voistrapPeopleImg from '../../../../Assets/Images/Voistrap/People.png';
import voistrapScoreImg from '../../../../Assets/Images/Voistrap/Score.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
mix-blend-mode: difference;
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
mix-blend-mode: difference;
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
mix-blend-mode: difference;
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
mix-blend-mode: difference;
`;

const VoistrapImages = ({ scrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage for this specific section
  let adjustedScrollPercent = scrollPercent;
  
  // Calculate how much to offset the scroll percentage based on this component's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  
  // Apply the offset to get the scroll percentage relative to this component
  adjustedScrollPercent -= scrollOffsetInPercent;
  
  return (
    <>
      <VoistrapPhonePeople src={voistrapPeopleImg} scroll={adjustedScrollPercent} alt="voistrapPeople" />
      <VoistrapPhoneScore src={voistrapScoreImg} scroll={adjustedScrollPercent} alt="voistrapScore" />
      <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={adjustedScrollPercent} alt="voistrapMeetings" />
      <VoistrapPhoneHome src={voistrapHomeImg} scroll={adjustedScrollPercent} alt="voistrapHome" />
    </>
  );
};

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;

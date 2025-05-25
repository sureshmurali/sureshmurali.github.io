import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import voistrapHomeImg from '../../../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../../../Assets/Images/Voistrap/Meetings.png';
import voistrapPeopleImg from '../../../../Assets/Images/Voistrap/People.png';
import voistrapScoreImg from '../../../../Assets/Images/Voistrap/Score.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 18}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -200vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-120vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 7}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-135vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-95vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

const VoistrapImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;
  
  return (
    <>
      <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollPercent} alt="voistrapPeople" />
      <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollPercent} alt="voistrapScore" />
      <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollPercent} alt="voistrapMeetings" />
      <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollPercent} alt="voistrapHome" />
    </>
  );
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;

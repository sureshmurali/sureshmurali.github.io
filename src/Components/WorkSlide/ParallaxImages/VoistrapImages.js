import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import voistrapHomeImg from '../../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../../Assets/Images/Voistrap/Meetings.png';
import voistrapPeopleImg from '../../../Assets/Images/Voistrap/People.png';
import voistrapScoreImg from '../../../Assets/Images/Voistrap/Score.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translateY(-${(scroll - 500) / 15}%)`,
  }),
})`
position: absolute;
top: 40vh;
left:0vw;
/* border: 1px dashed red; */
max-height: 80vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translateY(-${(scroll - 500) / 20}%) scale(0.87)`,
  }),
})`
position: absolute;
top: 45vh;
right: 2vw;
/* border: 1px dashed red; */
max-height: 80vh;
filter: blur(0.7px);
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translateY(-${(scroll - 500) / 50}%) scale(0.5)`,
  }),
})`
bottom:0vh;
left: 2vw;
position: absolute;
/* border: 1px dashed red; */
max-height: 80vh;
filter: blur(2px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translateY(-${(scroll - 500) / 40}%) scale(0.8)`,
  }),
})`
bottom:-30vh;
left:20vw;
position: absolute;
/* border: 1px dashed red; */
max-height: 80vh;
filter: blur(1px);
`;

class VoistrapImages extends Component {
  render() {
    const { scrollDistance } = this.props;
    return (
      <React.Fragment>
        <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollDistance} alt="voistrapPeople" />
        <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollDistance} alt="voistrapScore" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollDistance} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollDistance} alt="voistrapHome" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  scrollDistance: PropTypes.number.isRequired,
};

export default VoistrapImages;

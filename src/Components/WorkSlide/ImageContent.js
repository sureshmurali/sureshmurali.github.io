import React, { Component } from 'react';
import styled from 'styled-components';
import voistrapHomeImg from '../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../Assets/Images/Voistrap/Meetings.png';
import voistrapPeopleImg from '../../Assets/Images/Voistrap/People.png';
import voistrapScoreImg from '../../Assets/Images/Voistrap/Score.png';
import teslaImg from '../../Assets/Images/Tesla.png';
import whatsMyFoodImg from '../../Assets/Images/WhatsMyFood.png';
import cmgRNotImg from '../../Assets/Images/CmgRNot.png';

const ImageContainer = styled.div`
/* border: 1px dashed black; */
margin-left:50vw;
width:50%;
height:1100vh;
display: flex;
flex-flow: column nowrap;
`;

const PhoneImage = styled.img`
/* border: 1px dashed red; */
max-height: 90vh;
`;

const ImageBox = styled.div`
margin-top:50vh;
/* border: 1px dashed green; */
height: 150vh;
position: relative;
`;

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

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDistance: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ vh: Math.round(window.innerHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    this.setState({ scrollDistance: sd });
  }

  ParallaxBasedOnScroll() {
    const { scrollDistance } = this.state;
    return (
      <React.Fragment>
        <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollDistance} alt="voistrapPeople" />
        <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollDistance} alt="voistrapScore" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollDistance} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollDistance} alt="voistrapHome" />

      </React.Fragment>
    );
  }

  render() {
    return (
      <ImageContainer>
        <ImageBox>
          {this.ParallaxBasedOnScroll()}
        </ImageBox>
        <ImageBox>
          <PhoneImage src={cmgRNotImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={whatsMyFoodImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={teslaImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
      </ImageContainer>
    );
  }
}

export default ImageContent;

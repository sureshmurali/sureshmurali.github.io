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
border: 1px dashed green;
height: 150vh;
position: relative;
`;

const VoistrapPhoneHome = styled.img`
position: absolute;
top: 40vh;
left:10vh;
/* border: 1px dashed red; */
transform: translateY(-${props => (props.scroll) / 20}%);
max-height: 80vh; 
`;

const VoistrapPhoneMeetings = styled.img`
position: absolute;
top: 20vw;
right: 10vw;
/* border: 1px dashed red; */
max-height: 80vh;
transform: translateY(-${props => (props.scroll - 500) / 50}%) scale(0.8);
/* filter: blur(0.8px); */
`;

const VoistrapPhonePeople = styled.img`
bottom:10vh;
left: 10vw;
position: absolute;
/* border: 1px dashed red; */
max-height: 80vh;
transform: translateY(-${props => (props.scroll - 500) / 70}%) scale(0.7);
/* transform: translateY(-${props => (props.scroll - 500) / 15}%); */
/* filter: blur(0.8px); */
`;

const VoistrapPhoneScore = styled.img`
bottom:-50vh;
left:30vw;
position: absolute;
/* border: 1px dashed red; */
max-height: 80vh;
transform: translateY(-${props => (props.scroll - 500) / 25}%) scale(0.9);
/* filter: blur(0.8px); */
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
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollDistance} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollDistance} alt="voistrapHome" />
        <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollDistance} alt="voistrapScore" />
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

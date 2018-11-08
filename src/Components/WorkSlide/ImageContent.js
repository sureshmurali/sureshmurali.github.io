import React, { Component } from 'react';
import styled from 'styled-components';
import voistrapHomeImg from '../../Assets/Images/Voistrap/Home.png';
import voistrapMeetingsImg from '../../Assets/Images/Voistrap/Meetings.png';

const ImageContainer = styled.div`
/* border: 1px dashed black; */
margin-left:50vw;
width:50%;
height:1200vh;
display: flex;
flex-flow: column nowrap;
`;

const PhoneImage = styled.img`
/* border: 1px dashed red; */
max-height: 90vh;
`;

const ImageBox = styled.div`
margin-top:98vh;
/* border: 1px dashed green; */
margin-bottom:2vh;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;


class ImageContent extends Component {
  render() {
    return (
      <ImageContainer>
        <ImageBox>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapMeetingsImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
      </ImageContainer>
    );
  }
}

export default ImageContent;

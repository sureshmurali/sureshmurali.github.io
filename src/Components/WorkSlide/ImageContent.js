import React, { Component } from 'react';
import styled from 'styled-components';
import voistrapImg from '../../Assets/Images/Voistrap/VoistrapPhone.png';

const ImageContainer = styled.div`
/* border: 1px dashed black; */
margin-left:50vw;
width:50%;
height:2000vh;
display: flex;
flex-flow: column nowrap;
`;

const PhoneImage = styled.img`
/* border: 1px dashed red; */
max-height: 90vh;
`;

const ImageBox = styled.div`
margin-top:98vh;
border: 1px dashed green;
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
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
      </ImageContainer>
    );
  }
}

export default ImageContent;

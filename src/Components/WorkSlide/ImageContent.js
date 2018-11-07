import React, { Component } from 'react';
import styled from 'styled-components';
import voistrapImg from '../../Assets/Images/Voistrap/VoistrapPhone.png';

const ImageContainer = styled.div`
border: 1px dashed black;
margin-left:50vw;
width:50%;
height:500vh;
display: flex;
flex-flow: column nowrap;
`;

const WorkImage = styled.img`
border: 1px dashed red;
`;

const ImageBox = styled.div`
border: 1px dashed green;
`;

class ImageContent extends Component {
  render() {
    return (
      <ImageContainer>
        <ImageBox>
          <WorkImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <WorkImage src={voistrapImg} alt="voistrapMap" />
        </ImageBox>

      </ImageContainer>
    );
  }
}

export default ImageContent;

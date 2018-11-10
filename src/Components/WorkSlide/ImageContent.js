import React, { Component } from 'react';
import styled from 'styled-components';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import voistrapHomeImg from '../../Assets/Images/Voistrap/Home.png';
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

  render() {
    const { scrollDistance } = this.state;
    return (
      <ImageContainer>
        <ImageBox>
          <VoistrapImages scrollDistance={scrollDistance} />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={whatsMyFoodImg} alt="voistrapMap" />
        </ImageBox>
        <ImageBox>
          <PhoneImage src={cmgRNotImg} alt="voistrapMap" />
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

import React, { Component } from 'react';
import styled from 'styled-components';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import voistrapHomeImg from '../../Assets/Images/Voistrap/Home.png';
import teslaImg from '../../Assets/Images/Tesla.png';
import cmgRNotImg from '../../Assets/Images/CmgRNot.png';
import WhatsMyFoodImages from './ParallaxImages/WhatsMyFoodImages';

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

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollDistance: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ screenHeight: Math.round(window.innerHeight) });
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
    const { scrollDistance, screenHeight } = this.state;
    return (
      <ImageContainer>
        <ImageBox>
          <VoistrapImages scrollDistance={scrollDistance} screenHeight={screenHeight} />
        </ImageBox>
        <ImageBox>
          <WhatsMyFoodImages scrollDistance={scrollDistance} screenHeight={screenHeight} />
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

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import voistrapHomeImg from '../../Assets/Images/Voistrap/Home.png';
import WhatsMyFoodImages from './ParallaxImages/WhatsMyFoodImages';
import ComingOrNotImages from './ParallaxImages/ComingOrNotImages';
import TeslaImages from './ParallaxImages/TeslaImages';

const ImageContainer = styled.div`
/* border: 1px dashed black; */
margin-left:50%;
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
/* border: 2px dashed green; */
margin-top:40vh;
height: 100vh;
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
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    return (
      <ImageContainer>
        <ImageBox height={boxHeight}>
          <VoistrapImages
            boxHeight={boxHeight}
            index={1}
            scrollDistance={scrollDistance}
            screenHeight={screenHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <WhatsMyFoodImages
            boxHeight={boxHeight}
            index={2}
            scrollDistance={scrollDistance}
            screenHeight={screenHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <ComingOrNotImages
            boxHeight={boxHeight}
            index={3}
            scrollDistance={scrollDistance}
            screenHeight={screenHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <TeslaImages
            boxHeight={boxHeight}
            index={4}
            scrollDistance={scrollDistance}
            screenHeight={screenHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <PhoneImage src={voistrapHomeImg} alt="voistrapMap" />
        </ImageBox>
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;

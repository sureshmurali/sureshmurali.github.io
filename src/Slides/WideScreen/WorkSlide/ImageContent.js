import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import FastRetailingImages from './ParallaxImages/FastRetailingImages';
import WhatsMyFoodImages from './ParallaxImages/WhatsMyFoodImages';
import EyepImages from './ParallaxImages/EyepImages';
import TeslaImages from './ParallaxImages/TeslaImages';
import LashicImages from './ParallaxImages/LashicImages';

const ImageContainer = styled.div`
  /** border: 10px dashed black; */
  margin-left: 50%;
  width: 50%;
  height: 925vh;
  display: flex;
  flex-flow: column nowrap;
`;

const ImageBox = styled.div`
  /** outline: 5px dashed green; */
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`;

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportHeight: 0,
      documentHeight: 0,
      scrollPercent: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Get document dimensions once on mount
    const documentHeight = Math.round(window.document.documentElement.scrollHeight);
    const viewportHeight = Math.round(window.document.documentElement.clientHeight);
    
    this.setState({ 
      documentHeight,
      viewportHeight
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { body, documentElement } = window.document;
    
    // Current scroll position (cross-browser compatible)
    const scrollPosition = Math.max(body.scrollTop, documentElement.scrollTop);
    
    // Calculate scroll percentage (0-100)
    const scrollableDistance = documentElement.scrollHeight - documentElement.clientHeight;
    const currentScrollPercent = (scrollPosition / scrollableDistance * 100);
    
    // Define valid scroll range for this component
    const minScrollLimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxScrollLimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    
    // Only update state if scroll percentage is within our range of interest
    if (currentScrollPercent >= minScrollLimit && currentScrollPercent <= maxScrollLimit) {
      this.setState({ scrollPercent: currentScrollPercent });
    }
  }

  render() {
    const { scrollPercent, documentHeight, viewportHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    
    // Project image components in order
    const projectImages = [
      { Component: FastRetailingImages, index: 1 },
      { Component: LashicImages, index: 2 },
      { Component: EyepImages, index: 3 },
      { Component: TeslaImages, index: 4 },
      { Component: WhatsMyFoodImages, index: 5 },
      { Component: VoistrapImages, index: 6 }
    ];
    
    return (
      <ImageContainer>
        {projectImages.map(({ Component, index }) => (
          <ImageBox key={index} height={boxHeight}>
            <Component
              boxHeight={boxHeight}
              index={index}
              scrollPercent={scrollPercent}
              screenHeight={viewportHeight}
              scrollHeight={documentHeight}
            />
          </ImageBox>
        ))}
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;

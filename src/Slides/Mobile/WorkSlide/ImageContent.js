import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';
import VoistrapImages from './ParallaxImages/VoistrapImages';
import FastRetailingImages from './ParallaxImages/FastRetailingImages';
import WhatsMyFoodImages from './ParallaxImages/WhatsMyFoodImages';
import LashicImages from './ParallaxImages/LashicImages';
import TeslaImages from './ParallaxImages/TeslaImages';
import EyepImages from './ParallaxImages/EyepImages';

const ImageContainer = styled.div`
/* border: 0.1px dashed black; */
width:100%;
height:900vh;
margin-bottom:30vh;
display: flex;
flex-flow: column nowrap;
`;

const ImageBox = styled.div`
/* outline: 0.1px dashed green; */
margin-top:30vh;
height: 100vh;
position: relative;
`;

const ImageContent = ({ pageSplitTimes }) => {
  // State hooks
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  // Handle scroll event with useCallback for better performance
  const handleScroll = useCallback(() => {
    const { body, documentElement } = window.document;
    
    // Calculate scroll position as a percentage
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    const scrollPercentage = (scrollDistance / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    
    // Define scroll boundaries for animation
    const minScrollLimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
    const maxScrollLimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    
    // Only update state if scroll percentage is within limits
    if (scrollPercentage >= minScrollLimit && scrollPercentage <= maxScrollLimit) {
      setScrollPercent(scrollPercentage);
    }
  }, []);
  
  // Setup event listeners and calculate initial dimensions
  useEffect(() => {
    // Calculate viewport height adjustment for mobile browsers
    const vhDiff = vhCheck().offset;
    
    // Set initial dimensions
    setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
    setScreenHeight(Math.round(window.document.documentElement.clientHeight + vhDiff));
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Log dimensions for debugging
    console.log('scrollHeight', Math.round(window.document.documentElement.scrollHeight));
    console.log('screenHeight', Math.round(window.document.documentElement.clientHeight));
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  // Calculate box height based on pageSplitTimes prop
  const boxHeight = pageSplitTimes * 100;
  
  return (
      <ImageContainer>
        <ImageBox height={boxHeight}>
          <FastRetailingImages
            boxHeight={boxHeight}
            index={1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <LashicImages
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <EyepImages
            boxHeight={boxHeight}
            index={3}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <TeslaImages
            boxHeight={boxHeight}
            index={4}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <WhatsMyFoodImages
            boxHeight={boxHeight}
            index={5}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <VoistrapImages
            boxHeight={boxHeight}
            index={6}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
      </ImageContainer>
  );
};

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;

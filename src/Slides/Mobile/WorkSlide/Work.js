import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

// Project data array - extracted outside the component for cleaner code
const workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'FR Design system',
        projectDesc: 'Multi brand e-commerce design system for websites and native mobile applications.',
        projectType: 'DESIGN SYSTEM',
        roles: ['Design system lead', 'Technical PDM'],
      },
      {
        number: '02',
        projectName: 'LASHIC',
        projectDesc: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
        projectType: 'APP SUITE',
        roles: ['Design lead'],
      },
      {
        number: '03',
        projectName: 'Eyep',
        projectDesc: 'Single purpose website to show your IP address and location.',
        projectType: 'WEB APP',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '04',
        projectName: 'Tesla app',
        projectDesc: 'iOS app concept to control Tesla cars remotely.',
        projectType: 'iOS APP CONCEPT',
        roles: ['UI Designer'],
      },
      {
        number: '05',
        projectName: 'WhatsMyFood',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat.',
        projectType: 'iOS APP',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '06',
        projectName: 'Voistrap',
        projectDesc: 'Web app project to give workplace insights using indoor localization, voice and schedule.',
        projectType: 'iOS APP',
        roles: ['UI Designer', 'Full Stack Developer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];

const Work = () => {
  // State hooks
  const [slideHeight, setSlideHeight] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollDirectionDown, setScrollDirectionDown] = useState(true);
  
  // Constants
  const slideHeightMultiplier = 1.3; // Each slide is 130% of viewport height
  
  // Handle scroll event with useCallback for better performance
  const handleScroll = useCallback((event) => {
    const { body, documentElement } = event.srcElement;
    
    // Get scroll position (cross-browser compatible)
    const currentScrollPosition = Math.max(body.scrollTop, documentElement.scrollTop);
    
    // Track scroll direction
    if (currentScrollPosition > lastScrollPosition) {
      setScrollDirectionDown(true);
    } else {
      setScrollDirectionDown(false);
    }
    
    // Store current scroll position for next comparison
    setLastScrollPosition(currentScrollPosition);
    
    // Calculate current slide index based on scroll position
    const newSlideIndex = Math.floor(currentScrollPosition / slideHeight);
    
    // Update slide if we're moving to a different valid slide
    const isNewSlide = newSlideIndex !== slideNumber;
    const isValidForward = slideNumber < workDetails.length - 1;
    const isValidBackward = slideNumber === workDetails.length - 1 && newSlideIndex < slideNumber;
    
    if (isNewSlide && (isValidForward || isValidBackward)) {
      setSlideNumber(newSlideIndex);
    }
  }, [slideHeight, slideNumber, lastScrollPosition]);
  
  // Setup event listeners and calculate initial slide height
  useEffect(() => {
    // Calculate slide height (130% of viewport height) with vh-check for mobile browsers
    const vhDiff = vhCheck().offset;
    const calculatedHeight = Math.round(
      (window.document.documentElement.clientHeight + vhDiff) * slideHeightMultiplier
    );
    setSlideHeight(calculatedHeight);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  // No need for a separate effect to trigger animations
  // The TextContent component will now trigger animations based on prop changes
  
  // Render the current slide content
  const renderCurrentSlide = () => {
    const currentProject = workDetails[slideNumber];
    
    // Pass refreshToggle to trigger animations only when slide changes
    return (
      <TextContent
        number={currentProject.number}
        projectName={currentProject.projectName}
        projectDesc={currentProject.projectDesc}
        projectType={currentProject.projectType}
        roles={currentProject.roles}
        // No need for refreshToggle prop as TextContent now animates based on prop changes
      />
    );
  };
  
  return (
    <Container>
      {renderCurrentSlide()}
      <ImageContent pageSplitTimes={slideHeightMultiplier} />
    </Container>
  );
};

export default Work;

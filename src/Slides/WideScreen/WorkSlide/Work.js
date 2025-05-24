import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 10px dashed red;*/
`;

// Project data array - extracted outside the component for cleaner code
const workDetails = [
  {
    number: '',
    projectName: '',
    projectDesc: '',
    projectType: '',
    roles: ['']
  },
  {
    number: '01',
    projectName: 'FR Design system',
    projectDesc: 'Multi brand e-commerce design system for websites and native mobile applications.',
    projectType: 'DESIGN SYSTEM',
    roles: ['Design system lead', 'Technical PDM']
  },
  {
    number: '02',
    projectName: 'LASHIC',
    projectDesc: "Mobile app and websites for senior citizen facility's caregivers, service managers and admins.",
    projectType: 'APP SUITE',
    roles: ['Design lead']
  },
  {
    number: '03',
    projectName: 'Eyep',
    projectDesc: 'Single purpose website to show your IP address and location.',
    projectType: 'WEB APP',
    roles: ['UI Designer', 'Front-end Developer']
  },
  {
    number: '04',
    projectName: 'Tesla app',
    projectDesc: 'iOS app concept to control Tesla cars remotely.',
    projectType: 'iOS APP CONCEPT',
    roles: ['UI Designer']
  },
  {
    number: '05',
    projectName: 'WhatsMyFood',
    projectDesc: 'iOS app to remember your fav food at each restaurant you eat.',
    projectType: 'iOS APP',
    roles: ['UI Designer', 'Front-end Developer']
  },
  {
    number: '06',
    projectName: 'Voistrap',
    projectDesc: 'Web app project to give workplace insights using indoor localization, voice and schedule.',
    projectType: 'iOS APP',
    roles: ['UI Designer', 'Full Stack Developer']
  },
  {
    number: '',
    projectName: '',
    projectDesc: '',
    projectType: '',
    roles: ['']
  }
];

const Work = () => {
  // State hooks
  const [slideHeight, setSlideHeight] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [refreshToggle, setRefreshToggle] = useState(false);
  
  // Constants
  const slideHeightMultiplier = 1.4; // Each slide is 140% of viewport height
  
  // Handle scroll event with useCallback for better performance
  const handleScroll = useCallback((event) => {
    const { body, documentElement } = event.srcElement;
    
    // Get scroll position (cross-browser compatible)
    const currentScrollPosition = Math.max(body.scrollTop, documentElement.scrollTop);
    
    // Track scroll position
    setLastScrollPosition(currentScrollPosition);
    
    // Calculate current slide index based on scroll position
    const newSlideIndex = Math.floor(currentScrollPosition / slideHeight);
    
    // Update slide if we're moving to a different valid slide
    const isNewSlide = newSlideIndex !== slideNumber;
    const isValidForward = slideNumber < workDetails.length - 1;
    const isValidBackward = slideNumber === workDetails.length - 1 && newSlideIndex < slideNumber;
    
    if (isNewSlide && (isValidForward || isValidBackward)) {
      setSlideNumber(newSlideIndex);
      // Animation will be triggered in the useEffect that watches slideNumber
    }
  }, [slideHeight, slideNumber]);
  
  // Setup event listeners and calculate initial slide height
  useEffect(() => {
    // Calculate slide height (140% of viewport height)
    const calculatedHeight = Math.round(
      window.document.documentElement.clientHeight * slideHeightMultiplier
    );
    setSlideHeight(calculatedHeight);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Only re-run if handleScroll changes
  
  // Effect to trigger animation only when slideNumber changes
  useEffect(() => {
    // Only toggle refreshToggle when slideNumber changes (not on initial mount)
    if (slideNumber > 0) {
      setRefreshToggle(prevState => !prevState);
    }
  }, [slideNumber]); // Only run when slideNumber changes
  
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
        refreshToggle={refreshToggle} // Triggers animations only when slide changes
      />
    );
  };
  
  return (
    <Container>
      {renderCurrentSlide()}
      <ImageContent pageSplitTimes={slideHeightMultiplier} />
    </Container>
  );
}

export default Work;

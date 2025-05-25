/**
 * Work Component - Displays work projects with scroll-based navigation
 * 
 * This component handles:
 * 1. Scroll-based navigation between work projects
 * 2. Animation triggers for project content
 * 3. Rendering the appropriate project details based on scroll position
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

// Components
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

/**
 * Work component - Displays work projects with scroll-based navigation
 */
const Work = () => {
  // Refs for animation elements
  const containerRef = useRef(null);
  
  // State hooks
  const [slideHeight, setSlideHeight] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [refreshToggle, setRefreshToggle] = useState(false);
  
  // Constants
  const slideHeightMultiplier = 1.4; // Each slide is 140% of viewport height
  
  /**
   * Handle scroll event with useCallback for better performance
   * Uses GSAP for smoother animation transitions
   */
  const handleScroll = useCallback(() => {
    // Get scroll information
    const { scrollTop, clientHeight } = document.documentElement;
    
    // Calculate current slide index based on scroll position
    const newSlideIndex = Math.floor(scrollTop / slideHeight);
    
    // Update slide if we're moving to a different valid slide
    const isNewSlide = newSlideIndex !== slideNumber;
    const isValidForward = slideNumber < workDetails.length - 1;
    const isValidBackward = slideNumber === workDetails.length - 1 && newSlideIndex < slideNumber;
    
    if (isNewSlide && (isValidForward || isValidBackward)) {
      // Update slide number state
      setSlideNumber(newSlideIndex);
    }
  }, [slideHeight, slideNumber]);
  
  /**
   * Setup event listeners and calculate initial slide height
   */
  useEffect(() => {
    // Calculate slide height (140% of viewport height)
    const calculatedHeight = Math.round(
      window.document.documentElement.clientHeight * slideHeightMultiplier
    );
    setSlideHeight(calculatedHeight);
    
    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [handleScroll]); // Only re-run if handleScroll changes
  
  /**
   * Effect to trigger animation only when slideNumber changes
   * This toggles the refreshToggle state which is passed to TextContent
   * to trigger animations when the slide changes
   */
  useEffect(() => {
    // Only toggle refreshToggle when slideNumber changes (not on initial mount)
    if (slideNumber > 0) {
      setRefreshToggle(prevState => !prevState);
    }
  }, [slideNumber]); // Only run when slideNumber changes
  
  /**
   * Render the current slide content with animation triggers
   * Uses GSAP animations for smooth transitions between slides
   */
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
    <Container ref={containerRef}>
      {renderCurrentSlide()}
      <ImageContent pageSplitTimes={slideHeightMultiplier} />
    </Container>
  );
}

export default Work;

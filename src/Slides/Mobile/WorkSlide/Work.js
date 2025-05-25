/**
 * Work Component - Mobile version
 * 
 * This component handles:
 * 1. Scroll-based slide navigation
 * 2. Triggering animations when slides change
 * 3. Rendering the appropriate content for each slide
 */

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
  const [refreshToggle, setRefreshToggle] = useState(false); // For triggering animations
  
  // Constants
  const slideHeightMultiplier = 1.3; // Each slide is 130% of viewport height
  
  // Handle scroll event with useCallback for better performance
  const handleScroll = useCallback((event) => {
    // Safety check for event.srcElement
    if (!event || !event.srcElement) {
      console.error('Invalid scroll event or missing srcElement');
      return;
    }
    
    const { body, documentElement } = event.srcElement;
    
    // Get scroll position (cross-browser compatible)
    const currentScrollPosition = Math.max(
      body?.scrollTop || 0, 
      documentElement?.scrollTop || 0
    );
    
    // Track scroll direction
    if (currentScrollPosition > lastScrollPosition) {
      setScrollDirectionDown(true);
    } else {
      setScrollDirectionDown(false);
    }
    
    // Store current scroll position for next comparison
    setLastScrollPosition(currentScrollPosition);
    
    // Calculate current slide index based on scroll position
    // Ensure slideHeight is not zero to avoid division by zero
    const newSlideIndex = slideHeight > 0 ? 
      Math.floor(currentScrollPosition / slideHeight) : 0;
    
    // Ensure newSlideIndex is within valid bounds
    const validSlideIndex = Math.min(
      Math.max(0, newSlideIndex),
      workDetails.length - 1
    );
    
    // Update slide if we're moving to a different valid slide
    const isNewSlide = validSlideIndex !== slideNumber;
    const isValidForward = slideNumber < workDetails.length - 1;
    const isValidBackward = slideNumber > 0;
    
    if (isNewSlide && (isValidForward || isValidBackward)) {
      setSlideNumber(validSlideIndex);
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
    
    console.log(`Slide height set to: ${calculatedHeight}px`);
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll handling to set the correct slide
    handleScroll({ srcElement: document });
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  // Add effect to trigger animations when slide changes
  useEffect(() => {
    // Make sure slideNumber is valid before triggering animations
    if (slideNumber >= 0 && slideNumber < workDetails.length) {
      // Toggle the refreshToggle state to trigger animations in TextContent
      setRefreshToggle(prev => !prev);
    }
  }, [slideNumber]); // Only run when slideNumber changes
  
  // Render the current slide content
  const renderCurrentSlide = () => {
    // Make sure slideNumber is valid and within bounds
    const safeSlideNumber = Math.min(Math.max(0, slideNumber), workDetails.length - 1);
    const currentProject = workDetails[safeSlideNumber];
    
    // Safety check to ensure currentProject is defined
    if (!currentProject) {
      console.error(`Project at index ${safeSlideNumber} is undefined`);
      return null;
    }
    
    // Pass refreshToggle to trigger animations when slide changes
    return (
      <TextContent
        number={currentProject.number || ''}
        projectName={currentProject.projectName || ''}
        projectDesc={currentProject.projectDesc || ''}
        projectType={currentProject.projectType || ''}
        roles={currentProject.roles || ['']}
        refreshToggle={refreshToggle} // Pass refreshToggle to trigger GSAP animations
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

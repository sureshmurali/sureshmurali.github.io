/**
 * LashicImages Component - Displays project images with parallax scrolling effect
 */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap'; // GreenSock Animation Platform

// Images
import alertImg from '../../../../Assets/Images/Lashic/Alert.png';
import taskImg from '../../../../Assets/Images/Lashic/Task.png';
import customersImg from '../../../../Assets/Images/Lashic/Customers.png';
import customerDetailImg from '../../../../Assets/Images/Lashic/CustomerDetail.png';

/**
 * Styled components for the device images
 * GSAP will handle the animations instead of styled-components
 */
const Task = styled.img`
  position: absolute;
  bottom: -90vh;
  left: 0vw;
  height: 80vh;
`;

const Alert = styled.img`
  position: absolute;
  bottom: -45vh;
  right: 2vw;
  height: 80vh;
  filter: blur(0.6px);
  transform: scale(0.9); /* Initial scale */
`;

const CustomerDetail = styled.img`
  position: absolute;
  bottom: -75vh;
  left: 2vw;
  height: 80vh;
  filter: blur(0.8px);
  transform: scale(0.7); /* Initial scale */
`;

const Customers = styled.img`
  position: absolute;
  bottom: -55vh;
  right: 5vw;
  height: 80vh;
  filter: blur(1.2px);
  transform: scale(0.6); /* Initial scale */
`;

/**
 * LashicImages Component - Displays project images with parallax scrolling effect
 * Uses GSAP for smoother animations instead of CSS transitions
 */
const LashicImages = ({ scrollPercent: initialScrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Create refs for the elements we want to animate
  const taskRef = useRef(null);
  const alertRef = useRef(null);
  const customerDetailRef = useRef(null);
  const customersRef = useRef(null);
  
  // Calculate the adjusted scroll percentage based on the image's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  const scrollPercent = initialScrollPercent - scrollOffsetInPercent;
  
  // Animation multipliers - same as the original values
  const TASK_SCROLL_MULTIPLIER = 15;
  const ALERT_SCROLL_MULTIPLIER = 8;
  const CUSTOMER_DETAIL_SCROLL_MULTIPLIER = 5;
  const CUSTOMERS_SCROLL_MULTIPLIER = 2;
  
  // Use GSAP to animate the elements based on scroll position
  useEffect(() => {
    // Only run animations if all refs are available
    if (!taskRef.current || !alertRef.current || !customerDetailRef.current || !customersRef.current) return;
    
    // Animate Task with GSAP
    gsap.to(taskRef.current, {
      y: -(scrollPercent * TASK_SCROLL_MULTIPLIER) + '%',
      duration: 0.2, // Same as the original transition duration
      ease: 'power1.out', // Similar to ease-out
      overwrite: 'auto' // Prevents animation queue buildup during rapid scrolling
    });
    
    // Animate Alert with GSAP
    gsap.to(alertRef.current, {
      y: -(scrollPercent * ALERT_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
    
    // Animate CustomerDetail with GSAP
    gsap.to(customerDetailRef.current, {
      y: -(scrollPercent * CUSTOMER_DETAIL_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
    
    // Animate Customers with GSAP
    gsap.to(customersRef.current, {
      y: -(scrollPercent * CUSTOMERS_SCROLL_MULTIPLIER) + '%',
      duration: 0.2,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  }, [scrollPercent]); // Only re-run when scrollPercent changes

  return (
    <React.Fragment>
      <CustomerDetail ref={customerDetailRef} src={customerDetailImg} alt="customerDetails" />
      <Customers ref={customersRef} src={customersImg} alt="customers" />
      <Alert ref={alertRef} src={alertImg} alt="Alert" />
      <Task ref={taskRef} src={taskImg} alt="Task" />
    </React.Fragment>
  );
}

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;

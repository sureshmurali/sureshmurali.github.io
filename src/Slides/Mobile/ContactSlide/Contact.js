/**
 * Contact Component - Mobile version
 * 
 * This component handles:
 * 1. Displaying the contact section with staggered animations for social icons
 * 2. Responsive sizing based on screen size
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'; // GreenSock Animation Platform
import styled from 'styled-components';
import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;

const ContactTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${device.laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;

const Contact = () => {
  // Create refs for animation targets
  const titleRef = useRef(null);
  const iconsContainerRef = useRef(null);
  const socialIcons = useRef([]);
  
  // Set up animations when component mounts
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Get all social icons for staggered animation
    const iconElements = iconsContainerRef.current.querySelectorAll('div');
    socialIcons.current = iconElements;
    
    // Animate the title with a slide in from left
    tl.fromTo(titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
    // Animate each social icon with a staggered fade in
    .fromTo(socialIcons.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1 // Stagger each icon's animation
      },
      "-=0.4" // Start slightly before the title animation finishes
    );
    
    // Cleanup function
    return () => {
      tl.kill(); // Kill the timeline if component unmounts
    };
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <Container>
      <ContactTitle ref={titleRef}>CONTACT</ContactTitle>
      <SocialMediaIcons ref={iconsContainerRef}>
        <SocialLogo imgURL={twitterImg} alternate="twitter" redirectURL="https://twitter.com/sureshmurali29" />
        <SocialLogo imgURL={githubImg} alternate="github" redirectURL="https://github.com/sureshmurali" />
        <SocialLogo imgURL={mailImg} alternate="mail" redirectURL="mailto:sureshmurali29@gmail.com" />
        <SocialLogo imgURL={instaImg} alternate="instagram" redirectURL="https://www.instagram.com/sureshmurali_/" />
        <SocialLogo imgURL={dribbbleImg} alternate="dribbble" redirectURL="https://dribbble.com/sureshmurali29" />
        <SocialLogo imgURL={linkedInImg} alternate="linkedin" redirectURL="https://www.linkedin.com/in/sureshmurali29" />
      </SocialMediaIcons>
    </Container>
  );
}

export default Contact;

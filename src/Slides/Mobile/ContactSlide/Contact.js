import React, { Component } from 'react';
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
    height: 100vh;
    width:100%;
    border: 1px solid blue;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    @media ${device.mobileS} {
    padding-left:30px;
    }
    @media ${device.mobileM} {
    padding-left:30px;
    }
    @media ${device.mobileL} {
    padding-left:30px;
    }
    @media ${device.tablet} {
    padding-left:60px;
    }
`;

const ContactTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #333;
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
    font-size: 70px;
  }
`;

const SocialMediaIcons = styled.div`
  border: 1px solid black;
  margin-top: 30px;
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  grid-gap: 10px;
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactTitle>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={twitterImg} alternate="twitter" redirectURL="https://twitter.com/sureshmurali29" />
          <SocialLogo imgURL={githubImg} alternate="github" redirectURL="https://github.com/sureshmurali" />
          <SocialLogo imgURL={mailImg} alternate="mail" redirectURL="mailto:sureshmurali29@gmail.com" />
          <SocialLogo imgURL={instaImg} alternate="insta" redirectURL="https://www.instagram.com/suresh_murali/" />
          <SocialLogo imgURL={dribbbleImg} alternate="dribbble" redirectURL="https://dribbble.com/sureshmurali29" />
          <SocialLogo imgURL={linkedInImg} alternate="linkedin" redirectURL="https://www.linkedin.com/in/sureshmurali29" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;

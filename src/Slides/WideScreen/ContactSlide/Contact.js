import React, { useState, useEffect } from 'react';
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
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 8}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top:12%;
  left:-70%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Contact = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = (event) => {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      setScrollPercent(sp);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
    setScreenHeight(Math.round(window.document.documentElement.clientHeight));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
      <SocialMediaIcons>
        <SocialLogo imgURL={twitterImg} alternate="Twitter" redirectURL="https://twitter.com/sureshmurali29" />
        <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/sureshmurali" />
        <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:sureshmurali29@gmail.com" />
        <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="https://www.instagram.com/sureshmurali_/" />
        <SocialLogo imgURL={dribbbleImg} alternate="Dribbble" redirectURL="https://dribbble.com/sureshmurali29" />
        <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/sureshmurali29" />
      </SocialMediaIcons>
    </Container>
  );
}

export default Contact;

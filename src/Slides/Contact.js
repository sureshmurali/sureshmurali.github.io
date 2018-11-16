import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top:25%;
  left:-15%;
`;

const SocialMediaIcons = styled.div`
  align-items: center;
  font-size: 40px;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  z-index: 1;
  transform: translateY(130%);
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 140) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit + 5) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        <SocialMediaIcons>
        Front-end developer who cares deeply about user experience.
        Serious passion for UI design and new technologies.
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from '../Components/WorkSlide/TextContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
    height:100vh;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ vh: Math.round(window.innerHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (Math.floor(scrollDistance / vh) !== slideNumber) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
      console.log(Math.floor(scrollDistance / vh));
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
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
        projectName: 'Voistrap',
        projectDesc: 'IoT project to give workplace insights using indoor localization, voice and schedule.',
        projectType: 'WEB APP',
        roles: ['UI designer', 'Full Stack developer'],
      },
      {
        number: '02',
        projectName: 'ComingOrNot',
        projectDesc: 'Event planner web app that strives to ease the work of an organizer, conduct events and get togethers in a much planned and less chaotic way.',
        projectType: 'WEB APP',
        roles: ['UI designer', 'Front-end developer'],
      },
      {
        number: '03',
        projectName: 'WhatsMyFood',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat..',
        projectType: 'iOS APP',
        roles: ['UI designer', 'Front-end developer'],
      },
    ];
    return (
      <TextContent
        number={workDetails[slideNumber].number}
        projectName={workDetails[slideNumber].projectName}
        projectDesc={workDetails[slideNumber].projectDesc}
        projectType={workDetails[slideNumber].projectType}
        roles={workDetails[slideNumber].roles}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
      </Container>
    );
  }
}

export default Work;

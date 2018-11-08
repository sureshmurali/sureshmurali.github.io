import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from '../Components/WorkSlide/TextContent';
import ImageContent from '../Components/WorkSlide/ImageContent';

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
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
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
        projectType: 'iOS & WEB APP',
        roles: ['UI Designer', 'Full Stack Developer'],
      },
      {
        number: '02',
        projectName: 'ComingOrNot',
        projectDesc: 'Event planner web app that strives to ease the work of an organizer, conduct events and get togethers in a much planned and less chaotic way.',
        projectType: 'WEB APP',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '03',
        projectName: 'WhatsMyFood',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat..',
        projectType: 'iOS APP',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '04',
        projectName: 'Tesla app',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat..',
        projectType: 'iOS APP CONCEPT',
        roles: ['UI Designer'],
      },
      {
        number: '05',
        projectName: 'Calculator app',
        projectDesc: 'iOS app to remember your fav food at each restaurant you eat..',
        projectType: 'iOS APP CONCEPT',
        roles: ['UI Designer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
    console.log(this.workDetails);
    let offset = 0;
    this.workDetails.forEach((ele, ind, arr) => {
      if (ind >= 1) {
        arr.splice(ind + offset, 0, arr[ind + offset]);
        offset = ind;
      }
    });
    console.log(this.workDetails);
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

    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      console.log(Math.floor(scrollDistance / vh));
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      console.log(Math.floor(scrollDistance / vh));
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    let refresh = true;
    if (slideNumber > 1 && slideNumber % 2 === 0) {
      refresh = false;
    }
    if (!this.scrollDirectionDown) {
      refresh = !refresh;
    }
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        block={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent />
      </Container>
    );
  }
}

export default Work;

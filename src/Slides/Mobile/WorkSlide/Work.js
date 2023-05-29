import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
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
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
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
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;

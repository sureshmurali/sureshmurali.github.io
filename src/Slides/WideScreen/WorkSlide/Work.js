import React, { Component } from 'react';
import styled from 'styled-components';
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

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideHeight: 0,
      slideNumber: 0
    };
    this.slideHeightMultiplier = 1.4; // Each slide is 140% of viewport height
    this.lastScrollPosition = 0;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Calculate slide height (140% of viewport height)
    const calculatedHeight = Math.round(
      window.document.documentElement.clientHeight * this.slideHeightMultiplier
    );
    this.setState({ slideHeight: calculatedHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { slideHeight, slideNumber } = this.state;
    
    // Get scroll position (cross-browser compatible)
    const currentScrollPosition = Math.max(body.scrollTop, documentElement.scrollTop);
    
    // Track scroll position
    this.lastScrollPosition = currentScrollPosition;
    
    // Calculate current slide index based on scroll position
    const newSlideIndex = Math.floor(currentScrollPosition / slideHeight);
    
    // Update slide if we're moving to a different valid slide
    const isNewSlide = newSlideIndex !== slideNumber;
    const isValidForward = slideNumber < workDetails.length - 1;
    const isValidBackward = slideNumber === workDetails.length - 1 && newSlideIndex < slideNumber;
    
    if (isNewSlide && (isValidForward || isValidBackward)) {
      this.setState({ slideNumber: newSlideIndex });
    }
  }

  renderCurrentSlide() {
    const { slideNumber } = this.state;
    const currentProject = workDetails[slideNumber];
    
    // Always pass true to trigger animations when props change
    return (
      <TextContent
        number={currentProject.number}
        projectName={currentProject.projectName}
        projectDesc={currentProject.projectDesc}
        projectType={currentProject.projectType}
        roles={currentProject.roles}
        refreshToggle={true} // Triggers animations in TextContent
      />
    );
  }

  render() {
    return (
      <Container>
        {this.renderCurrentSlide()}
        <ImageContent pageSplitTimes={this.slideHeightMultiplier} />
      </Container>
    );
  }
}

export default Work;

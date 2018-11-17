import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 120vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(-${(scrollPercent) * 10}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top:30%;
  right:-60%;
`;

const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  position: absolute;
  width: 50%;
  top:45%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 40%;
  margin-right: 5%;
  z-index: 1;
  /* transform: translateY(230%); */
`;

class Skills extends Component {
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
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 950) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            <b>DESIGN</b>
            <br />
            Research & Wireframing
            <br />
            Rapid prototyping
            <br />
            Interaction Design
            <br />
          </div>
          <div>
            <b>DEVELOPMENT</b>
            <br />
            React
            <br />
            React Native
            <br />
            Angular 1
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;

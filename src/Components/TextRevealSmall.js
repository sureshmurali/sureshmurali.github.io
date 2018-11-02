import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Stage = styled.div`
position: relative;
/* border:1px solid black; */
z-index: 1;
`;

const moveUp = init => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;

const TextToReveal = styled.div`
  font-family: ${props => props.fontFam};
  font-size: ${props => props.fontSizeInPx}px;
  text-align:center;
  animation: ${props => (props.reveal ? moveUp(props.fontSizeInPx) : 'none')} 1s ease-out forwards;
  transform: translateY(${props => (props.fontSizeInPx * 2)}px);
`;

const WhiteBlock = styled.div`
position: absolute;
background-color: white;
margin-right:100%;
width: 120%;
height: 300px;
/* border: 1px solid grey; */
`;


class TextReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
    this.revealText = this.revealText.bind(this);
  }

  componentDidMount() {
    const { timeDelay } = this.props;
    this.revealText(timeDelay);
  }

  revealText(timeout) {
    setTimeout(() => {
      this.setState({ reveal: true });
    }, timeout);
  }

  render() {
    const { text, fontFam, fontSizeInPx } = this.props;
    const { reveal } = this.state;
    return (
      <Stage>
        <TextToReveal
          fontFam={fontFam}
          fontSizeInPx={fontSizeInPx}
          reveal={reveal}
        >
          {text}
        </TextToReveal>
        <WhiteBlock />
      </Stage>
    );
  }
}

TextReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  fontSizeInPx: PropTypes.string.isRequired,
  timeDelay: PropTypes.number.isRequired,
};

TextReveal.defaultProps = {
  fontFam: 'Avenir Helvetica Ariel',
};
export default TextReveal;

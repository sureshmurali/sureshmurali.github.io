import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cmgOrNotTabletImg from '../../../Assets/Images/ComingOrNot/Tablet.png';
import cmgOrNotIphoneImg from '../../../Assets/Images/ComingOrNot/Iphone.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 6.5}%)`,
  }),
})`
position: absolute;
bottom:-90vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 40}%) scale(0.86)`,
  }),
})`
position: absolute;
bottom: -30vh;
right:2vw;
/* border: 1px dashed red; */
height: 80vh; 
filter: blur(0.6px);
`;

class ComingOrNotImages extends Component {
  render() {
    let { scrollDistance } = this.props;
    const { boxHeight, index, screenHeight } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    scrollDistance -= scrollOffset;

    return (
      <React.Fragment>
        <Tablet src={cmgOrNotTabletImg} scroll={scrollDistance} alt="cmgOrNotTablet" />
        <Iphone src={cmgOrNotIphoneImg} scroll={scrollDistance} alt="cmgOrNotIphone" />
      </React.Fragment>
    );
  }
}

ComingOrNotImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollDistance: PropTypes.number.isRequired,
};

export default ComingOrNotImages;

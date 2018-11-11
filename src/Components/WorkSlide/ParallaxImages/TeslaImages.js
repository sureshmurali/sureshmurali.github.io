import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import teslaTyreImg from '../../../Assets/Images/Tesla/Tyre.png';
import teslaHeatImg from '../../../Assets/Images/Tesla/Heat.png';
import teslaLockImg from '../../../Assets/Images/Tesla/Lock.png';
import teslaBatteryImg from '../../../Assets/Images/Tesla/Battery.png';


const Heat = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 6.5}%)`,
  }),
})`
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Tyre = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 12}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const Battery = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 24}%) scale(0.7)`,
  }),
})`
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const Lock = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) / 80}%) scale(0.6)`,
  }),
})`
bottom:-55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class TeslaImages extends Component {
  render() {
    let { scrollDistance } = this.props;
    const { boxHeight, index, screenHeight } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    scrollDistance -= scrollOffset;

    return (
      <React.Fragment>
        <Lock src={teslaLockImg} scroll={scrollDistance} alt="teslaLock" />
        <Battery src={teslaBatteryImg} scroll={scrollDistance} alt="teslaBattery" />
        <Tyre src={teslaTyreImg} scroll={scrollDistance} alt="teslaTyre" />
        <Heat src={teslaHeatImg} scroll={scrollDistance} alt="teslaHeat" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollDistance: PropTypes.number.isRequired,
};

export default TeslaImages;

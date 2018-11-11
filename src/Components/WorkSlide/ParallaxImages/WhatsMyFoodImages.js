import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../Assets/Images/WhatsMyFood/Home.png';
import restaurantImg from '../../../Assets/Images/WhatsMyFood/Restaurant.png';
import addRestaurantImg from '../../../Assets/Images/WhatsMyFood/AddRestaurant.png';
import addFoodImg from '../../../Assets/Images/WhatsMyFood/AddFood.png';

const Restaurant = styled.img.attrs({
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

const Home = styled.img.attrs({
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

const AddFood = styled.img.attrs({
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

const AddRestaurant = styled.img.attrs({
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

class WhatsMyFoodImages extends Component {
  render() {
    let { scrollDistance } = this.props;
    const { boxHeight, index, screenHeight } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    scrollDistance -= scrollOffset;

    return (
      <React.Fragment>
        <AddFood src={addFoodImg} scroll={scrollDistance} alt="addFood" />
        <AddRestaurant src={addRestaurantImg} scroll={scrollDistance} alt="addRestaurant" />
        <Home src={homeImg} scroll={scrollDistance} alt="Home" />
        <Restaurant src={restaurantImg} scroll={scrollDistance} alt="Restaurant" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollDistance: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;

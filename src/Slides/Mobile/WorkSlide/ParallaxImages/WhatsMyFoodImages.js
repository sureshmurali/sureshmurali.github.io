import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../../Assets/Images/WhatsMyFood/Home.png';
import restaurantImg from '../../../../Assets/Images/WhatsMyFood/Restaurant.png';
import addRestaurantImg from '../../../../Assets/Images/WhatsMyFood/AddRestaurant.png';
import addFoodImg from '../../../../Assets/Images/WhatsMyFood/AddFood.png';

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
mix-blend-mode: difference;
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
mix-blend-mode: difference;
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
mix-blend-mode: difference;
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
mix-blend-mode: difference;
`;

const WhatsMyFoodImages = ({ scrollPercent, boxHeight, index, scrollHeight, screenHeight }) => {
  // Calculate the adjusted scroll percentage for this specific section
  let adjustedScrollPercent = scrollPercent;
  
  // Calculate how much to offset the scroll percentage based on this component's position
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  
  // Apply the offset to get the scroll percentage relative to this component
  adjustedScrollPercent -= scrollOffsetInPercent;
  
  // Debug logging
  if (scrollPercent > 0 && scrollPercent < 0.1) {
    console.log('WMF');
  }
  
  return (
    <>
      <AddFood src={addFoodImg} scroll={adjustedScrollPercent} alt="addFood" />
      <AddRestaurant src={addRestaurantImg} scroll={adjustedScrollPercent} alt="addRestaurant" />
      <Home src={homeImg} scroll={adjustedScrollPercent} alt="Home" />
      <Restaurant src={restaurantImg} scroll={adjustedScrollPercent} alt="Restaurant" />
    </>
  );
};

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;

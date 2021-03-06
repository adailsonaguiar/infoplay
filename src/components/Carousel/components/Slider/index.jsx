import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 20px;
    }
  }

  .slick-prev {
    left: 5px;
  }
  .slick-next {
    right: 5px;
  }
`;

export const SliderItem = styled.li`
  padding-bottom: 15px;
  padding-top: 15px;
  margin-right: 16px;
  margin-bottom: 30px;
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;

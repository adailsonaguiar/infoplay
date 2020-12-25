import React from "react";
import * as S from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";

function Carousel({ items = [] }) {
  console.log(items);
  return (
    <S.VideoCardGroupContainer>
      <Slider>
        {items &&
          items.map((item, index) => (
            <SliderItem key={index}>
              <VideoCard videoTitle={item.Title} videoURL={item.trailer} />
            </SliderItem>
          ))}
      </Slider>
    </S.VideoCardGroupContainer>
  );
}

export default Carousel;

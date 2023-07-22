"use client";

import React, { useState } from "react";
import ArrowSlide from "../ArrowSlide";
import CarouselIndex from "../CarouselIndex";
import CarouselImageDescription from "../CarouselImageDescription";
import CarouselVideos from "../CarouselVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styles";

type Props = {
  data: any;
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
};

export default function Carousel_({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <S.CarouselWrapper>
      <S.Carousel_
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        onChange={(index) => setCurrentIndex(index)}
        renderArrowPrev={(onClickHandler, hasPrev, labelPrev) => {
          return (
            <ArrowSlide
              onClick={onClickHandler}
              labelPrev={labelPrev}
              position="left"
            />
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, labelNext) => {
          return (
            <ArrowSlide
              onClick={onClickHandler}
              labelNext={labelNext}
              position="right"
            />
          );
        }}
      >
        {data.map((video: any, index: number) => (
          <CarouselVideos video={video} key={index} />
        ))}
      </S.Carousel_>
      <S.CarouselFooter>
        <CarouselIndex currentIndex={currentIndex} maxIndex={data.length} />

        <CarouselImageDescription
          description={data[currentIndex].description}
        />
      </S.CarouselFooter>
    </S.CarouselWrapper>
  );
}

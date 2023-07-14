"use client";

import React, { useState } from "react";
import ArrowSlide from "../ArrowSlide";
import CarouselIndex from "../CarouselIndex";
import CarouselImageDescription from "../CarouselImageDescription";
import CarouselVideos from "../CarouselVideo";
import { VideoProps } from "@/contentful/weeksVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styles";

type Props = {
  data: any;
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
  isCollections?: boolean;
};

export default function Carousel_({ data, isCollections }: Props) {
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
          <CarouselVideos
            video={video}
            key={index}
            isCollections={isCollections}
          />
        ))}
      </S.Carousel_>
      <S.CarouselFooter>
        <CarouselIndex currentIndex={currentIndex} maxIndex={data.length} />

        <CarouselImageDescription
          description={
            isCollections
              ? data[currentIndex].title
              : data[currentIndex].description
          }
        />
      </S.CarouselFooter>
    </S.CarouselWrapper>
  );
}

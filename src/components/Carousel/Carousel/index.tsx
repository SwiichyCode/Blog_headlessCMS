import React, { useState } from "react";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import ArrowSlide from "../ArrowSlide";
import CarouselIndex from "../CarouselIndex";
import CarouselImageDescription from "../CarouselImageDescription";
import CarouselImage from "../CarouselImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styles";

type Props = {
  carouselImages: ImageCarouselProps[];
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
};

export default function Carousel_({ carouselImages }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <S.CarouselWrapper>
      <S.Carousel_
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
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
        {carouselImages.map((image) => (
          <CarouselImage image={image} key={image.sys.id} />
        ))}
      </S.Carousel_>
      <S.CarouselFooter>
        <CarouselIndex
          currentIndex={currentIndex}
          maxIndex={carouselImages.length}
        />

        <CarouselImageDescription
          description={carouselImages[currentIndex].fields.description}
        />
      </S.CarouselFooter>
    </S.CarouselWrapper>
  );
}

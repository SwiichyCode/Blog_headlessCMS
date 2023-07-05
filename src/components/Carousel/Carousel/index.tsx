import React, { useState, useEffect } from "react";
import { CarouselVideo } from "@/types/CarouselVideo";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import ArrowSlide from "../ArrowSlide";
import CarouselIndex from "../CarouselIndex";
import CarouselImageDescription from "../CarouselImageDescription";
import CarouselVideos from "../CarouselVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styles";

type Props = {
  carouselImages: ImageCarouselProps[];
  carouselVideos: CarouselVideo[];
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
};

export default function Carousel_({ carouselImages, carouselVideos }: Props) {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVideoEnded) {
      const nextIndex = (currentIndex + 1) % carouselVideos.length;
      setCurrentIndex(nextIndex);
    }
  }, [isVideoEnded]);

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
        {carouselVideos.map((video) => (
          <CarouselVideos
            video={video}
            key={video.sys.id}
            setIsVideoEnded={setIsVideoEnded}
          />
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

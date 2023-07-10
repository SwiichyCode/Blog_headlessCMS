import React, { useState } from "react";
import ArrowSlide from "../ArrowSlide";
import CarouselIndex from "../CarouselIndex";
import CarouselImageDescription from "../CarouselImageDescription";
import CarouselVideos from "../CarouselVideo";
import { Video } from "@/types/Video";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as S from "./styles";

type Props = {
  videos: Video[];
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
};

export default function Carousel_({ videos }: Props) {
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
        {videos.map((video, index) => (
          <CarouselVideos video={video} key={video.sys.id} />
        ))}
      </S.Carousel_>
      <S.CarouselFooter>
        <CarouselIndex currentIndex={currentIndex} maxIndex={videos.length} />

        <CarouselImageDescription
          description={videos[currentIndex].fields.description}
        />
      </S.CarouselFooter>
    </S.CarouselWrapper>
  );
}

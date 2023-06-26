import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ArrowSlide from "@/components/Carousel/ArrowSlide";
import VideoGrid from "./VideoGrid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  week: any;
};

export default function WeekCarousel({ week }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos =
    week &&
    week[currentIndex]?.map(
      (video: any) => video.fields?.image?.fields?.file?.url
    );

  return (
    <Carousel
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
      {week &&
        week.map((week: any) => (
          <div className="h-[384px]">
            <VideoGrid videos={videos} />
          </div>
        ))}
    </Carousel>
  );
}

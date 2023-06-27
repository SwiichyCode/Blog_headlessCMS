import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ArrowSlide from "@/components/Carousel/ArrowSlide";
import VideoGrid from "./VideoGrid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getCurrentWeek } from "../utils/getCurrentWeek";

type Props = {
  week: any;
};

export default function WeekCarousel({ week }: Props) {
  const [currentIndex, setCurrentIndex] = useState(getCurrentWeek());
  const videos =
    week &&
    week[currentIndex]?.map(
      (video: any) => video.fields?.image?.fields?.file?.url
    );

  return (
    <Carousel
      onChange={(index) => setCurrentIndex(index)}
      selectedItem={currentIndex}
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

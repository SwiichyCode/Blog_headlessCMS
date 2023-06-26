import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowSlide from "@/components/Carousel/ArrowSlide";
import { SeasonVideoProps } from "@/types/SeasonVideo";

type Props = {
  week: any;
};

export default function WeekCarousel({ week }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos =
    week && week[currentIndex]?.map((video: any) => video.fields.date);

  return (
    <Carousel
      width={600}
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
          <div className="flex flex-col">
            {videos.map((video: any) => (
              <span>{video}</span>
            ))}
          </div>
        ))}
    </Carousel>
  );
}

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import ArrowSlide from "./ArrowSlide";
import CarouselIndex from "./CarouselIndex";
import ImageDescription from "./ImageDescription";
import CarouselImage from "./CarouselImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  carouselImages: ImageCarouselProps[];
  children?: React.ReactNode;
  activeArrow?: boolean;
  activeIndex?: boolean;
};

export default function Carousel_({ carouselImages }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center mb-8">
      <Carousel
        className="flex h-auto mt-8 mb-4"
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        width={980}
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
      </Carousel>
      <div className="flex items-center w-[817px]">
        <CarouselIndex
          currentIndex={currentIndex}
          maxIndex={carouselImages.length}
        />

        <ImageDescription
          description={carouselImages[currentIndex].fields.description}
        />
      </div>
    </div>
  );
}

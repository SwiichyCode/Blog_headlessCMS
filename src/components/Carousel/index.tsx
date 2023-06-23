import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import ArrowSlide from "./ArrowSlide";
import CarouselIndex from "./CarouselIndex";
import ImageDescription from "./ImageDescription";
import CarouselImage from "./CarouselImage";

type Props = {
  images: ImageCarouselProps[];
  width: number;
  children?: React.ReactNode;
  renderArrow?: boolean;
};

export default function Carousel_({
  images,
  width,
  renderArrow = true,
  children,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <Carousel
        className="flex h-auto mt-8 mb-4"
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        width={width || 980}
        onChange={(index) => setCurrentIndex(index)}
        renderArrowPrev={(onClickHandler, hasPrev, labelPrev) => {
          return (
            renderArrow && (
              <ArrowSlide
                onClick={onClickHandler}
                labelPrev={labelPrev}
                position="left"
              />
            )
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, labelNext) => {
          return (
            renderArrow && (
              <ArrowSlide
                onClick={onClickHandler}
                labelNext={labelNext}
                position="right"
              />
            )
          );
        }}
      >
        {/* Refact this part to be more dynamic */}
        {images.map((image) => (
          <CarouselImage image={image} key={image.sys.id} />
        ))}
      </Carousel>
      <div className="flex items-center gap-14">
        <CarouselIndex currentIndex={currentIndex} maxIndex={images.length} />
        {/* <ImageDescription description={carouselData[currentIndex].desc} /> */}
      </div>
    </div>
  );
}

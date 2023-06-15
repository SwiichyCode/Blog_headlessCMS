import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "@/data/carouselData";
import { ContentfulImageProps } from "@/types/contentfulImages";
import ArrowSlide from "./ArrowSlide";
import CarouselIndex from "./CarouselIndex";
import ImageDescription from "./ImageDescription";

type Props = {
  images: ContentfulImageProps[];
};

export default function Carousel_({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-col">
      <Carousel
        className="flex w-[980px] h-auto mt-8 mb-4"
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        onChange={(index) => setCurrentIndex(index)}
        renderArrowPrev={(onClickHandler, hasPrev, labelPrev) => (
          <ArrowSlide
            onClick={onClickHandler}
            labelPrev={labelPrev}
            position="left"
          />
        )}
        renderArrowNext={(onClickHandler, hasNext, labelNext) => (
          <ArrowSlide
            onClick={onClickHandler}
            labelNext={labelNext}
            position="right"
          />
        )}
      >
        {images.map((image) => (
          <div key={image.id} className="flex w-[817px] h-[547px] m-auto">
            <img
              src={image.fields.image.fields.file.url || "/carousel_1.png"}
              alt="carousel image"
              width={817}
              height={547}
              className="w-full h-auto "
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center gap-14">
        <CarouselIndex currentIndex={currentIndex} maxIndex={images.length} />
        <ImageDescription description={carouselData[currentIndex].desc} />
      </div>
    </div>
  );
}

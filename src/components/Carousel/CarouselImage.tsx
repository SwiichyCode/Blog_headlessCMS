import { ImageCarouselProps } from "@/types/ImageCarousel";

type Props = {
  image: ImageCarouselProps;
};

export default function CarouselImage({ image }: Props) {
  return (
    <div className="m-auto">
      <img
        className="w-full h-auto max-w-[817px]"
        src={image.fields.image.fields.file.url || "/carousel_1.png"}
        alt="carousel image"
      />
    </div>
  );
}

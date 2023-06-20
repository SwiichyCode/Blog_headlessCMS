import { ImageCarouselProps } from "@/types/ImageCarousel";

type Props = {
  image: ImageCarouselProps;
};

export default function CarouselImage({ image }: Props) {
  return (
    <div className="flex w-[817px] h-[547px] m-auto">
      <img
        src={image.fields.image.fields.file.url || "/carousel_1.png"}
        alt="carousel image"
        width={817}
        height={547}
        className="w-full h-auto "
      />
    </div>
  );
}

import { ImageCarouselProps } from "@/types/ImageCarousel";
import Image from "next/image";

type Props = {
  image: ImageCarouselProps;
};

export default function CarouselImage({ image }: Props) {
  return (
    <Image
      width={817}
      height={460}
      src={`https://${image.fields.image.fields.file.url}` || "/carousel_1.png"}
      alt="carousel image"
    />
  );
}

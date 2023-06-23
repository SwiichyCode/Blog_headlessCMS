import Navigation from "@/components/Navigation";
import Carousel_ from "./Carousel";
import { ImageCarouselProps } from "@/types/ImageCarousel";

type Props = {
  images: ImageCarouselProps[];
};

export default function Header({ images }: Props) {
  return (
    <header className="flex flex-col items-center justify-center w-full bg-[#1B1B1B]">
      <Navigation />
      {/* <Carousel_ images={images} /> */}
    </header>
  );
}

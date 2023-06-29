import Navigation from "@/components/Navigation";
import Carousel_ from "./Carousel";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { LogoProps } from "@/types/Logo";

type Props = {
  logo: any;
};

export default function Header({ logo }: Props) {
  return (
    <header className="flex flex-col items-center justify-center w-full bg-[#1B1B1B]">
      <Navigation logo={logo} />
      {/* <Carousel_ images={images} /> */}
    </header>
  );
}

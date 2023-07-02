import { ImageCarouselProps } from "@/types/ImageCarousel";
import { LogoProps } from "@/types/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Carousel_ from "@/components/Carousel/Carousel";
import { HeaderWrapper } from "./styles";

type Props = {
  logo: LogoProps[];
  carouselImages: ImageCarouselProps[];
};

export default function Header({ logo, carouselImages }: Props) {
  return (
    <HeaderWrapper>
      <Navigation logo={logo} />
    </HeaderWrapper>
  );
}

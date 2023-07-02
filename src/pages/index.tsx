import getEntries from "@/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import Footer from "@/components/Footer";
import { SeasonVideoProps } from "@/types/SeasonVideo";
import { LogoProps } from "@/types/Logo";
import Main from "@/components/Main";
import MainContainer from "@/components/Layouts/MainContainer";
import Carousel_ from "@/components/Carousel/Carousel";

type Props = {
  carouselImages: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: SeasonVideoProps[];
  logo: LogoProps[];
};

export default function Home({ logo, carouselImages }: Props) {
  return (
    <HomeContainer>
      <Header logo={logo} carouselImages={carouselImages} />
      <MainContainer>
        <Carousel_ carouselImages={carouselImages} />
        <Main />
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
}

export async function getStaticProps() {
  // const images = await getEntries.getCarouselImages();
  // const authorPresentation = await getEntries.getAuthorPresentation();
  // const seasonVideo = await getEntries.getSeasonVideo();

  const logo = await getEntries.getLogo();
  const carouselImages = await getEntries.getCarouselImages();
  return { props: { logo, carouselImages } };
}

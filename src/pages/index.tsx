import getEntries from "@/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import Footer from "@/components/Footer";
import { SeasonVideoProps } from "@/types/SeasonVideo";
import { LogoProps } from "@/types/Logo";

type Props = {
  carouselImages: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: SeasonVideoProps[];
  logo: LogoProps[];
};

export default function Home({ logo, carouselImages }: Props) {
  console.log(carouselImages);
  return (
    <HomeContainer>
      <Header logo={logo} carouselImages={carouselImages} />

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

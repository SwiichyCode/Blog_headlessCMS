import getEntries from "@/contentful";
import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import { SeasonVideoProps } from "@/types/SeasonVideo";
import { LogoProps } from "@/types/Logo";
import Presentation from "@/components/Presentation";
import MainLayout from "@/layouts/MainLayout";
import Carousel_ from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer";
import { CarouselVideo } from "@/types/CarouselVideo";

type Props = {
  carouselImages: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: SeasonVideoProps[];
  logo: LogoProps[];
  carouselVideos: CarouselVideo[];
};

export default function Home({ logo, carouselImages, carouselVideos }: Props) {
  console.log(carouselVideos);

  return (
    <HomeLayout>
      <Header logo={logo} carouselImages={carouselImages} />
      <MainLayout>
        <Carousel_
          carouselImages={carouselImages}
          carouselVideos={carouselVideos}
        />
        <Presentation />
      </MainLayout>
      <Footer />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  // const images = await getEntries.getCarouselImages();
  // const authorPresentation = await getEntries.getAuthorPresentation();
  // const seasonVideo = await getEntries.getSeasonVideo();

  const logo = await getEntries.getLogo();
  const carouselImages = await getEntries.getCarouselImages();
  const carouselVideos = await getEntries.getCarouselVideos();
  return { props: { logo, carouselImages, carouselVideos } };
}

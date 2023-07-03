import getEntries from "@/contentful";
import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import Footer from "@/components/Footer";
import { SeasonVideoProps } from "@/types/SeasonVideo";
import { LogoProps } from "@/types/Logo";
import Presentation from "@/components/Presentation";
import MainLayout from "@/layouts/MainLayout";
import Carousel_ from "@/components/Carousel/Carousel";

type Props = {
  carouselImages: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: SeasonVideoProps[];
  logo: LogoProps[];
};

export default function Home({ logo, carouselImages }: Props) {
  return (
    <HomeLayout>
      <Header logo={logo} carouselImages={carouselImages} />
      <MainLayout>
        <Carousel_ carouselImages={carouselImages} />
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
  return { props: { logo, carouselImages } };
}

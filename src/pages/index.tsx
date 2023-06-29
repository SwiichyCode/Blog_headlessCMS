import getEntries from "@/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import Footer from "@/components/Footer";
import { SeasonVideoProps } from "@/types/SeasonVideo";
import { LogoProps } from "@/types/Logo";

type Props = {
  images: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: SeasonVideoProps[];
  logo: any;
};

export default function Home({ logo }: Props) {
  return (
    <HomeContainer>
      <Header logo={logo} />
      {/* <Footer /> */}
    </HomeContainer>
  );
}

export async function getStaticProps() {
  // const images = await getEntries.getCarouselImages();
  // const authorPresentation = await getEntries.getAuthorPresentation();
  // const seasonVideo = await getEntries.getSeasonVideo();

  const logo = await getEntries.getLogo();
  return { props: { logo } };
}

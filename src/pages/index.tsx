import getEntries from "@/contentful";
import HomeLayout from "@/layouts/HomeLayout";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Video } from "@/types/Video";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import { LogoProps } from "@/types/Logo";

type Props = {
  authorPresentation: AuthorDescriptionProps[];
  logo: LogoProps[];
  carouselVideos: Video[];
};

export default function Home({ logo, carouselVideos }: Props) {
  console.log(carouselVideos);
  return (
    <HomeLayout>
      <Header logo={logo} />
      <Main carouselVideos={carouselVideos} />
      <Footer />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  // const images = await getEntries.getCarouselImages();
  // const authorPresentation = await getEntries.getAuthorPresentation();
  // const seasonVideo = await getEntries.getSeasonVideo();

  const logo = await getEntries.getLogo();
  const carouselVideos = await getEntries.getCarouselVideos();
  return { props: { logo, carouselVideos } };
}

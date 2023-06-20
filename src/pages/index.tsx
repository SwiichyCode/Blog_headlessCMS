import getEntries from "@/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";
import Footer from "@/components/Footer";

type Props = {
  images: ImageCarouselProps[];
  authorPresentation: AuthorDescriptionProps[];
  seasonVideo: any;
};

export default function Home({
  images,
  authorPresentation,
  seasonVideo,
}: Props) {
  console.log(seasonVideo);
  return (
    <HomeContainer>
      <Header images={images} />
      <Footer />
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const images = await getEntries.getCarouselImages();
  const authorPresentation = await getEntries.getAuthorPresentation();
  const seasonVideo = await getEntries.getSeasonVideo();
  return { props: { images, authorPresentation, seasonVideo } };
}

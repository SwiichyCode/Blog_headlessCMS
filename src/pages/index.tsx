import getEntries from "@/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import { ImageCarouselProps } from "@/types/ImageCarousel";
import { AuthorDescriptionProps } from "@/types/AuthorDescription";

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
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const images = await getEntries.getCarouselImages();
  const authorPresentation = await getEntries.getAuthorPresentation();
  const seasonVideo = await getEntries.getSeasonVideo();
  return { props: { images, authorPresentation, seasonVideo } };
}

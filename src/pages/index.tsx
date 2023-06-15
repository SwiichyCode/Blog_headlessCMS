import getEntries from "@/lib/contentful";
import HomeContainer from "@/components/Layouts/HomeContainer";
import Header from "@/components/Header";
import Carousel_ from "@/components/Carousel";
import { ContentfulImageProps } from "@/types/contentfulImages";

type Props = {
  images: ContentfulImageProps[];
};

export default function Home({ images }: Props) {
  return (
    <HomeContainer>
      <Header />
      <Carousel_ images={images} />
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const images = await getEntries.getCarouselImages();
  return { props: { images } };
}

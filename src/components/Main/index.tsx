import MainLayout from "@/layouts/MainLayout";
import Carousel_ from "@/components/Carousel/Carousel";
import Presentation from "../Presentation";
import { Video } from "@/types/Video";

type Props = {
  carouselVideos: Video[];
};

export default function Main({ carouselVideos }: Props) {
  return (
    <MainLayout>
      <Carousel_ videos={carouselVideos} />
      <Presentation />
    </MainLayout>
  );
}

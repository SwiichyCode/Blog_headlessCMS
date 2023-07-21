"use client";
import MainLayout from "@/app/layouts/MainLayout";
import Carousel_ from "@/app/(pages)/(home)/_components/Carousel/Carousel";
import Presentation from "@/app/(pages)/(home)/_components/Presentation";
import { VideoProps } from "@/contentful/content/carouselVideo";

type Props = {
  videos: VideoProps[];
};

export default function Main({ videos }: Props) {
  return (
    <MainLayout>
      <Carousel_ data={videos} />
      <Presentation />
    </MainLayout>
  );
}

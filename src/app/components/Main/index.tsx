"use client";
import MainLayout from "@/app/layouts/MainLayout";
import Carousel_ from "@/app/components/Carousel/Carousel";
import Presentation from "@/app/components/Presentation";
import { VideoProps } from "@/contentful_/video";

type Props = {
  videos: VideoProps[];
};

export default function Main({ videos }: Props) {
  return (
    <MainLayout>
      <Carousel_ videos={videos} />
      <Presentation />
    </MainLayout>
  );
}

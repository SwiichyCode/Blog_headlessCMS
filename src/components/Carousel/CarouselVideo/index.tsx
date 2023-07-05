import React from "react";
import { CarouselVideo } from "@/types/CarouselVideo";
import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 460px;
  background-color: #050303;
`;

type Props = {
  video: CarouselVideo;
  setIsVideoEnded: (value: boolean) => void;
};

export default function CarouselVideo({ video, setIsVideoEnded }: Props) {
  const handlePlay = () => {
    setIsVideoEnded(false);
  };

  const handleEnded = () => {
    setIsVideoEnded(true);
  };

  return (
    <Video controls onPlay={handlePlay} onEnded={handleEnded}>
      <source src={video.fields.video.fields.file.url} type="video/mp4" />
    </Video>
  );
}

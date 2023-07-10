import React, { useEffect, useRef } from "react";
import { CarouselVideo } from "@/types/CarouselVideo";
import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 460px;
  background-color: #050303;
`;

type Props = {
  video: CarouselVideo;
};

export default function CarouselVideo({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVideoEnded = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <Video autoPlay muted controls ref={videoRef}>
      <source src={video.fields.video.fields.file.url} type="video/mp4" />
    </Video>
  );
}

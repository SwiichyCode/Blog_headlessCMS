import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { VideoProps } from "@/contentful_/video";

const Video = styled.video`
  width: 100%;
  height: 460px;
  background-color: #050303;
`;

type Props = {
  video: VideoProps;
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
      <source src={video?.carouselVideo?.src} type="video/mp4" />
    </Video>
  );
}

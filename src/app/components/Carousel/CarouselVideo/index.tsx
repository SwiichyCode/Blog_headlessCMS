import React, { useEffect, useRef } from "react";
import { VideoProps } from "@/contentful/weeksVideo";
import { Video } from "./styles";

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

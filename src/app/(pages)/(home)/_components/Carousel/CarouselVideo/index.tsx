import React, { useEffect, useRef } from "react";
import { VideoProps } from "@/contentful/content/carouselVideo";
import VideoPlayer from "@/app/components/VideoPlayer";

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
    <VideoPlayer
      src={video?.carouselVideo?.src || ""}
      ref={videoRef}
      controls
      muted
      autoPlay
    />
  );
}

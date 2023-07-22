"use client";
import { useRef } from "react";
import VideoPlayer from "@/app/components/VideoPlayer";

type Props = {
  video: any;
  onClick: () => void;
};

export default function Miniature({ video, onClick }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayOnHover = () => {
    videoRef.current?.play();
  };

  const handleResetOnHover = () => {
    if (videoRef.current) videoRef.current.currentTime = 0;
    videoRef.current?.pause();
  };

  return (
    <VideoPlayer
      src={video.src}
      ref={videoRef}
      onMouseEnter={handlePlayOnHover}
      onMouseLeave={handleResetOnHover}
      onClick={onClick}
      muted
      cover
    />
  );
}

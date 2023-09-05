"use client";
import { useState, useRef } from "react";
import VideoPlayer from "@/app/components/VideoPlayer";
import { useWindowSize } from "usehooks-ts";
import * as S from "./styles";

type Props = {
  video: any;
  onClick: () => void;
};

export default function Miniature({ video, onClick }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { width } = useWindowSize();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayOnHover = () => {
    if (width < 768) return;
    videoRef.current?.play();
  };

  const handleResetOnHover = () => {
    if (width < 768) return;
    if (videoRef.current) videoRef.current.currentTime = 0;
    videoRef.current?.pause();
  };

  const handleClicked = () => {
    if (width < 768) {
      if (videoRef.current?.paused) {
        videoRef.current?.play();
        setIsPlaying(true);
      } else {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <S.MiniatureWrapper>
      <VideoPlayer
        src={video.src}
        ref={videoRef}
        onMouseEnter={handlePlayOnHover}
        onMouseLeave={handleResetOnHover}
        onClick={handleClicked}
        muted
        cover
      />

      {width < 768 ? (
        !isPlaying && (
          <S.MobileIconPlayer onClick={handleClicked} className="icon-player" />
        )
      ) : (
        <S.DesktopIconPlayer className="icon-player" />
      )}
    </S.MiniatureWrapper>
  );
}

import React, { useEffect, useRef } from "react";
import Video from "./Video";

export type Props = {
  videos: string[];
};

export default function VideoComponent({ videos }: Props) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const playVideoWithDelay = (video: HTMLVideoElement, delay: number) => {
      setTimeout(() => {
        video.play().catch((error) => {
          console.error("Erreur de lecture de la vidéo:", error);
        });
      }, delay);
    };

    document.addEventListener("click", () => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          playVideoWithDelay(videoRef, index * 1500);
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {videos.map((src, index) => (
        <Video key={index} videoRefs={videoRefs} index={index} src={src} />
      ))}
    </div>
  );
}

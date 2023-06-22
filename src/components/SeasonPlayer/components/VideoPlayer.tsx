import React, { useEffect, useRef } from "react";
import Video from "./Video";

const videos = [
  "/video/test.MOV",
  "/video/test.MOV",
  "/video/test.MOV",
  "/video/test.MOV",
  "/video/test.MOV",
  "/video/test.MOV",
  "/video/test.MOV",
];

export default function VideoComponent() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const playVideoWithDelay = (video: HTMLVideoElement, delay: number) => {
      setTimeout(() => {
        video.play().catch((error) => {
          // Gérer les erreurs de lecture ici (par exemple, si le navigateur bloque la lecture automatique)
          console.error("Erreur de lecture de la vidéo:", error);
        });
      }, delay);
    };

    document.addEventListener("click", () => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          playVideoWithDelay(videoRef, index * 1500); // Décalage de lecture de chaque vidéo en millisecondes
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {videos.map((src, index) => (
        <Video key={index} videoRefs={videoRefs} index={index} src={src} />
      ))}
    </div>
  );
}

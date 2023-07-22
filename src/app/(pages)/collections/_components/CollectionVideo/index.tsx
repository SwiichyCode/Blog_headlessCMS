"use client";
import React, { useState } from "react";
import VideoMiniature from "../VideoMiniature";
import Modal_ from "@/app/components/Modal";
import VideoPlayer from "@/app/components/VideoPlayer";

type Props = {
  video: any;
};

export default function CollectionVideo({ video }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <VideoMiniature video={video} onClick={() => setIsOpen(true)} />
      <Modal_ modalIsOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <VideoPlayer src={video.src} controls />
      </Modal_>
    </>
  );
}

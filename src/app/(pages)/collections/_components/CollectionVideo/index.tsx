"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import VideoMiniature from "../VideoMiniature";
import VideoPlayer from "@/app/components/VideoPlayer";
import Modal from "@/app/components/Modal/index";

import * as S from "./styles";
type Props = {
  video: any;
};

export default function CollectionVideo({ video }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const date = new Date(video.createdAt);
  const formattedDate = format(date, "dd MMMM yyyy", { locale: fr });

  return (
    <S.CollectionVideoWrapper>
      <VideoMiniature video={video} onClick={() => setIsOpen(true)} />
      <S.CollectionVideoContent>
        <S.CollectionVideoTitle>{video.title}</S.CollectionVideoTitle>
        <S.CollectionVideoDescription>
          {video.description}
        </S.CollectionVideoDescription>
        <S.CollectionVideoDate>
          <span>Publié le:</span> {formattedDate}
        </S.CollectionVideoDate>
      </S.CollectionVideoContent>

      <Modal modalIsOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
        <VideoPlayer src={video.src} controls width="500px" />
      </Modal>
    </S.CollectionVideoWrapper>
  );
}

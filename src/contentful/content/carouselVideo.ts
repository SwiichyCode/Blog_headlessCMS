import { Entry } from "contentful";
import { TypeVideoSkeleton } from "../types/TypeWeeksVideo";
import { ContentVideo, parseContentfulContentVideo } from "../utils/Video";
import { contentfulClient } from "../config/contentfulClient";

type VideoEntry = Entry<TypeVideoSkeleton, undefined, string>;

export interface VideoProps {
  description: string;
  carouselVideo: ContentVideo | null;
  src?: string;
}

function parseContentfulVideo(videoEntry?: VideoEntry): VideoProps | null {
  if (!videoEntry) {
    return null;
  }

  return {
    description: videoEntry.fields.description || "",
    carouselVideo: parseContentfulContentVideo(videoEntry.fields.video),
  };
}

export async function fetchVideo(): Promise<VideoProps[]> {
  const contentful = contentfulClient();

  const videoResult = await contentful.getEntries<TypeVideoSkeleton>({
    content_type: "carouselVideo",
  });

  return videoResult.items.map(
    (videoEntry) => parseContentfulVideo(videoEntry) as VideoProps
  );
}

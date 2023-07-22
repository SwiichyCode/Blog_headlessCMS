import { Entry } from "contentful";
import { TypeCollectionsSkeleton } from "../types/TypeCollections";
import { ContentVideo, parseContentfulContentVideo } from "../utils/Video";
import { contentfulClient } from "../config/contentfulClient";
import { ContentImage, parseContentfulContentImage } from "../utils/Image";

type CollectionsEntry = Entry<TypeCollectionsSkeleton, undefined, string>;

export interface CollectionsProps {
  title?: string;
  order?: number;
  url?: string;
  miniature?: ContentImage | null;
  video?: ContentVideo | null;
  description?: string;
  videos?: (ContentVideo | null)[];
  videoRef?: {
    miniature?: ContentImage | null;
    video?: ContentVideo | null;
  }[];
}

function parseContentfulCollections(
  collectionsEntry?: CollectionsEntry
): CollectionsProps | null {
  if (!collectionsEntry) {
    return null;
  }

  return {
    title: collectionsEntry.fields.title || "",
    order: collectionsEntry.fields.order || 0,
    url: collectionsEntry.fields.url || "",
    miniature: parseContentfulContentImage(collectionsEntry.fields.miniature),
    video: parseContentfulContentVideo(collectionsEntry.fields.video),
    description: collectionsEntry.fields.description || "",
    videos: collectionsEntry.fields.videos?.map((video) =>
      parseContentfulContentVideo(video)
    ),
  };
}

export async function fetchCollections(): Promise<CollectionsProps[]> {
  const contentful = contentfulClient();

  const collectionsResult =
    await contentful.getEntries<TypeCollectionsSkeleton>({
      content_type: "collections",
    });

  const sortedCollections = collectionsResult.items.sort((a, b) => {
    const orderA = a.fields.order || 0;
    const orderB = b.fields.order || 0;
    return orderA - orderB;
  });

  return sortedCollections.map(
    (collectionsEntry) =>
      parseContentfulCollections(collectionsEntry) as CollectionsProps
  );
}

interface CollectionOptions {
  slug: string;
}

export async function fetchCollection({
  slug,
}: CollectionOptions): Promise<CollectionsProps> {
  const contentful = contentfulClient();

  const collectionsResult =
    await contentful.getEntries<TypeCollectionsSkeleton>({
      content_type: "collections",
      "fields.url": slug,
    });

  return parseContentfulCollections(
    collectionsResult.items[0]
  ) as CollectionsProps;
}

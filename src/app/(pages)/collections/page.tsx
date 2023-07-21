import { fetchCollections } from "@/contentful/content/collections";
import CollectionsNav from "./_components/CollectionNav";
import styled from "styled-components";

export default async function Collections() {
  const collections = await fetchCollections();
  const collectionsVideo = collections.map((collection) => collection.video);

  return <CollectionsNav collections={collections} />;
}

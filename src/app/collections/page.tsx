import { fetchCollections } from "@/contentful/collections";
import MainCollection from "../components/MainCollection";

export default async function Collections() {
  const collections = await fetchCollections();
  const collectionsVideo = collections.map((collection) => collection.video);

  return <MainCollection collections={collections} />;
}

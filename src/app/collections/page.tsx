import { fetchCollections } from "@/contentful/collections";
import Carousel_ from "../components/Carousel/Carousel";

export default async function Collections() {
  const collections = await fetchCollections();
  const collectionsVideo = collections.map((collection) => collection.video);

  console.log(collectionsVideo);

  return (
    <div>
      {/* <h1>Collections</h1> */}
      <Carousel_ data={collectionsVideo} isCollections={true} />
    </div>
  );
}

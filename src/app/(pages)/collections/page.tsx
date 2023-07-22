import { fetchCollections } from "@/contentful/content/collections";
import CollectionsNav from "./_components/CollectionNav";
import CollectionLayout from "./_layouts/CollectionLayout";

export default async function Collections() {
  const collections = await fetchCollections();
  const collectionsVideo = collections.map((collection) => collection.video);

  return (
    <CollectionLayout title="Les collections">
      <CollectionsNav collections={collections} />
    </CollectionLayout>
  );
}

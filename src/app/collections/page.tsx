import { fetchCollections } from "@/contentful/collections";

export default async function Collections() {
  const collections = await fetchCollections();

  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
}

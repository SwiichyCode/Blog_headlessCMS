"use client";

import Carousel_ from "../Carousel/Carousel";
import CollectionLayout from "@/app/layouts/CollectionLayout";
import CollectionsNav from "../Collections/CollectionNav";

type Props = {
  collections: any;
};

export default function MainCollection({ collections }: Props) {
  return (
    <CollectionLayout>
      <CollectionsNav collections={collections} />
      {/* <Carousel_ data={data} isCollections={true} /> */}
    </CollectionLayout>
  );
}

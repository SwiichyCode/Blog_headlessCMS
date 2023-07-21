"use client";

import CollectionLayout from "@/app/layouts/CollectionLayout";
import CollectionsNav from "../Collections/CollectionNav";

type Props = {
  collections: any;
};

export default function MainCollection({ collections }: Props) {
  return (
    <CollectionLayout>
      <CollectionsNav collections={collections} />
    </CollectionLayout>
  );
}

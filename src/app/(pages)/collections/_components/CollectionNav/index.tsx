"use client";
import Link from "next/link";
import * as S from "./styles";
import GridLayout from "../../_layouts/GridLayout";

type Props = {
  collections: any;
};

export default function CollectionsNav({ collections }: Props) {
  return (
    <S.CollectionsNavWrapper>
      <h1>Les collections</h1>
      <GridLayout>
        {collections.map((collection: any, index: number) => (
          <Link href={`/collections/${collection.url}`} key={index}>
            <S.Miniature miniature={collection.miniature.src}>
              <h2>{collection.title}</h2>
            </S.Miniature>
          </Link>
        ))}
      </GridLayout>
    </S.CollectionsNavWrapper>
  );
}

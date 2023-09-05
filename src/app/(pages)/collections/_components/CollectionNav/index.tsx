"use client";
import Link from "next/link";
import * as S from "./styles";
import GridLayout from "../../_layouts/GridLayout";
import styled from "styled-components";

const CollectionTitle = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.1rem;
  margin-bottom: 6rem;
`;

type Props = {
  collections: any;
};

export default function CollectionsNav({ collections }: Props) {
  return (
    <S.CollectionsNavWrapper>
      <CollectionTitle>Les collections</CollectionTitle>
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

import Link from "next/link";
import * as S from "./styles";

type Props = {
  collections: any;
};

export default function CollectionsNav({ collections }: Props) {
  return (
    <S.CollectionsNavWrapper>
      <h1>La collection</h1>
      <S.CollectionGrid>
        {collections.map((collection: any, index: number) => (
          <Link href={`/collections/${collection.url}`} key={index}>
            <S.Miniature miniature={collection.miniature.src}>
              <h2>{collection.title}</h2>
            </S.Miniature>
          </Link>
        ))}
      </S.CollectionGrid>
    </S.CollectionsNavWrapper>
  );
}

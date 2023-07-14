import { CollectionsProps } from "@/contentful/collections";
import * as S from "./styles";

type Props = {
  openCollection: boolean;
  dropdownRef: React.MutableRefObject<HTMLDivElement>;
  listDropdownRef: React.MutableRefObject<HTMLUListElement>;
  buttonDropdownWidth: number | undefined;
  collections: CollectionsProps[];
};

export default function DropdownList({
  openCollection,
  dropdownRef,
  listDropdownRef,
  buttonDropdownWidth,
  collections,
}: Props) {
  return (
    openCollection && (
      <S.DropdownListContainer
        ref={dropdownRef}
        buttonDropdownWidth={buttonDropdownWidth}
      >
        <S.DropdownList ref={listDropdownRef}>
          <S.DropdownListItem className="hover:blur-[1px]">
            <S.DropdownListItemLink
              href="/collections"
              className="hover:blur-[1px]"
            >
              Collections
            </S.DropdownListItemLink>
          </S.DropdownListItem>
          {collections.map(({ title, url }, index) => (
            <S.DropdownListItem key={index} className="hover:blur-[1px]">
              <S.DropdownListItemLink
                href={`/collections/${url as string}`}
                key={index}
              >
                {title}
              </S.DropdownListItemLink>
            </S.DropdownListItem>
          ))}
        </S.DropdownList>
      </S.DropdownListContainer>
    )
  );
}

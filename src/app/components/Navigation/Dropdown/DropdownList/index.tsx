import React from "react";
import * as S from "./styles";
import { CollectionsProps } from "@/contentful/collections";

type Props = {
  openCollection: boolean;
  dropdownLinks: { href: string; label: string }[];
  dropdownRef: React.MutableRefObject<HTMLDivElement>;
  listDropdownRef: React.MutableRefObject<HTMLUListElement>;
  buttonDropdownWidth: number | undefined;
  collections: CollectionsProps[];
};

export default function DropdownList({
  openCollection,
  dropdownLinks,
  dropdownRef,
  listDropdownRef,
  buttonDropdownWidth,
  collections,
}: Props) {
  console.log(collections.map((collection) => collection.title));
  return (
    openCollection && (
      <S.DropdownListContainer
        ref={dropdownRef}
        buttonDropdownWidth={buttonDropdownWidth}
      >
        <S.DropdownList ref={listDropdownRef}>
          {collections &&
            collections.map(({ title, url }, index) => (
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

import * as S from "./styles";

type Props = {
  openCollection: boolean;
  dropdownLinks: { href: string; label: string }[];
  dropdownRef: React.MutableRefObject<HTMLDivElement>;
  listDropdownRef: React.MutableRefObject<HTMLUListElement>;
  buttonDropdownWidth: number | undefined;
};

export default function DropdownList({
  openCollection,
  dropdownLinks,
  dropdownRef,
  listDropdownRef,
  buttonDropdownWidth,
}: Props) {
  return (
    openCollection && (
      <S.DropdownListContainer
        ref={dropdownRef}
        buttonDropdownWidth={buttonDropdownWidth}
      >
        <S.DropdownList
          ref={listDropdownRef}
          className="flex flex-col gap-2 bg-black bg-opacity-75 mt-2 py-2 rounded"
        >
          {dropdownLinks.map(({ href, label }, index) => (
            <S.DropdownListItem key={index} className="hover:blur-[1px]">
              <S.DropdownListItemLink href={href} key={`${href}${label}`}>
                {label}
              </S.DropdownListItemLink>
            </S.DropdownListItem>
          ))}
        </S.DropdownList>
      </S.DropdownListContainer>
    )
  );
}

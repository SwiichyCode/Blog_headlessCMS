import { useRef, useState } from "react";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { CollectionsProps } from "@/contentful/content/collections";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import * as S from "./styles";

type DropdownProps = {
  collections: CollectionsProps[];
};

export default function Dropdown({ collections }: DropdownProps) {
  const [openCollection, setOpenCollection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonDropdownRef = useRef<HTMLDivElement>(null);
  const listDropdownRef = useRef<HTMLUListElement>(null);
  const buttonDropdownWidth = buttonDropdownRef.current?.offsetWidth;
  const { width } = useWindowSize();

  const handleClickOutside = () => {
    if (buttonDropdownRef.current?.contains(event?.target as Node)) return;
    setOpenCollection(false);
  };

  useClickOutside(listDropdownRef, () => {
    if (width < 768) return;
    handleClickOutside();
  });

  return (
    <S.DropdownContainer>
      <DropdownButton
        buttonDropdownRef={
          buttonDropdownRef as React.MutableRefObject<HTMLDivElement>
        }
        openCollection={openCollection}
        setOpenCollection={setOpenCollection}
      />
      <DropdownList
        dropdownRef={dropdownRef as React.MutableRefObject<HTMLDivElement>}
        listDropdownRef={
          listDropdownRef as React.MutableRefObject<HTMLUListElement>
        }
        openCollection={openCollection}
        collections={collections}
        buttonDropdownWidth={buttonDropdownWidth}
      />
    </S.DropdownContainer>
  );
}

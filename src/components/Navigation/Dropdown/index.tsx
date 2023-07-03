import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import * as S from "./styles";

type DropdownProps = {
  dropdownLinks: { href: string; label: string }[];
};

export default function Dropdown({ dropdownLinks }: DropdownProps) {
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
        dropdownLinks={dropdownLinks}
        buttonDropdownWidth={buttonDropdownWidth}
      />
    </S.DropdownContainer>
  );
}

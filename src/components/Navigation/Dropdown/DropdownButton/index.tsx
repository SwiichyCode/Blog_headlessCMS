import React from "react";
import { BiChevronDown } from "react-icons/bi";
import * as S from "./styles";

type Props = {
  buttonDropdownRef: React.MutableRefObject<HTMLDivElement>;
  openCollection: boolean;
  setOpenCollection: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DropdownButton({
  buttonDropdownRef,
  openCollection,
  setOpenCollection,
}: Props) {
  return (
    <S.ButtonWrapper ref={buttonDropdownRef}>
      <S.DropdownButton
        className="hover:blur-[1px]"
        onClick={() => setOpenCollection(!openCollection)}
      >
        La Collection
      </S.DropdownButton>
      <BiChevronDown className="text-[black] text-sm" />
    </S.ButtonWrapper>
  );
}

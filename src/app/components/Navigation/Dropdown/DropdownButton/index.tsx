import React from "react";
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
        la collection
      </S.DropdownButton>
      <S.DropdownIcon />
    </S.ButtonWrapper>
  );
}

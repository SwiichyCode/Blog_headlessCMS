"use client";
import styled from "styled-components";

const BtnMenu = styled.button`
  width: 7.8rem;
  display: flex;
  align-items: center;
  gap: 0.77rem;
  font-size: 1.8rem;
  line-height: 2.7rem;
  background-color: transparent;
`;

const MenuIcon = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.1rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 2.4rem;
    height: 0.2rem;
    background-color: #fff;
  }

  &::before {
    top: 25%;
  }

  &::after {
    bottom: 25%;
  }
`;

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonMenu({ setIsMenuOpen }: Props) {
  return (
    <BtnMenu onClick={() => setIsMenuOpen(true)}>
      Menu <MenuIcon />
    </BtnMenu>
  );
}

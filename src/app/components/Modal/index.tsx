import React, { useRef } from "react";
import { ModalContent, ModalWrapper } from "./styles";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
  modalIsOpen: boolean;
  onRequestClose: () => void;
};

export default function Modal({
  children,
  modalIsOpen,
  onRequestClose,
}: Props) {
  const ref = useRef(null);

  useOnClickOutside(ref, onRequestClose);
  return (
    modalIsOpen && (
      <ModalWrapper>
        <ModalContent ref={ref}>{children}</ModalContent>
      </ModalWrapper>
    )
  );
}

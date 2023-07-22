import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  children: React.ReactNode;
  modalIsOpen: boolean;
  onRequestClose: () => void;
};

export default function Modal_({
  modalIsOpen,
  onRequestClose,
  children,
}: Props) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}

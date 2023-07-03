import styled from "styled-components";

export const ArrowSlideBtn = styled.button<{ position: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "right" ? "right: 40px" : "left: 40px")};
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);

  img {
    width: 16px;
    height: 24px;
    ${({ position }) =>
      position === "right" ? "padding-left: 2px" : "padding-right: 2px"};
  }

  &:hover {
    transform: ${({ position }) =>
      position === "right"
        ? "translateY(-50%) translateX(5px)"
        : "translateY(-50%) translateX(-5px)"};
  }

  @media (max-width: 768px) {
    ${({ position }) => (position === "right" ? "right: 20px" : "left: 20px")};
  }
`;

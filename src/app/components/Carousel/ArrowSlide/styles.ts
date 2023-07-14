import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const ArrowSlideBtn = styled.button<{ position: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "right" ? "right: 4rem" : "left: 4rem")};
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);

  img {
    width: 1.6rem;
    height: 2.4rem;
    ${({ position }) =>
      position === "right" ? "padding-left: 2px" : "padding-right: 2px"};
  }

  &:hover {
    transform: ${({ position }) =>
      position === "right"
        ? "translateY(-50%) translateX(5px)"
        : "translateY(-50%) translateX(-5px)"};
  }

  @media (max-width: ${breakpoints.md}) {
    ${({ position }) => (position === "right" ? "right: 2rem" : "left: 2rem")};
  }
`;

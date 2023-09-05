import styled from "styled-components";
import { FiMousePointer } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";

export const MiniatureWrapper = styled.div`
  position: relative;
  width: 413px;
  height: 460px;

  @media screen and (min-width: 768px) {
    &:hover > .icon-player {
      display: none;
    }
  }
`;

export const DesktopIconPlayer = styled(FiMousePointer)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  transform: translate(-50%, -50%);
  font-size: calc(2rem + 2vw);
`;

export const MobileIconPlayer = styled(AiFillPlayCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6.8rem;
  cursor: pointer;
  z-index: 999;
`;

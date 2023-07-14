import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const HamburgerBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

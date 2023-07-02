import styled from "styled-components";

export const HamburgerBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

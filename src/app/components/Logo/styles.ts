import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const LogoWrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.theme.borderHeader};
  padding: 0 24px 0 16px;
  z-index: 40;

  @media (max-width: ${breakpoints.md}) {
    border-right: none;
  }
`;

export const Image = styled.img`
  width: 9.5rem;
  height: 9.5rem;
  max-width: initial;

  @media (max-width: 768px) {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

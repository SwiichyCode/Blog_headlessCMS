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

import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const DropdownContainer = styled.li`
  display: flex;
  z-index: 40;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

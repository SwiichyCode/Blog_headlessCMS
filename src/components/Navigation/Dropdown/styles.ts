import styled from "styled-components";

export const DropdownContainer = styled.li`
  display: flex;
  z-index: 40;

  @media (max-width: 768px) {
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

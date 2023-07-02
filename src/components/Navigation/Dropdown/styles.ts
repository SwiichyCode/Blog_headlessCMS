import styled from "styled-components";

export const DropdownContainer = styled.li`
  display: flex;
  z-index: 40;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DropdownButton = styled.button`
  height: 17px;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #b5b3b3;
`;

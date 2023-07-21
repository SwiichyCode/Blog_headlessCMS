import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DropdownButton = styled.button`
  height: 24px;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.theme.textNavigation};
  font-weight: bold;
`;

export const DropdownIcon = styled(BiChevronDown)`
  color: ${({ theme }) => theme.theme.textNavigation};
  font-size: 14px;
`;

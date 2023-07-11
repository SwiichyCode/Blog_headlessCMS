import styled from "styled-components";
import Link from "next/link";

export const DropdownListContainer = styled.div<{
  buttonDropdownWidth: number | undefined;
}>`
  position: absolute;
  margin-top: 20px;
  width: ${(props) => props.buttonDropdownWidth}px;

  @media (max-width: 768px) {
    width: 100%;
    position: initial;
    margin-top: 0;
    pading: 24px 0;
  }
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 8px;
  padding: 8px 0;
  border-radius: 4px;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    gap: 0;
  }
`;

export const DropdownListItem = styled.li`
  transition: all 0.2s ease-in-out;
  padding: 0 16px;

  &:hover {
    transform: blur(1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #131313;
    padding: 8px 0;
  }
`;

export const DropdownListItemLink = styled(Link)`
  color: #b5b3b3;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
`;

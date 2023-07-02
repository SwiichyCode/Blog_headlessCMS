import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.ul<{ navbarOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    display: ${({ navbarOpen }) => (navbarOpen ? "flex" : "none")};
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 91px;
    left: 0;
    z-index: 50;
    background-color: black;
    gap: 24px;
    padding: 16px 0;
  }
`;

export const NavItem = styled.li`
  padding: 0 16px;
  transition: all 0.2s ease-in-out;
`;

export const NavLink = styled(Link)`
  color: #b5b3b3;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;

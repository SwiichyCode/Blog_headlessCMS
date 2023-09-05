import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const NavbarContainer = styled.ul<{ navbarOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 24px;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    opacity: ${({ navbarOpen }) => (navbarOpen ? "1" : "0")};
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: ${({ navbarOpen }) => (navbarOpen ? "97px" : "-100%")};
    transition: all 0.5s ease-in-out;
    left: 0;
    z-index: 50;
    background-color: black;
    padding: 16px 0;
    gap: 24px;
    z-index: 99;
  }
`;

export const NavItem = styled.li`
  padding: 0 16px;
  transition: all 0.2s ease-in-out;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.theme.textNavigation};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }

  &.active {
    color: ${({ theme }) => theme.theme.textNavigationActive};
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #b49379;
    text-decoration-thickness: 3px;
  }
`;

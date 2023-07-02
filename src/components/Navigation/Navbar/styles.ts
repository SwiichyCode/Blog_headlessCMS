import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.ul<{ navbarOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  



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
background-color: black;
margin: 30px;
transition: all 0.2s ease-in-out;

`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 14px;

  letter-spacing: 1.6px;
  text-transform: uppercase;


;
`;

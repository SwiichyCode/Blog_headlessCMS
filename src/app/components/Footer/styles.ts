import styled from "styled-components";
import { breakpoints } from "@/app/styles/breakpoints";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.theme.bgFooter};
  font-weight: 300;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.theme.textNavigation};
  border-top: 1px solid ${({ theme }) => theme.theme.borderHeader};
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  margin: auto;
  padding: 6.4rem 1.6rem;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
    padding: 3.2rem 1.6rem;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: ${breakpoints.md}) {
    align-items: center;
    gap: 1.6rem;
  }
`;

export const FooterNavList = styled.ul`
  display: flex;
  text-transform: uppercase;

  &:nth-child(2) {
    height: min-content;
  }

  @media (max-width: ${breakpoints.md}) {
    &:nth-child(2) {
      justify-content: center;
    }
  }
`;

export const FooterNavListItem = styled.li`
  display: flex;
  padding: 1.2rem 0;
  font-weight: bold;

  a {
    letter-spacing: 1.6px;
    transition: 0.3s ease-in-out;
  }
`;

export const Copyright = styled.p`
  @media (max-width: ${breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.theme.borderHeader};
  margin: 0 16px;
`;

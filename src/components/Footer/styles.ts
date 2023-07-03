import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000;
  font-weight: 300;
  font-size: 14px;
  color: #b5b3b3;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  margin: auto;
  padding: 64px 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 32px 16px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const FooterNavList = styled.ul`
  display: flex;
  gap: 32px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    &:nth-child(2) {
      justify-content: center;
    }
  }
`;

export const FooterNavListItem = styled.li`
  padding: 12px 16px;
  transition: 0.3s ease-in-out;

  a {
    letter-spacing: 1.6px;
  }
`;

export const Copyright = styled.p`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

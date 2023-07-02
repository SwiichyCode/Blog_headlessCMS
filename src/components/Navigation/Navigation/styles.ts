import styled from "styled-components";

export const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 0 16px;

  @media (min-width: 768px) {
    height: 156px;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

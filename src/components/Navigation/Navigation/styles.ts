import styled from "styled-components";

export const NavigationContainer = styled.nav`
  width: 100%;
  max-width: 1230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b5b3b3;
  padding: 0 16px;

  @media (min-width: 768px) {
    height: 156px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

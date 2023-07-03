import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.theme.header};
  margin-bottom: 26px;
  border-bottom: 1px solid #b5b3b3;
`;

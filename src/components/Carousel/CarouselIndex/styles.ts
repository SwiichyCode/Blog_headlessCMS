import styled from "styled-components";

export const CarouselIndexWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CarouselIndex = styled.span`
  border: 1px solid ${({ theme }) => theme.theme.borderHeader};
  padding: 4px 12px;
`;

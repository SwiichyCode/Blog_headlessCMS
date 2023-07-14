import styled from "styled-components";

export const CarouselIndexWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const CarouselIndex = styled.span`
  border: 1px solid ${({ theme }) => theme.theme.borderHeader};
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
`;

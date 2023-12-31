import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 81.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 2.4rem;
  color: ${({ theme }) => theme.theme.text};
`;

export const Carousel_ = styled(Carousel)`
  width: 100%;
  display: flex;
  height: auto;
  border: 2px solid ${({ theme }) => theme.theme.borderCarousel};
  border-radius: 8px;
`;

export const CarouselFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.theme.textMain};
`;

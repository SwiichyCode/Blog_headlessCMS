import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 817px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 16px;
  margin: 0 auto;
  color: #b5b3b3;
`;

export const Carousel_ = styled(Carousel)`
  width: 100%;
  display: flex;
  height: auto;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const CarouselFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

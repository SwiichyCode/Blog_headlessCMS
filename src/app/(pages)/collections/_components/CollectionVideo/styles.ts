import styled from "styled-components";

export const CollectionVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media screen and (max-width: 1180px) {
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`;

export const CollectionVideoContent = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (max-width: 1180px) {
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 0;
  }
`;

export const CollectionVideoTitle = styled.h2`
  font-size: 2.8rem;
  text-transform: capitalize;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const CollectionVideoDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const CollectionVideoDate = styled.p`
  span {
    font-weight: 700;
  }
`;

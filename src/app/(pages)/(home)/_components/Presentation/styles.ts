import styled from "styled-components";

export const PresentationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.4rem;
`;

export const PresentationWrapper = styled.section`
  width: 100%;
  max-width: 89.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.theme.textMain};
  gap: 12rem;
`;

export const PresentationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 3rem;
  line-height: 3.6rem;
  gap: 4rem;
`;

export const Line = styled.div`
  width: 14.4rem;
  height: 2px;
  background-color: ${({ theme }) => theme.theme.textMain};
  margin: 3.2rem 0;
`;

export const PresentationTextWrapper = styled.div`
  width: 100%;
  max-width: 61rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 55rem;
  }
`;

export const PresentationTextArticle = styled.article`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const MarkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

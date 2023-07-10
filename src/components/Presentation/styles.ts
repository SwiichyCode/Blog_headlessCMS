import styled from "styled-components";

export const PresentationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const PresentationWrapper = styled.section`
  width: 100%;
  max-width: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.theme.textMain};
`;

export const PresentationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 30px;
  line-height: 36px;
  gap: 40px;
`;

export const Line = styled.div`
  width: 2px;
  height: 144px;
  background-color: ${({ theme }) => theme.theme.textMain};
  margin: 32px 0;
`;

export const PresentationTextWrapper = styled.div`
  width: 100%;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 450px;
  }
`;

export const PresentationTextArticle = styled.article`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MarkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

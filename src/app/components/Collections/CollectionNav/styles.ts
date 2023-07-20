import styled from "styled-components";

export const CollectionsNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
    letter-spacing: 0.1rem;
    margin-bottom: 6rem;
  }
`;

export const CollectionGrid = styled.div`
  width: 100%;
  max-width: 130rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 3rem;
`;

export const Miniature = styled.div<{ miniature: string }>`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #fff;
  background-image: url(${(props) => props.miniature});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
  padding: 2rem;
  margin: auto;

  :hover {
    filter: grayscale(0%);
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
`;

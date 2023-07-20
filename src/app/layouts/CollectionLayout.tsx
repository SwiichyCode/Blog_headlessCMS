import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 12rem 0;
  padding: 0 6rem;
  /* gap: 24rem; */
`;

type Props = {
  children: React.ReactNode;
};

export default function CollectionLayout({ children }: Props) {
  return <Container>{children}</Container>;
}

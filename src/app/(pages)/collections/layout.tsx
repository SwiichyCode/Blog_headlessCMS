"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const CollectionLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 12rem 0;
  padding: 0 6rem;
`;

export default function CollectionLayout({ children }: Props) {
  return <CollectionLayoutWrapper>{children}</CollectionLayoutWrapper>;
}

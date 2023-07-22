"use client";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const CollectionLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12rem 0;
  padding: 0 6rem;
  gap: 6rem;
`;

const CollectionTitle = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.1rem;
  margin-bottom: 6rem;
`;

export default function CollectionLayout({ title, children }: Props) {
  return (
    <CollectionLayoutWrapper>
      <CollectionTitle>{title}</CollectionTitle>
      {children}
    </CollectionLayoutWrapper>
  );
}

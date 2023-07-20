import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 12rem 0;
  padding: 0 6rem;
  gap: 24rem;
`;

export default function MainLayout({ children }: Props) {
  return <Container>{children}</Container>;
}

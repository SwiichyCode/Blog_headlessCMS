import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 6rem;
`;

export default function MainContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

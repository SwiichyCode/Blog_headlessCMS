import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #1b1b1b;
`;

export default function HomeLayout({ children }: Props) {
  return <Container>{children}</Container>;
}

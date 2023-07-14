import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div``;

export default function HomeLayout({ children }: Props) {
  return <Container>{children}</Container>;
}

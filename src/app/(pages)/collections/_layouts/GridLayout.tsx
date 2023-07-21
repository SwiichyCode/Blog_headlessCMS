"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const GridLayoutWrapper = styled.div`
  width: 100%;
  max-width: 130rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 3rem;
`;

export default function GridLayout({ children }: Props) {
  return <GridLayoutWrapper>{children}</GridLayoutWrapper>;
}

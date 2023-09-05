"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const GridLayoutWrapper = styled.div`
  width: 100%;
  max-width: 130rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin: 0 auto;
`;

export default function GridLayout({ children }: Props) {
  return <GridLayoutWrapper>{children}</GridLayoutWrapper>;
}

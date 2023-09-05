"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ColumnLayoutWrapper = styled.div`
  width: 100%;
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function ColumnLayout({ children }: Props) {
  return <ColumnLayoutWrapper>{children}</ColumnLayoutWrapper>;
}

"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const CollectionsLayoutWrapper = styled.div`
  height: 100vh;
`;

export default function CollectionsLayout({ children }: Props) {
  return <CollectionsLayoutWrapper>{children}</CollectionsLayoutWrapper>;
}

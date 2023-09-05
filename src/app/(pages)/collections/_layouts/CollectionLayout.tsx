"use client";
import { usePathname } from "next/navigation";
import styled from "styled-components";

type Props = {
  title: string;
  children: React.ReactNode;
};

const CollectionLayoutWrapper = styled.div`
  width: 100%;
  margin: 12rem 0;
  padding: 0 6rem;
  gap: 6rem;

  @media (max-width: 768px) {
    margin: 6rem 0;
  }
`;

const CollectionLayoutTitle = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  font-weight: 700;
`;

export default function CollectionLayout({ title, children }: Props) {
  const pathname = usePathname();
  return (
    <CollectionLayoutWrapper>
      {pathname === "/collections" ? null : (
        <CollectionLayoutTitle>{title}</CollectionLayoutTitle>
      )}

      {children}
    </CollectionLayoutWrapper>
  );
}

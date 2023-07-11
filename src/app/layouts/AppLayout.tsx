"use client";
import styled from "styled-components";
import ThemeLayout from "@/app/layouts/ThemeLayout";
import { GlobalStyles } from "@/app/styles/globalStyles";

type Props = {
  children: React.ReactNode;
};

const AppWrapper = styled.div`
  font-family: "Inter", sans-serif;
  background-color: ${({ theme }) => theme.theme.bgMain};
`;

export default function AppLayout({ children }: Props) {
  return (
    <ThemeLayout>
      <GlobalStyles />
      <AppWrapper>{children}</AppWrapper>
    </ThemeLayout>
  );
}

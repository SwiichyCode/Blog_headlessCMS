"use client";
import Navigation from "@/app/components/Navigation/Navigation";
import { LogoProps } from "@/contentful/logo";
import { CollectionsProps } from "@/contentful/collections";
import { HeaderWrapper } from "./styles";

type Props = {
  logo: LogoProps | null;
  collections: CollectionsProps[];
};

export default function Header({ logo, collections }: Props) {
  return (
    <HeaderWrapper>
      <Navigation logo={logo} collections={collections} />
    </HeaderWrapper>
  );
}

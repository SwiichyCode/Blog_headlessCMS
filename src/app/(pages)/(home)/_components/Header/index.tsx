"use client";
import Navigation from "@/app/(pages)/(home)/_components/Navigation/Navigation";
import { LogoProps } from "@/contentful/content/logo";
import { CollectionsProps } from "@/contentful/content/collections";
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

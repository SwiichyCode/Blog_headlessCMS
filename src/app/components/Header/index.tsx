"use client";
import Navigation from "@/app/components/Navigation/Navigation";
import { LogoProps } from "@/contentful/logo";
import { HeaderWrapper } from "./styles";

type Props = {
  logo: LogoProps | null;
};

export default function Header({ logo }: Props) {
  return (
    <HeaderWrapper>
      <Navigation logo={logo} />
    </HeaderWrapper>
  );
}

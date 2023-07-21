import { useState, useEffect } from "react";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import { LogoProps } from "@/contentful/logo";
import { CollectionsProps } from "@/contentful/collections";
import Logo from "@/app/components/Logo";
import Navbar from "@/app/components/Navigation/Navbar";
import HamburgerIcon from "@/app/components/Navigation/HamburgerIcon";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import * as S from "./styles";

type Props = {
  logo: LogoProps | null;
  collections: CollectionsProps[];
};

export default function Navigation({ logo, collections }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setNavbarOpen(false);
    }
  }, [width]);

  return (
    <S.NavigationContainer>
      <S.NavigationWrapper>
        <Logo src={logo?.image?.src || ""} />
        <Navbar navbarOpen={navbarOpen} collections={collections} />
        {/* <ToggleSwitch /> */}
      </S.NavigationWrapper>
      <HamburgerIcon navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </S.NavigationContainer>
  );
}

import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { LogoProps } from "@/types/Logo";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navigation/Navbar";
import HamburgerIcon from "@/components/Navigation/HamburgerIcon";
import { NavigationContainer, NavigationWrapper } from "./styles";

type Props = {
  logo: LogoProps[];
};

export default function Navigation({ logo }: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { width } = useWindowSize();
  const urlLogo = logo[0].fields.image.fields.file.url;

  useEffect(() => {
    if (width > 768) {
      setNavbarOpen(false);
    }
  }, [width]);

  return (
    <NavigationContainer>
      <NavigationWrapper>
        <Logo src={urlLogo} />
        <Navbar navbarOpen={navbarOpen} />
      </NavigationWrapper>
      <HamburgerIcon navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </NavigationContainer>
  );
}

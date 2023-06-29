import { useState } from "react";
import Logo from "@/components/Logo";
import Nav from "@/components/Navigation/Nav";
import HamburgerIcon from "./HamburgerIcon";
import { useWindowSize } from "@/hooks/useWindowSize";
import NavMobile from "./NavMobile";

type Props = {
  logo: any;
};

export default function Navigation({ logo }: Props) {
  const [navbar, setNavbar] = useState(false);
  const { width } = useWindowSize();
  const urlLogo = logo[0].fields.image.fields.file.url;

  return (
    <nav className="flex items-center justify-between w-full max-w-[1230px] border-b-[1px] border-[#B5B3B3] px-4 md:h-[156px]">
      <div className="flex items-center h-full">
        <Logo src={urlLogo} />
        {width > 768 ? (
          <Nav />
        ) : (
          <NavMobile navbar={navbar} setNavbar={setNavbar} />
        )}
      </div>
      <HamburgerIcon navbar={navbar} setNavbar={setNavbar} />
    </nav>
  );
}

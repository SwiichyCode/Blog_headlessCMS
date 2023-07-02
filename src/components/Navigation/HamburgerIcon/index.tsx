import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { HamburgerBtn } from "./styles";

type Props = {
  navbarOpen: boolean;
  setNavbarOpen: (navbar: boolean) => void;
};

export default function HamburgerIcon({ navbarOpen, setNavbarOpen }: Props) {
  return (
    <HamburgerBtn onClick={() => setNavbarOpen(!navbarOpen)}>
      <IconContext.Provider value={{ size: "30px", color: "#B5B3B3" }}>
        {navbarOpen ? <CgClose /> : <RxHamburgerMenu />}
      </IconContext.Provider>
    </HamburgerBtn>
  );
}

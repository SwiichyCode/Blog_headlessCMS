import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
type Props = {
  navbar: boolean;
  setNavbar: (navbar: boolean) => void;
};

export default function HamburgerIcon({ navbar, setNavbar }: Props) {
  return (
    <button
      className="relative z-40 flex items-center justify-center w-10 h-10 md:hidden"
      onClick={() => setNavbar(!navbar)}
    >
      <IconContext.Provider
        value={{ className: "w-[30px] h-[30px]", color: "#B5B3B3" }}
      >
        {navbar ? <CgClose /> : <RxHamburgerMenu />}
      </IconContext.Provider>
    </button>
  );
}

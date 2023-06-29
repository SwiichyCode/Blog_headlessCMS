import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import DropdownMobile from "./DropdownMobile";

type Props = {
  navbar: boolean;
  setNavbar: (navbar: boolean) => void;
};

export default function NavMobile({ navbar, setNavbar }: Props) {
  const navRef = useRef<HTMLDivElement>(null);
  useClickOutside(navRef, () => setNavbar(false));

  return (
    navbar && (
      <nav
        ref={navRef}
        className="absolute top-[91px] left-0 w-screen bg-black py-4"
      >
        <ul className="text-[#B5B3B3] uppercase">
          <li className="flex items-center justify-center py-4 hover:blur-[1px]">
            <a href="#">Journal Extime</a>
          </li>
          <DropdownMobile />
          <li className="flex items-center justify-center py-4 hover:blur-[1px]">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    )
  );
}

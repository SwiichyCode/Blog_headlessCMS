import Dropdown from "@/components/Navigation/Dropdown";
import * as S from "./styles";

const dropdownLinks = [
  { href: "/", label: "all" },
  { href: "/", label: "landscapes" },
  { href: "/", label: "portraits" },
  { href: "/", label: "street" },
];

type Props = {
  navbarOpen: boolean;
};

export default function Navbar({ navbarOpen }: Props) {
  return (
    <S.NavbarContainer navbarOpen={navbarOpen}>
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink href="/">JOURNAL ExTime</S.NavLink>
      </S.NavItem>
      <Dropdown dropdownLinks={dropdownLinks} />
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink href="/">Contact</S.NavLink>
      </S.NavItem>
    </S.NavbarContainer>
  );
}

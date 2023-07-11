import { usePathname } from "next/navigation";
import { PAGE_URL } from "@/app/constants/page_url";
import Dropdown from "@/app/components/Navigation/Dropdown";
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
  const pathname = usePathname();

  return (
    <S.NavbarContainer navbarOpen={navbarOpen}>
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink
          href={PAGE_URL.HOME}
          className={pathname === PAGE_URL.HOME ? "active" : undefined}
        >
          JOURNAL ExTime
        </S.NavLink>
      </S.NavItem>
      <Dropdown dropdownLinks={dropdownLinks} />
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink
          href={PAGE_URL.CONTACT}
          className={pathname === PAGE_URL.CONTACT ? "active" : undefined}
        >
          Contact
        </S.NavLink>
      </S.NavItem>
    </S.NavbarContainer>
  );
}

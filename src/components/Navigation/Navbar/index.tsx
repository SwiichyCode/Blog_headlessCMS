import { useRouter } from "next/router";
import Dropdown from "@/components/Navigation/Dropdown";
import { PAGE_URL } from "@/constants/page_url";
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
  const router = useRouter();

  return (
    <S.NavbarContainer navbarOpen={navbarOpen}>
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink
          href={PAGE_URL.HOME}
          className={router.pathname === PAGE_URL.HOME ? "active" : undefined}
        >
          JOURNAL ExTime
        </S.NavLink>
      </S.NavItem>
      <Dropdown dropdownLinks={dropdownLinks} />
      <S.NavItem className="hover:blur-[1px]">
        <S.NavLink
          href={PAGE_URL.CONTACT}
          className={
            router.pathname === PAGE_URL.CONTACT ? "active" : undefined
          }
        >
          Contact
        </S.NavLink>
      </S.NavItem>
    </S.NavbarContainer>
  );
}

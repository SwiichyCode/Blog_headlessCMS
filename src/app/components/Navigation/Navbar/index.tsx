import { useState } from "react";
import { usePathname } from "next/navigation";
import { PAGE_URL } from "@/app/constants/page_url";
import { CollectionsProps } from "@/contentful/collections";
import Dropdown from "@/app/components/Navigation/Dropdown";
import * as S from "./styles";

type Props = {
  navbarOpen: boolean;
  collections: CollectionsProps[];
};

export default function Navbar({ navbarOpen, collections }: Props) {
  const [dropdownActive, setDropdownActive] = useState(false);
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
      {dropdownActive ? (
        <Dropdown collections={collections} />
      ) : (
        <S.NavItem className="hover:blur-[1px]">
          <S.NavLink
            href={PAGE_URL.COLLECTIONS}
            className={pathname === PAGE_URL.COLLECTIONS ? "active" : undefined}
          >
            Collections
          </S.NavLink>
        </S.NavItem>
      )}

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

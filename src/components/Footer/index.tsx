import Link from "next/link";
import * as S from "./styles";

const current = [
  { href: "/", label: "privacy policy" },
  { href: "/", label: "credits" },
  { href: "/", label: "contact" },
];

const social = [
  { href: "/", label: "facebook" },
  { href: "/", label: "instagram" },
];

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.FooterNav>
          <S.FooterNavList>
            {current.map(({ href, label }, index) => (
              <S.FooterNavListItem key={index} className="hover:blur-[1px]">
                <Link href={href} key={`${href}${label}`}>
                  {label}
                </Link>
              </S.FooterNavListItem>
            ))}
          </S.FooterNavList>

          <S.Copyright>
            Copyright © 2020 Fonds Abbas Photos. All Rights Reserved.
          </S.Copyright>
        </S.FooterNav>

        <S.FooterNavList>
          {social.map(({ href, label }, index) => (
            <S.FooterNavListItem key={index} className="hover:blur-[1px]">
              <Link href={href} key={`${href}${label}`}>
                {label}
              </Link>
            </S.FooterNavListItem>
          ))}
        </S.FooterNavList>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}

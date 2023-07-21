import Link from "next/link";
import { PAGE_URL } from "@/app/constants/page_url";
import * as S from "./styles";

type Props = {
  src: string;
};

export default function Logo({ src }: Props) {
  return (
    <S.LogoWrapper>
      <Link href={PAGE_URL.HOME}>
        <S.Image src={src} alt="logo" />
      </Link>
    </S.LogoWrapper>
  );
}

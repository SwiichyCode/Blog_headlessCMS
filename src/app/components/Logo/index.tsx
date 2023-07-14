import Image from "next/image";
import Link from "next/link";
import { LogoWrapper } from "./styles";

type Props = {
  src: string;
};

export default function Logo({ src }: Props) {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image
          src={`https://` + src}
          alt="logo"
          width={95}
          height={95}
          className="m-auto w-[65px] py-3 md:w-[95px]"
        />
      </Link>
    </LogoWrapper>
  );
}

import Image from "next/image";
import Link from "next/link";
import { LogoWrapper } from "./styles";
import styled from "styled-components";

type Props = {
  src: string;
};

// const Image = styled.img`
//   width: 6.5rem;
//   height: 6.5rem;

//   @media (min-width: 768px) {
//     width: 9.5rem;
//     height: 9.5rem;
//   }
// `;

export default function Logo({ src }: Props) {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image
          src={`http://` + src}
          alt="logo"
          width={95}
          height={95}
          className="m-auto w-[65px] py-3 md:w-[95px]"
        />
        {/* <Image src={src} alt="logo" /> */}
      </Link>
    </LogoWrapper>
  );
}

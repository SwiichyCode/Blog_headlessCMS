import Image from "next/image";
import { LogoWrapper } from "./styles";

type Props = {
  src: string;
};

export default function Logo({ src }: Props) {
  return (
    <LogoWrapper>
      <Image
        src={`https://` + src}
        alt="logo"
        width={95}
        height={95}
        className="m-auto w-[65px] py-3 md:w-[95px]"
      />
    </LogoWrapper>
  );
}

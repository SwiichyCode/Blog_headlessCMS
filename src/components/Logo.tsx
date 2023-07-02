import Image from "next/image";
import LogoImg from "../../public/logo.png";

type Props = {
  src: string;
};

export default function Logo({ src }: Props) {
  return (
    <div className="relative z-40 flex items-center justify-center border-[#B5B3B3] h-full pl-4 pr-6 md:border-r-[1px]">
      <Image
        src={LogoImg}
        alt="logo"
        width={95}
        height={95}
        className="m-auto w-[65px] py-3 md:w-[95px]"
      />
    </div>
  );
}

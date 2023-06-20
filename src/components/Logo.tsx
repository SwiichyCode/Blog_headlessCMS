import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center border-r-[1px] h-full pl-4 pr-6">
      <Image src="/logo.png" alt="logo" width={95} height={95} />
    </div>
  );
}

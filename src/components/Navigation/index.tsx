import Link from "next/link";
import Logo from "@/components/Logo";
import Dropdown from "@/components/Navigation/Dropdown";

export default function Navigation() {
  return (
    <nav className="flex items-center w-full h-[156px] max-w-[1230px] border-b-[1px] border-[#B5B3B3] px-4">
      <Logo />
      <ul className="flex px-4 items-center">
        <li className="px-4 hover:blur-[1px] ease-in-out">
          <Link
            className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
            href="/"
          >
            JOURNAL ExTime
          </Link>
        </li>
        <Dropdown />
        <li className="px-4 hover:blur-[1px] ease-in-out">
          <Link
            className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
            href="/"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

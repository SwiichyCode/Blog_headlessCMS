import Link from "next/link";
import Dropdown from "@/components/Navigation/Dropdown";

const dropdownLinks = [
  { href: "/", label: "all" },
  { href: "/", label: "landscapes" },
  { href: "/", label: "portraits" },
  { href: "/", label: "street" },
];

export default function Nav() {
  return (
    <ul className="hidden px-4 items-center md:flex">
      <li className="px-4 hover:blur-[1px] ease-in-out">
        <Link
          className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
          href="/"
        >
          JOURNAL ExTime
        </Link>
      </li>
      <Dropdown dropdownLinks={dropdownLinks} />
      <li className="px-4 hover:blur-[1px] ease-in-out">
        <Link
          className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
          href="/"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

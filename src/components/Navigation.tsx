import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "JOURNAL ExTime" },
  { href: "/collection", label: "the collection" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  return (
    <nav className="flex items-center w-full h-[136px] max-w-[1230px] border-b-[1px] border-[#B5B3B3]">
      <Logo />
      <ul className="flex px-4">
        {links.map(({ href, label }, index) => (
          <li key={index} className="py-3 px-4 hover:blur-[1px] ease-in-out">
            <Link
              className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
              href={href}
              key={`${href}${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

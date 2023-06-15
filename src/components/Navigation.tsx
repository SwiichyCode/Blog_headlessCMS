import Link from "next/link";

const links = [
  { href: "/", label: "the photographer" },
  { href: "/collection", label: "the collection" },
  { href: "/contact", label: "contact" },
];

export default function Navigation() {
  return (
    <nav className="flex items-center h-full border-l-[1px] px-6">
      <ul className="flex">
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

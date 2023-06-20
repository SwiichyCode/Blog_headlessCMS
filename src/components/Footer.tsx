import Link from "next/link";

// type Props = {
//     images: ImageCarouselProps[];
//   };
const links = [
  { href: "/", label: "JOURNAL ExTime" },
  { href: "/collection", label: "the collection" },
  { href: "/contact", label: "contact" },
];
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-6 py-4 bg-[#000000]">
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
    </footer>
  );
}

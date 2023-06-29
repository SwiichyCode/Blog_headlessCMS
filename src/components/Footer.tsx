import Link from "next/link";

const leftItems = [
  { href: "/", label: "privacy policy" },
  { href: "/", label: "credits" },
  { href: "/", label: "contact" },
];

const rightItems = [
  { href: "/", label: "facebook" },
  { href: "/", label: "instagram" },
];

export default function Footer() {
  return (
    <footer className="w-full gap-6 bg-[#000000] font-light text-sm text-[#B5B3B3]">
      <div className="flex justify-between max-w-[1230px] m-auto py-16 px-4">
        <div className="flex flex-col items-center gap-8">
          <ul className="flex uppercase gap-8">
            {leftItems.map(({ href, label }, index) => (
              <li
                key={index}
                className="py-3 px-4 hover:blur-[1px] ease-in-out"
              >
                <Link
                  className="tracking-[1.6px]"
                  href={href}
                  key={`${href}${label}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p>Copyright © 2020 Fonds Abbas Photos. All Rights Reserved.</p>
        </div>

        <ul className="flex gap-8 uppercase">
          {rightItems.map(({ href, label }, index) => (
            <li key={index} className="py-3 px-4 hover:blur-[1px] ease-in-out">
              <Link
                className="tracking-[1.6px]"
                href={href}
                key={`${href}${label}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

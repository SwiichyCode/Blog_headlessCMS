import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";

type DropdownProps = {
  dropdownLinks: { href: string; label: string }[];
};

export default function Dropdown({ dropdownLinks }: DropdownProps) {
  const [openCollection, setOpenCollection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonDropdownRef = useRef<HTMLDivElement>(null);
  const buttonDropdownWidth = buttonDropdownRef.current?.offsetWidth;
  useClickOutside(dropdownRef, () => setOpenCollection(false));

  return (
    <li className="flex ease-in-out px-4 h-[24px]">
      <div ref={buttonDropdownRef} className="flex gap-1 items-center">
        <button
          onClick={() => setOpenCollection(!openCollection)}
          className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase h-[17px]"
        >
          the collection
        </button>
        <BiChevronDown className="text-[#B5B3B3] text-sm" />
      </div>
      {openCollection && (
        <div
          ref={dropdownRef}
          id="dropdownHover"
          data-dropdown-hidden
          className="absolute mt-5"
          style={{ width: buttonDropdownWidth }}
        >
          <ul className="flex flex-col gap-2 bg-black bg-opacity-75 mt-2 py-2 rounded">
            {dropdownLinks.map(({ href, label }, index) => (
              <li key={index} className="px-4 hover:blur-[1px] ease-in-out">
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
        </div>
      )}
    </li>
  );
}

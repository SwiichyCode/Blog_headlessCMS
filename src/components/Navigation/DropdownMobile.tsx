import React, { useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

const dropdownItems = [
  {
    label: "early work",
    href: "#",
  },
  {
    label: "conflicts",
    href: "#",
  },
  {
    label: "iran: a revolution",
    href: "#",
  },
  {
    label: "mexico",
    href: "#",
  },
  {
    label: "god.. gods",
    href: "#",
  },
];

export default function DropdownMobile() {
  const [openCollection, setOpenCollection] = useState(false);

  return (
    <li
      className={
        openCollection
          ? "flex w-full flex-col items-center justify-center pt-4"
          : "flex w-full flex-col items-center justify-center py-4"
      }
    >
      <div>
        <button
          onClick={() => setOpenCollection(!openCollection)}
          className={
            openCollection
              ? "flex gap-1 items-center text-white uppercase pb-4 hover:blur-[1px]"
              : "flex gap-1 items-center text-[#B5B3B3] uppercase hover:blur-[1px]"
          }
        >
          the collection
          <BiChevronDown className="text-[#B5B3B3] text-sm" />
        </button>
      </div>

      {openCollection && (
        <ul className=" w-full text-[#B5B3B3] uppercase">
          {dropdownItems.map(({ href, label }, index) => (
            <li
              key={index}
              className="flex items-center text-sm justify-center py-2 bg-[#131313] hover:blur-[1px]"
            >
              <a
                className="text-[#B5B3B3] text-sm tracking-[1.6px] uppercase"
                href={href}
                key={`${href}${label}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

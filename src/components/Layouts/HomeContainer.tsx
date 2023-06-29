import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HomeContainer({ children }: Props) {
  return (
    <div className="flex flex-col justify-between items-center font-inter bg-[#1B1B1B]">
      {children}
    </div>
  );
}

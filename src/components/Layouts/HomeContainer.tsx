import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HomeContainer({ children }: Props) {
  return (
    <div className="flex flex-col items-center h-screen font-inter">
      {children}
    </div>
  );
}

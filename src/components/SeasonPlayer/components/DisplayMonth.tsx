import React from "react";

type Props = {
  children: React.ReactNode;
};

const MonthWrapper = ({ children }: Props) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

export const DisplayMonth = (season: string) => {
  switch (season) {
    case "hiver":
      return (
        <MonthWrapper>
          <li>Décembre</li>
          <li>Janvier</li>
          <li>Février</li>
        </MonthWrapper>
      );

    case "printemps":
      return (
        <MonthWrapper>
          <li>Mars</li>
          <li>Avril</li>
          <li>Mai</li>
        </MonthWrapper>
      );
    case "été":
      return (
        <MonthWrapper>
          <li>Juin</li>
          <li>Juillet</li>
          <li>Août</li>
        </MonthWrapper>
      );
    case "automne":
      return (
        <MonthWrapper>
          <li>Septembre</li>
          <li>Octobre</li>
          <li>Novembre</li>
        </MonthWrapper>
      );
  }
};

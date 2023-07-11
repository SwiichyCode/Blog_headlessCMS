import { getCurrentSeason } from "../utils/getCurrentSeason";
import { getCurrentMonth } from "../utils/getCurrentMonth";
import { initialStateSeasonNavType } from "../types/initialStateSeasonNav.type";

export const initialStateSeasonNav: initialStateSeasonNavType[] = [
  {
    id: 1,
    name: "printemps",
    isActive: getCurrentSeason() === "printemps",
    month: [
      {
        id: 1,
        name: "mars",
        isActive: getCurrentMonth() === "mars",
      },
      {
        id: 2,
        name: "avril",
        isActive: getCurrentMonth() === "avril",
      },
      {
        id: 3,
        name: "mai",
        isActive: getCurrentMonth() === "mai",
      },
    ],
  },
  {
    id: 2,
    name: "ete",
    isActive: getCurrentSeason() === "ete",
    month: [
      {
        id: 1,
        name: "juin",
        isActive: getCurrentMonth() === "juin",
      },
      {
        id: 2,
        name: "juillet",
        isActive: getCurrentMonth() === "juillet",
      },
      {
        id: 3,
        name: "août",
        isActive: getCurrentMonth() === "août",
      },
    ],
  },
  {
    id: 3,
    name: "automne",
    isActive: getCurrentSeason() === "automne",
    month: [
      {
        id: 1,
        name: "septembre",
        isActive: getCurrentMonth() === "septembre",
      },
      {
        id: 2,
        name: "octobre",
        isActive: getCurrentMonth() === "octobre",
      },
      {
        id: 3,
        name: "novembre",
        isActive: getCurrentMonth() === "novembre",
      },
    ],
  },
  {
    id: 4,
    name: "hiver",
    isActive: getCurrentSeason() === "hiver",
    month: [
      {
        id: 1,
        name: "décembre",
        isActive: getCurrentMonth() === "décembre",
      },
      {
        id: 2,
        name: "janvier",
        isActive: getCurrentMonth() === "janvier",
      },
      {
        id: 3,
        name: "février",
        isActive: getCurrentMonth() === "février",
      },
    ],
  },
];

import { getCurrentSeason } from "../utils/getCurrentSeason";
import { getCurrentMonth } from "../utils/getCurrentMonth";

export const seasonItems = [
  {
    id: 1,
    name: "printemps",
    isActive: getCurrentSeason() === "printemps",
  },
  {
    id: 2,
    name: "été",
    isActive: getCurrentSeason() === "été",
  },
  {
    id: 3,
    name: "automne",
    isActive: getCurrentSeason() === "automne",
  },
  {
    id: 4,
    name: "hiver",
    isActive: getCurrentSeason() === "hiver",
  },
];

export const monthItems = [
  {
    id: 1,
    name: "janvier",
    isActive: getCurrentMonth() === "janvier",
  },
  {
    id: 2,
    name: "février",
    isActive: getCurrentMonth() === "février",
  },
  {
    id: 3,
    name: "mars",
    isActive: getCurrentMonth() === "mars",
  },
  {
    id: 4,
    name: "avril",
    isActive: getCurrentMonth() === "avril",
  },
  {
    id: 5,
    name: "mai",
    isActive: getCurrentMonth() === "mai",
  },
  {
    id: 6,
    name: "juin",
    isActive: getCurrentMonth() === "juin",
  },
  {
    id: 7,
    name: "juillet",
    isActive: getCurrentMonth() === "juillet",
  },
  {
    id: 8,
    name: "août",
    isActive: getCurrentMonth() === "août",
  },
  {
    id: 9,
    name: "septembre",
    isActive: getCurrentMonth() === "septembre",
  },
  {
    id: 10,
    name: "octobre",
    isActive: getCurrentMonth() === "octobre",
  },
  {
    id: 11,
    name: "novembre",
    isActive: getCurrentMonth() === "novembre",
  },

  {
    id: 12,
    name: "décembre",
    isActive: getCurrentMonth() === "décembre",
  },
];

export const initialStateSeason = {
  printemps: [
    {
      month: [
        {
          name: "mars",
          video: [],
        },
        {
          name: "avril",
          video: [],
        },
        {
          name: "mai",
          video: [],
        },
      ],
    },
  ],
  ete: [
    {
      month: [
        {
          name: "juin",
          video: [],
        },
        {
          name: "juillet",
          video: [],
        },
        {
          name: "aout",
          video: [],
        },
      ],
    },
  ],
  automne: [
    {
      month: [
        {
          name: "septembre",
          video: [],
        },
        {
          name: "octobre",
          video: [],
        },
        {
          name: "novembre",
          video: [],
        },
      ],
    },
  ],
  hiver: [
    {
      month: [
        {
          name: "decembre",
          video: [],
        },
        {
          name: "janvier",
          video: [],
        },
        {
          name: "fevrier",
          video: [],
        },
      ],
    },
  ],
};

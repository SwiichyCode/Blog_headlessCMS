import { getCurrentSeason } from "../utils/getCurrentSeason";
import { getCurrentMonth } from "../utils/getCurrentMonth";

type MonthData = {
  name: string;
  video: never[];
};

type SeasonData = {
  month: MonthData[];
};

export type SeasonVideos = {
  printemps: SeasonData[];
  ete: SeasonData[];
  automne: SeasonData[];
  hiver: SeasonData[];
};

export const seasonItems = [
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

export const initialStateSeason: SeasonVideos = {
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
          name: "août",
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

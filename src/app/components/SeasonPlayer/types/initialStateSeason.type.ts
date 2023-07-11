export type Month = {
  name: string;
  week: {
    name: string;
    video: any[]; // Update this type accordingly
  }[];
};

export type initialStateSeasonType = {
  printemps: {
    month: Month[];
  }[];
  ete: {
    month: Month[];
  }[];
  automne: {
    month: Month[];
  }[];
  hiver: {
    month: Month[];
  }[];
};

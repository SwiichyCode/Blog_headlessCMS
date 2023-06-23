type Month = {
  id: number;
  name: string;
  isActive: boolean;
};

export type initialStateSeasonNavType = {
  id: number;
  name: string;
  isActive: boolean;
  month: Month[];
};

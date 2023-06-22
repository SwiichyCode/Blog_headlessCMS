export type initialStateSeasonNavType = {
  id: number;
  name: string;
  isActive: boolean;
  month: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
};

export const getCurrentSeason = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const seasons: Record<number, string> = {
    1: "hiver",
    2: "hiver",
    3: "printemps",
    4: "printemps",
    5: "printemps",
    6: "ete",
    7: "ete",
    8: "ete",
    9: "automne",
    10: "automne",
    11: "automne",
    12: "hiver",
  };

  const season = seasons[currentMonth] || "inconnue";

  return season;
};

const monthToSeasonMap: { [month: string]: string } = {
  decembre: "hiver",
  janvier: "hiver",
  fevrier: "hiver",
  mars: "printemps",
  avril: "printemps",
  mai: "printemps",
  juin: "ete",
  juillet: "ete",
  aout: "ete",
  septembre: "automne",
  octobre: "automne",
  novembre: "automne",
};

export const getSeasonByMonth = (month: string) => {
  return monthToSeasonMap[month] || null;
};

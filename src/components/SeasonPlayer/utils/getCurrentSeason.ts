export const getCurrentSeason = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1

  let season = "";

  switch (currentMonth) {
    case 1:
    case 2:
    case 12:
      season = "hiver";
      break;
    case 3:
    case 4:
    case 5:
      season = "printemps";
      break;
    case 6:
    case 7:
    case 8:
      season = "été";
      break;
    case 9:
    case 10:
    case 11:
      season = "automne";
      break;
    default:
      season = "inconnue";
  }

  return season;
};

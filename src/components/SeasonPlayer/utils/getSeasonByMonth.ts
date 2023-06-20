export default function getSeasonByMonth(month: any) {
  switch (month) {
    case "decembre":
    case "janvier":
    case "fevrier":
      return "hiver";
    case "mars":
    case "avril":
    case "mai":
      return "printemps";
    case "juin":
    case "juillet":
    case "aout":
      return "ete";
    case "septembre":
    case "octobre":
    case "novembre":
      return "automne";
    default:
      return null;
  }
}

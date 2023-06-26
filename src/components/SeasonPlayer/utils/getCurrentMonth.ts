export const getCurrentMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("fr-FR", { month: "long" });

  return currentMonth.toLowerCase();
};

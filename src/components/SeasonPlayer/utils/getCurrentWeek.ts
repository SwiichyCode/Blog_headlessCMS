export const getCurrentWeek = (): number => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentWeek = Math.ceil(currentDate.getDate() / 7) - 1;

  return currentWeek > 4 && currentMonth === 1 ? 4 : currentWeek;
};

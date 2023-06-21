type Props = {
  season: any;
  toggleNav: any;
  setSelectedMonth: (month: string) => void;
};

export default function MonthNav({
  season,
  toggleNav,
  setSelectedMonth,
}: Props) {
  const activeSeason = season.find((season: any) => season.isActive === true);
  const activeMonths = activeSeason ? activeSeason.month : [];

  console.log("activeSeason", activeMonths);

  const handleMonthClick = (monthId: number, monthName: string) => {
    toggleNav(monthId, activeSeason?.id);
    setSelectedMonth(monthName);
  };

  return (
    <div className="flex w-full max-w-[96px] h-96 bg-white rounded text-black py-6 px-4">
      <ul className="flex flex-col gap-2">
        {activeMonths.map((month: any) => (
          <li
            key={month.id}
            onClick={() => handleMonthClick(month.id, month.name)}
            className="cursor-pointer"
          >
            <span className={!month.isActive ? "text-red-500" : "text-black"}>
              {month.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

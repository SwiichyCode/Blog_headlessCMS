type Props = {
  season: any;
  toggleNav: any;
  setSelectedSeason: (season: string) => void;
};

export default function SeasonNav({
  season,
  toggleNav,
  setSelectedSeason,
}: Props) {
  const handleSeasonClick = (seasonId: number, seasonName: string) => {
    toggleNav(seasonId);
    setSelectedSeason(seasonName);
  };

  return (
    <div className="w-full h-12 bg-white rounded">
      <ul className="flex items-center h-full justify-around ">
        {season.map((season: any) => (
          <li
            key={season.id}
            className="cursor-pointer"
            onClick={() => handleSeasonClick(season.id, season.name)}
          >
            <span className={!season.isActive ? "text-red-500" : "text-black"}>
              {season.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

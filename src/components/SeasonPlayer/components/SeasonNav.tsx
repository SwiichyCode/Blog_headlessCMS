type Props = {
  season: any;
  toggleNav: any;
};

export default function SeasonNav({ season, toggleNav }: Props) {
  return (
    <div className="w-full h-12 bg-white rounded">
      <ul className="flex items-center h-full justify-around ">
        {season.map((season: any) => (
          <li
            key={season.id}
            className="cursor-pointer"
            onClick={() => toggleNav(season.id)}
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

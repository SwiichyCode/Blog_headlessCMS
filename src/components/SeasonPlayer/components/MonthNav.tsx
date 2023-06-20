import { DisplayMonth } from "./DisplayMonth";

type Props = {
  season: any;
};

export default function MonthNav({ season }: Props) {
  const seasonName = season.find(
    (season: any) => season.isActive === true
  ).name;

  return (
    <div className="flex w-full max-w-[96px] h-96 bg-white rounded text-black py-6 px-4">
      {DisplayMonth(seasonName)}
    </div>
  );
}

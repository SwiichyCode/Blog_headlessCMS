import { useState, useEffect } from "react";
import { initialStateSeasonNav } from "./data/initialStateSeasonNav.data";
import { initialStateSeasonType } from "./types/initialStateSeason.type";
import { initialStateSeason } from "./data/initialStateSeason.data";
import { getCurrentSeason } from "./utils/getCurrentSeason";
import { getCurrentMonth } from "./utils/getCurrentMonth";
import { updateSeasonVideoWithVideos } from "./utils/updateSeasonVideoWithVideo";
import MonthNav from "./components/MonthNav";
import SeasonNav from "./components/SeasonNav";
import WeekCarousel from "./components/WeekCarousel";
import useToggleNav from "./hooks/useToggleNav";
import { SeasonVideoProps } from "@/app/types/SeasonVideo";

type Props = {
  seasonVideo: SeasonVideoProps[];
};

export type Week = {
  name: string;
  video: SeasonVideoProps[];
};

export default function SeasonPlayer({ seasonVideo }: Props) {
  const { items: season, toggleNav } = useToggleNav(initialStateSeasonNav);
  const [data, setData] = useState(initialStateSeason);
  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedVideos, setSelectedVideos] = useState<Week[]>([]);

  useEffect(() => {
    const updatedSeasonVideo = updateSeasonVideoWithVideos(data, seasonVideo);
    setData(updatedSeasonVideo as initialStateSeasonType);
  }, [seasonVideo]);

  useEffect(() => {
    const selectedSeasonData = data[
      selectedSeason as keyof initialStateSeasonType
    ]?.find((seasonData) =>
      seasonData.month.some((month) => month.name === selectedMonth)
    );
    const selectedMonthData = selectedSeasonData?.month.find(
      (month) => month.name === selectedMonth
    );

    setSelectedVideos(selectedMonthData?.week as Week[]);
  }, [selectedSeason, selectedMonth, data]);

  console.log(seasonVideo);
  console.log(selectedVideos);

  return (
    <div className="flex flex-col w-full max-w-[600px] gap-6">
      <SeasonNav
        season={season}
        toggleNav={toggleNav}
        setSelectedSeason={setSelectedSeason}
      />
      <div className="flex gap-6">
        <MonthNav
          season={season}
          toggleNav={toggleNav}
          setSelectedMonth={setSelectedMonth}
        />
        <div className="w-full h-96 bg-black rounded">
          <WeekCarousel week={selectedVideos?.map((week) => week.video)} />
        </div>
      </div>
    </div>
  );
}

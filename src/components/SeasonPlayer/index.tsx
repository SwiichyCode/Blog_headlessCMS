import { useState, useEffect } from "react";
import { initialStateSeasonNav } from "./data/initialStateSeasonNav.data";
import { initialStateSeasonType } from "./types/initialStateSeason.type";
import { initialStateSeason } from "./data/initialStateSeason.data";
import { getCurrentSeason } from "./utils/getCurrentSeason";
import { getCurrentMonth } from "./utils/getCurrentMonth";
import { updateSeasonVideoWithVideos } from "./utils/updateSeasonVideoWithVideo";
import MonthNav from "./components/MonthNav";
import SeasonNav from "./components/SeasonNav";
import useToggleNav from "./hooks/useToggleNav";

type Props = {
  seasonVideo: any;
};

export default function SeasonPlayer({ seasonVideo }: Props) {
  const { items: season, toggleNav } = useToggleNav(initialStateSeasonNav);
  const [data, setData] = useState(initialStateSeason);
  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedVideos, setSelectedVideos] = useState<any>([]);

  useEffect(() => {
    const updatedSeasonVideo = updateSeasonVideoWithVideos(data, seasonVideo);
    setData(updatedSeasonVideo);
  }, [seasonVideo]);

  useEffect(() => {
    const selectedSeasonData =
      data[selectedSeason as keyof initialStateSeasonType][0];
    const selectedMonthData = selectedSeasonData?.month.find(
      (month) => month.name === selectedMonth
    );

    setSelectedVideos(selectedMonthData?.week || []);
  }, [selectedSeason, selectedMonth, data]);

  console.log("selectedVideos", selectedVideos);

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
          {/* {selectedVideos.map((video: any) => (
            <video
              width={150}
              height={150}
              className="h-[150px] w-[150px] object-cover"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ))} */}
        </div>
      </div>
    </div>
  );
}

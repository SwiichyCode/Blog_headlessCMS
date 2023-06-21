import { useState, useEffect } from "react";
import MonthNav from "./components/MonthNav";
import SeasonNav from "./components/SeasonNav";
import useToggleNav from "./hooks/useToggleNav";
import { seasonItems } from "./data/data";
import updateSeasonVideoWithVideos from "./utils/updateSeasonVideoWithVideo";
import { initialStateSeason } from "./data/data";
import { SeasonVideos } from "./data/data";
import { getCurrentSeason } from "./utils/getCurrentSeason";
import { getCurrentMonth } from "./utils/getCurrentMonth";

type Props = {
  seasonVideo: any;
};

export default function SeasonPlayer({ seasonVideo }: Props) {
  const { items: season, toggleNav } = useToggleNav(seasonItems);
  const [data, setData] = useState(initialStateSeason);
  const [selectedSeason, setSelectedSeason] = useState(getCurrentSeason());
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedVideos, setSelectedVideos] = useState([]);

  useEffect(() => {
    const updatedSeasonVideo = updateSeasonVideoWithVideos(data, seasonVideo);
    setData(updatedSeasonVideo);
  }, [seasonVideo]);

  useEffect(() => {
    const selectedSeasonData = data[selectedSeason as keyof SeasonVideos];
    const selectedMonthData = selectedSeasonData?.[0]?.month.find(
      (month: any) => month.name === selectedMonth
    );

    setSelectedVideos(selectedMonthData?.video || []);
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

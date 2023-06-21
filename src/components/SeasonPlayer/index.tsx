import { useState, useEffect } from "react";
import MonthNav from "./components/MonthNav";
import SeasonNav from "./components/SeasonNav";
import useToggleNav from "./hooks/useToggleNav";
import { seasonItems } from "./data/data";
import VideoComponent from "./components/VideoPlayer";
import updateSeasonVideoWithVideos from "./utils/updateSeasonVideoWithVideo";
import { initialStateSeason } from "./data/data";

type Props = {
  seasonVideo: any;
};

export default function SeasonPlayer({ seasonVideo }: Props) {
  const { items: season, toggleNav } = useToggleNav(seasonItems);
  const [data, setData] = useState(initialStateSeason);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  console.log(selectedSeason, selectedMonth);

  useEffect(() => {
    const updatedSeasonVideo = updateSeasonVideoWithVideos(data, seasonVideo);
    setData(updatedSeasonVideo);
  }, []);

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
          {/* <VideoComponent /> */}
        </div>
      </div>
    </div>
  );
}

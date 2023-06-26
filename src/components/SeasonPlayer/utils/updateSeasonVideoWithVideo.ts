import { getSeasonByMonth } from "./getSeasonByMonth";

interface Video {
  fields: {
    date: string;
  };
  sys: {
    id: string;
  };
}

interface Week {
  video: Video[];
}

interface Month {
  name: string;
  week: Week[];
}

interface SeasonData {
  month: Month[];
}

interface UpdatedSeasonVideo {
  [season: string]: SeasonData[];
}

const updateWeekVideo = (weekObj: Week, video: Video): void => {
  const isDuplicate = weekObj.video.some((v) => v.sys.id === video.sys.id);
  if (!isDuplicate) {
    weekObj.video.push(video);
  }
};

const updateMonthVideo = (monthObj: Month, video: Video): void => {
  const videoDate = new Date(video.fields.date);
  const weekIndex = Math.ceil(videoDate.getDate() / 7) - 1;
  const weekObj = monthObj.week[weekIndex];
  if (weekObj) {
    updateWeekVideo(weekObj, video);
  }
};

export const updateSeasonVideoWithVideos = (
  data: UpdatedSeasonVideo,
  videos: Video[]
): UpdatedSeasonVideo => {
  const updatedSeasonVideo: UpdatedSeasonVideo = { ...data };

  videos.forEach((video) => {
    const videoDate = new Date(video.fields.date);
    const month = videoDate
      .toLocaleString("fr-FR", { month: "long" })
      .toLowerCase();
    const season = getSeasonByMonth(month);

    if (season && updatedSeasonVideo[season]) {
      const seasonData = updatedSeasonVideo[season][0];
      const monthObj = seasonData.month.find((m) => m.name === month);

      if (monthObj) {
        updateMonthVideo(monthObj, video);
      }
    }
  });

  return updatedSeasonVideo;
};

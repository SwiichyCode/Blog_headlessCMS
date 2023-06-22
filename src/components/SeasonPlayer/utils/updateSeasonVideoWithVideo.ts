import { getSeasonByMonth } from "./getSeasonByMonth";

export const updateSeasonVideoWithVideos = (data: any, videos: any) => {
  const updatedSeasonVideo = { ...data };

  videos.forEach((video: any) => {
    const videoDate = new Date(video.fields.date);
    const month = videoDate
      .toLocaleString("fr-FR", { month: "long" })
      .toLowerCase();
    const season = getSeasonByMonth(month);

    if (season && updatedSeasonVideo[season]) {
      const seasonData = updatedSeasonVideo[season][0];
      const monthObj = seasonData.month.find((m: any) => m.name === month);

      if (monthObj) {
        const weekIndex = Math.ceil(videoDate.getDate() / 7) - 1;
        const weekObj = monthObj.week[weekIndex];

        if (weekObj) {
          const isDuplicate = weekObj.video.some(
            (v: any) => v.sys.id === video.sys.id
          );

          if (!isDuplicate) {
            weekObj.video.push(video);
          }
        }
      }
    }
  });

  return updatedSeasonVideo;
};

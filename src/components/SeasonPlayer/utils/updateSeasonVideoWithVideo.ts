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
      const monthObj = updatedSeasonVideo[season][0].month.find(
        (m: any) => m.name === month
      );

      if (monthObj) {
        const isDuplicate = monthObj.video.some(
          (v: any) => v.sys.id === video.sys.id
        );

        if (!isDuplicate) {
          monthObj.video.push(video);
        }
      }
    }
  });

  return updatedSeasonVideo;
};

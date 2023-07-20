import Main from "@/app/components/MainHome";
import { fetchVideo } from "@/contentful/weeksVideo";

export default async function Home() {
  const videos = await fetchVideo();

  return <Main videos={videos} />;
}

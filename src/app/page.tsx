import Main from "@/app/(pages)/(home)/_components/MainHome";
import { fetchVideo } from "@/contentful/content/carouselVideo";

export default async function Home() {
  const videos = await fetchVideo();

  return <Main videos={videos} />;
}

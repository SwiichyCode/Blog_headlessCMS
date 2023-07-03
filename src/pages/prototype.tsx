import PrototypeContainer from "@/layouts/PrototypeLayout";
import SeasonPlayer from "@/components/SeasonPlayer";
import getEntries from "@/contentful";

type Props = {
  seasonVideo: any;
};

export default function Prototype({ seasonVideo }: Props) {
  return (
    <PrototypeContainer>
      <SeasonPlayer seasonVideo={seasonVideo} />
    </PrototypeContainer>
  );
}

export async function getStaticProps() {
  const seasonVideo = await getEntries.getSeasonVideo();
  return { props: { seasonVideo } };
}

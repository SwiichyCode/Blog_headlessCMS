type Props = {
  videoRefs: any;
  index: number;
  src: string;
};

export default function Video({ videoRefs, index, src }: Props) {
  return (
    <video
      width={150}
      height={150}
      ref={(ref) => (videoRefs.current[index] = ref)}
      className="h-[150px] w-[150px] object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

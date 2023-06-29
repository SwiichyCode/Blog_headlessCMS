type Props = {
  description: string;
};

export default function ImageDescription({ description }: Props) {
  return (
    <p className="w-full text-center text-sm text-[#B5B3B3]">{description}</p>
  );
}

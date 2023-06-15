type ImageDescriptionProps = {
  description: string;
};

export default function ImageDescription(props: ImageDescriptionProps) {
  const { description } = props;

  return <p>{description}</p>;
}

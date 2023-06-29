type CarouselIndexProps = {
  currentIndex: number;
  maxIndex: number;
};

export default function CarouselIndex(props: CarouselIndexProps) {
  const { currentIndex, maxIndex } = props;

  function indexContainer(index: number) {
    return (
      <span className=" border-[1px] border-[#B5B3B3] text-[#B5B3B3] px-3 py-1">
        {index}
      </span>
    );
  }

  return (
    <div className="flex gap-2">
      {indexContainer(currentIndex + 1)}
      {indexContainer(maxIndex)}
    </div>
  );
}

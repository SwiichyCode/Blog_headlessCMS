import * as S from "./styles";

type CarouselIndexProps = {
  currentIndex: number;
  maxIndex: number;
};

export default function CarouselIndex(props: CarouselIndexProps) {
  const { currentIndex, maxIndex } = props;

  function indexContainer(index: number) {
    return (
      <S.CarouselIndex className="border-[1px] border-[#B5B3B3] text-[#B5B3B3] px-3 py-1">
        {index}
      </S.CarouselIndex>
    );
  }

  return (
    <S.CarouselIndexWrapper>
      {indexContainer(currentIndex + 1)}
      {indexContainer(maxIndex)}
    </S.CarouselIndexWrapper>
  );
}

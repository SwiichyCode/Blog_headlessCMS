import * as S from "./styles";

type CarouselIndexProps = {
  currentIndex: number;
  maxIndex: number;
};

export default function CarouselIndex(props: CarouselIndexProps) {
  const { currentIndex, maxIndex } = props;

  function indexContainer(index: number) {
    return <S.CarouselIndex>{index}</S.CarouselIndex>;
  }

  return (
    <S.CarouselIndexWrapper>
      {indexContainer(currentIndex + 1)}
      {indexContainer(maxIndex)}
    </S.CarouselIndexWrapper>
  );
}

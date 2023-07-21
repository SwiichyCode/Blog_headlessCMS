import * as S from "./styles";

type Props = {
  description: string;
};

export default function CarouselImageDescription({ description }: Props) {
  return <S.CarouselImageDescription>{description}</S.CarouselImageDescription>;
}

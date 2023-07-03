import Image from "next/image";
import * as S from "./styles";

type ArrowProps = {
  onClick?: () => void;
  position?: "left" | "right";
  labelPrev?: string;
  labelNext?: string;
};

export default function ArrowSlide(props: ArrowProps) {
  const { onClick, labelPrev, labelNext, position = "" } = props;
  return (
    <S.ArrowSlideBtn
      position={position}
      type="button"
      onClick={onClick}
      title={position == "left" ? labelPrev : labelNext}
    >
      <Image
        src={
          position == "left"
            ? "/carousel/slide-left.svg"
            : "/carousel/slide-right.svg"
        }
        alt="arrow slide"
        width={16}
        height={24}
      />
    </S.ArrowSlideBtn>
  );
}

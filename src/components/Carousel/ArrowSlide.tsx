import Image from "next/image";
import styled from "styled-components";

const ArrowStyle = styled.button`
  background: black;
  border-radius: 15px;
`;

type ArrowProps = {
  onClick?: () => void;
  position?: "left" | "right";
  labelPrev?: string;
  labelNext?: string;
};

export default function ArrowSlide(props: ArrowProps) {
  const { onClick, labelPrev, labelNext, position } = props;
  return (
    <ArrowStyle
      type="button"
      onClick={onClick}
      title={position == "left" ? labelPrev : labelNext}
      className={
        position == "left"
          ? "absolute top-1/2 left-0 z-10 cursor-pointer border-none bg-none"
          : "absolute top-1/2 right-0 z-10 cursor-pointer border-none bg-none rotate-180"
      }
    >
      <Image
        src="/carousel/slide.svg"
        alt="arrow slide"
        width={4}
        height={24}
      />
    </ArrowStyle>
  );
}

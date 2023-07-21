import Image from "next/image";
import * as S from "./styles";

export default function Presentation() {
  return (
    <S.PresentationContainer>
      <S.PresentationWrapper>
        <S.PresentationHeader>
          <h1>Je m&apos;appelle Florence Illouz, je suis artiste visuelle.</h1>
        </S.PresentationHeader>
        {/* <S.Line /> */}
        <S.PresentationTextWrapper>
          <S.PresentationTextArticle className="text-lg">
            <S.MarkWrapper>
              <Image src="/mark-top.svg" width={23} height={23} alt="" />
              <Image src="/mark-right.svg" width={23} height={23} alt="" />
            </S.MarkWrapper>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio qui possimus eum optio sed ipsum ut ea. A quis
              obcaecati soluta vitae delectus id fugit, dicta quidem atque
              totam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              maxime quis magni odio libero, incidunt deleniti nostrum id
              laboriosam quidem repellendus nam debitis eos optio expedita,
              eveniet nulla. Error, dolores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              voluptatibus. Amet at optio, vitae animi quas odio pariatur ex
              consectetur blanditiis accusantium eaque ad harum veritatis
              magnam, tempora doloremque quos!
            </p>
            <S.MarkWrapper>
              <Image src="/mark-left.svg" width={23} height={23} alt="" />
              <Image src="/mark-bottom.svg" width={23} height={23} alt="" />
            </S.MarkWrapper>
          </S.PresentationTextArticle>
        </S.PresentationTextWrapper>
      </S.PresentationWrapper>
    </S.PresentationContainer>
  );
}

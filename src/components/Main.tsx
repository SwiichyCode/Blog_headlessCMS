import Image from "next/image";
import styled from "styled-components";

const ParagraphColor = styled.p`
  color: black;
`;
const TitleColor = styled.h1`
  color: black;
`;

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center w-full mb-16">
      <section className="flex flex-col items-center w-full max-w-4xl text-[#ededed]">
        <div className="flex flex-col items-start">
          <TitleColor className="text-6xl mb-10">
            {" "}
            Je m'appelle Florence Illouz.
          </TitleColor>
          <ParagraphColor className="text-5xl leading-relaxed">
            Je suis une artiste visuelle.{" "}
          </ParagraphColor>
        </div>
        <div className=" w-[2px] h-[144px] bg-[#ededed] my-8"></div>
        <div className="flex flex-col items-center w-full max-w-[510px]">
          <article className="relative flex flex-col items-center gap-6 w-full text-[#bbb6b6] text-lg">
            <div className="flex justify-between w-full">
              <Image src="/mark-top.png" width={23} height={23} alt="" />
              <Image src="/mark-right.png" width={23} height={23} alt="" />
            </div>

            <ParagraphColor className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci unde obcaecati, eius inventore ducimus
              laboriosam, officia fuga consectetur maxime illo architecto iusto
              fugit modi ad. Inventore assumenda voluptas suscipit?
            </ParagraphColor>
            <ParagraphColor className=" max-w-[450px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
              modi recusandae. Officiis, quis? Illo animi aliquid quam veritatis
              cum. Necessitatibus delectus architecto, excepturi nam nulla
              voluptate voluptatem deleniti magni. Non?
            </ParagraphColor>
            <ParagraphColor className=" max-w-[450px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              nostrum similique totam eius molestias cumque reprehenderit
              obcaecati ducimus, ipsa quis magni earum aut iste deleniti
              voluptate voluptates quod fugit recusandae.
            </ParagraphColor>

            <div className="flex justify-between w-full">
              <Image src="/mark-left.png" width={23} height={23} alt="" />
              <Image src="/mark-bottom.png" width={23} height={23} alt="" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center w-full mb-16">
      <section className="flex flex-col items-center w-full max-w-4xl text-[#ededed]">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl mb-10">Je m'appelle Florence Illouz</h1>
          <p className="text-3xl leading-relaxed">Je suis artiste visuelle.</p>
        </div>
        <div className=" w-[2px] h-[144px] bg-[#ededed] my-8"></div>
        <div className="flex flex-col items-center w-full max-w-[510px]">
          {/* <h2 className="text-xl mb-8">FONDS ABBAS PHOTOS</h2> */}

          <article className="relative flex flex-col items-center gap-6 w-full text-[#bbb6b6] text-lg">
            <div className="flex justify-between w-full">
              <Image src="/mark-top.png" width={23} height={23} alt="" />
              <Image src="/mark-right.png" width={23} height={23} alt="" />
            </div>

            <p className="max-w-[450px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio qui possimus eum optio sed ipsum ut ea. A quis
              obcaecati soluta vitae delectus id fugit, dicta quidem atque
              totam.
            </p>
            <p className=" max-w-[450px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              maxime quis magni odio libero, incidunt deleniti nostrum id
              laboriosam quidem repellendus nam debitis eos optio expedita,
              eveniet nulla. Error, dolores.
            </p>
            <p className=" max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              voluptatibus. Amet at optio, vitae animi quas odio pariatur ex
              consectetur blanditiis accusantium eaque ad harum veritatis
              magnam, tempora doloremque quos!
            </p>

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

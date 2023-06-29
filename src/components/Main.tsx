import Image from "next/image";

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center w-full mb-16">
      <section className="flex flex-col items-center w-full max-w-4xl text-[#ededed]">
        <div className="flex flex-col items-start">
          <h1 className="text-6xl mb-10">I am Abbas.</h1>
          <p className="text-5xl leading-relaxed">
            I am a photographer, which means I write with light.
          </p>
        </div>
        <div className=" w-[2px] h-[144px] bg-[#ededed] my-8"></div>
        <div className="flex flex-col items-center w-full max-w-[510px]">
          <h2 className="text-xl mb-8">FONDS ABBAS PHOTOS</h2>

          <article className="relative flex flex-col items-center gap-6 w-full text-[#bbb6b6] text-lg">
            <div className="flex justify-between w-full">
              <Image src="/mark-top.png" width={23} height={23} alt="" />
              <Image src="/mark-right.png" width={23} height={23} alt="" />
            </div>

            <p className="max-w-[450px]">
              Magnum photographer Abbas has roamed the world for 55 years in
              search of images of upheaval, initially political and social, then
              later, religious.
            </p>
            <p className=" max-w-[450px]">
              Describing himself as a “historian of the present”, Abbas covered
              wars and revolutions in Biafra, Bangladesh, Northern Ireland,
              Vietnam, Chile, Cuba, South Africa during Apartheid, and the
              Middle East – most notably, the revolution in his own country,
              Iran. He also documented life in Mexico – a project that defined
              his aesthetic in photography – and pursued a lifelong interest in
              religion and its intersection with society.
            </p>
            <p className=" max-w-[450px]">
              Fonds Abbas Photos has been created to protect, preserve and
              promote Abbas’s life work, providing continued access to his rich
              photographic oeuvre.
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

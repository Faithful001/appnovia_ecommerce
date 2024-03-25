import Link from "next/link";
import Image from "next/image";
const Artists = () => {
  return (
    <>
      <div className="flex flex-col  md:items-start items-center justify-between pl-5 pr-5 py-7 gap-24 lg:flex-row md:pr-5 md:pl-5 md:py-20 lg:pr-[90px] lg:pl-[118px]">
        <div className="flex flex-col md:flex-row gap-5 ">
          <Image
            src={"/assets/artistone.svg"}
            alt="images"
            className="flex max-w-[100%] md:max-w-[50%] "
            width={493}
            height={697}
          />
          <Image
            src={"/assets/artisttwo.svg"}
            alt="images"
            className="flex max-w-[100%] md:max-w-[50%] "
            width={493}
            height={697}
          />
        </div>
        <div>
          <h1 className="text-[20px] text-center font-semibold md:font-normal max-w-[100%] md:text-[35px] lg:max-w-[30rem]">
            Meet The Artists Behind The Corsen Maria & Sophia
          </h1>
          <h2 className="nunito-sans text-center text-[14px] py-3 max-w-[100%] lg:max-w-[370px] md:text-left md:text-[18px] font-normal md:py-7 leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur elit ,sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </h2>
          <Link
            href=""
            className="flex flex-row justify-center mt-2 py-[6px] px-[27px] noto-sans uppercase border-black border-2 md:py-[12px] md:px-[56.36px]"
          >
            {" "}
            shop collection
          </Link>
        </div>
      </div>
    </>
  );
};

export default Artists;

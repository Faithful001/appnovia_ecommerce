import React from "react";
import Image from "next/image";

const images: string[] = [
  "/assets/insta2.svg",
  "/assets/insta3.svg",
  "/assets/insta4.svg",
  "/assets/insta5.svg",
  "/assets/insta6.svg",
  "/assets/insta2.svg",
  "/assets/insta3.svg",
  "/assets/insta4.svg",
  "/assets/insta5.svg",
  "/assets/insta6.svg",
  "/assets/insta2.svg",
  "/assets/insta3.svg",
  "/assets/insta4.svg",
  "/assets/insta5.svg",
];

const Instagram = () => {
  return (
    <div className="overflow-x-hidden">
      <h1 className="pl-5 md:pl-14 text-[20px] font-bold text-left md:text-[29px] md:font-medium leading-[39px] noto-sans">
        Instagram
      </h1>
      <h2 className="pl-5 md:pl-14 text-[20px]  text-left md:text-[18px] font-normal leading-[22px] nunito-sans">
        Follow us on @qodeinteractive
      </h2>
      <div className="relative flex flex-row gap-5 w-full lg:pt-5 overflow-hidden animate-slide">
        {images.map((image: string, index: number) => (
          <Image
            src={image}
            key={index}
            alt={`Image ${index + 1}`}
            className="flex w-full max-w-[100%] h-full"
            width={539}
            height={308}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-6 px-5 md:flex-row md:space-y-0 md:px-0 items-center py-10 ">
        <div className="flex flex-row p-5 md:p-10 hover:bg-gray-300 w-full gap-5 items-center justify-center border-black border-2 max-w-[480px]">
          <Image
            src={"/assets/svg1.svg"}
            alt="iconimgs"
            className="w-[20%] h-full"
            width={35}
            height={10}
          />
          <h1 className="noto-sans text-[13px] uppercase font-semibold">
            fast delivery
          </h1>
        </div>
        <div className="flex flex-row p-5 md:p-10 hover:bg-gray-300 w-full gap-5 items-center justify-center border-black border-2 max-w-[480px]">
          <Image
            src={"/assets/svg2.svg"}
            alt="iconimgs"
            className="w-[20%] h-full"
            width={35}
            height={10}
          />
          <h1 className="noto-sans text-[13px] uppercase font-semibold">
            free returns
          </h1>
        </div>
        <div className="flex flex-row p-5 md:p-10 hover:bg-gray-300 w-full gap-5 items-center justify-center border-black border-2 max-w-[480px]">
          <Image
            src={"/assets/svg3.svg"}
            alt="iconimgs"
            className="w-[5%] h-full"
            width={14}
            height={15}
          />
          <h1 className="noto-sans text-[13px] uppercase font-semibold">
            security checkout
          </h1>
        </div>
        <div className="flex flex-row p-5 md:p-10 hover:bg-gray-300 w-full gap-5 items-center justify-center border-black border-2 max-w-[480px]">
          <Image
            src={"/assets/svg4.svg"}
            alt="iconimgs"
            className="w-[20%] h-full"
            width={30}
            height={5}
          />
          <h1 className="noto-sans text-[13px] uppercase font-semibold">
            order tracking
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Instagram;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-5 md:px-10 py-5">
        <div className="flex flex-col space-y-2 lg:space-y-0">
          <Image
            src={"/assets/footer-logo.svg"}
            alt="logo"
            className="w-[80%] md:w-[50%] flex m-auto h-full"
            height={21}
            width={103}
          />
          <h1 className="nunito-sans max-w-[100%] py-5 text-[20px] lg:max-w-[400px] md:py-10 md:text-[16px] leading-[22px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </h1>
        </div>
        <div className="flex flex-col space-y-4 text-[20px] md:text-[13px] items-center">
          <h1 className="noto-sans  font-normal text-left">Support</h1>
          <Link href="" className="noto-sans font-normal hover:underline">
            Help & Contact Us
          </Link>
          <Link href="" className="noto-sans  font-normal hover:underline">
            Returns & Refunds
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Online stores
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Privacy policy
          </Link>
        </div>
        <div className="flex flex-col space-y-3 items-center text-[20px] pt-7 md:text-[13px] text-left lg:pt-0">
          <h1 className="noto-sans  font-normal">Company</h1>
          <Link href="" className="noto-sans font-normal hover:underline">
            Home
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Pages
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Shop
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Portfolio
          </Link>
          <Link href="" className="noto-sans font-normal hover:underline">
            Blogs
          </Link>
        </div>
        <div>
          <h1 className="noto-sans text-[24px] pt-5 font-normal text-left md:pt-7 md:text-[13px] lg:pt-0">
            Company
          </h1>
          <h2 className="flex flex-col max-w-[100%] text-[17px] h-full lg:max-w-[50%] md:text-[13px] md:leading-[30px]">
            Vienna, Hansalgasse, Austria Berlin, Buschallee, Germany The Piazza,
            London, UK
          </h2>
        </div>

        <div className="flex flex-col w-full md:m-auto pt-5 md:pt-10 lg:pt-0 lg:m-0">
          <h1 className="text-[20px] leading-[27px] text-left md:text-[27px] ">
            Get latest news
          </h1>
          <div className="flex flex-row m-auto border-b-[1px] mt-10 border-black justify-between max-w-[383px] w-full max-h-[37px]">
            <input
              type="email"
              placeholder="E-mail address"
              className="placeholder-bg-transparent placeholder-black bg-transparent nunito-sans text-[16px] leading-[22px] border-none outline-none"
            />
            <BsArrowRight className="text-3xl text-black" />
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-black py-3 flex-row justify-between lg:py-0">
        <h1 className="pl-5 text-[13px]">©2024 All rights reserved</h1>
        <div className="flex gap-2 uppercase text-[13px] noto-sans pr-5">
          <h1>eng</h1>
          <div className=" border-black border-r-2 border-l-2 px-3">fra</div>
          <h1>skr</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

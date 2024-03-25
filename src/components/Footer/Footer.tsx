import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="">
      <div className="md:flex md:flex-row flex flex-col justify-between items-start gap-10 w-full px-8">
        <div className="flex flex-col items-start max-w-xs w-full space-y-2 lg:space-y-0">
          <Image
            src={"/assets/icons/corsea_icon.svg"}
            alt="logo"
            className="flex float-left w-32"
            width={1}
            height={1}
          />
          <h1 className="nunito-sans max-w-xs py-5 text-[16px] leading-[22px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </h1>
        </div>
        <div className="md:flex md:flex-row flex flex-col justify-center items-start w-full gap-5 text-[13px] mb-5">
          <div className="flex flex-col items-start justify-center space-y-3 w-full">
            <h1 className="noto-sans  font-normal text-left text-[15px]">
              Support
            </h1>
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
          <div className="flex flex-col items-start justify-center space-y-3 w-full">
            <h1 className="noto-sans  font-normal text-[15px]">Company</h1>
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
          <div className="flex flex-col items-start justify-center space-y-3 w-full">
            <h1 className="noto-sans font-normal text-left md:pt-7 text-[15px]">
              Company
            </h1>
            <h2 className="flex flex-col w-full text-[13px] md:leading-[30px] max-w-sm">
              Vienna, Hansalgasse, Austria Berlin, Buschallee, Germany The
              Piazza, London, UK
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start w-1/2 mb-5">
          <h1 className="text-[20px] text-left leading-[27px] md:text-[27px] min-w-fit">
            Get latest news
          </h1>
          <div className="flex flex-row mt-5 justify-between max-w-[373px] w-full max-h-[37px] relative">
            <input
              type="email"
              placeholder="E-mail address"
              className="placeholder-bg-transparent placeholder-black bg-transparent nunito-sans text-[16px] pr-10 pb-4 border-b border-black outline-none w-full"
            />
            <BsArrowRight className="text-3xl text-black absolute -top-1 right-0" />
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-black py-3 flex-row justify-between">
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

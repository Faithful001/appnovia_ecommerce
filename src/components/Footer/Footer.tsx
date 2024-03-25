import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="">
      <div className="md:flex md:flex-row flex flex-col justify-center items-start gap-5 w-full px-8">
        <div className="flex flex-col items-start w-full space-y-2 lg:space-y-0">
          <Image
            src={"/assets/icons/corsea_icon.svg"}
            alt="logo"
            className=" flex float-left"
            width={150}
            height={150}
          />
          <h1 className="nunito-sans max-w-[100%] py-5 md:max-w-[330px] text-[16px] leading-[22px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </h1>
        </div>
        <div className="md:flex md:flex-row flex flex-col justify-between items-start w-full gap-5 text-[13px] mb-5">
          <div className="flex flex-col items-start space-y-4 ">
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
          <div className="flex flex-col items-start space-y-3 pt-7 text-[13px] text-left lg:pt-0">
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
          <div className="flex flex-col items-start">
            <h1 className="noto-sans pt-5 font-normal text-left md:pt-7 text-[15px] lg:pt-0">
              Company
            </h1>
            <h2 className="flex flex-col max-w-[100%] h-full lg:max-w-[50%] text-[13px] md:leading-[30px]">
              Vienna, Hansalgasse, Austria Berlin, Buschallee, Germany The
              Piazza, London, UK
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start w-full mb-5">
          <h1 className="text-[20px] leading-[27px] md:text-[27px] ">
            Get latest news
          </h1>
          <div className="flex flex-row border-b-[1px] mt-5 border-black justify-between max-w-[383px] w-full max-h-[37px]">
            <input
              type="email"
              placeholder="E-mail address"
              className="placeholder-bg-transparent placeholder-black bg-transparent nunito-sans text-[16px] leading-[22px] border-none outline-none"
            />
            <BsArrowRight className="text-3xl text-black" />
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

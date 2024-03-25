import Image from "next/image";
import quote_icon from "../../../public/assets/icons/quote_icon.svg";
import bad_onynxflow_icon from "../../../public/assets/icons/bad_onynxflow_icon.svg";
import boutique_logo from "../../../public/assets/onyxflow/boutique_logo.svg";
import infinity_logo from "../../../public/assets/onyxflow/infinity_logo.svg";
import mangentle_logo from "../../../public/assets/onyxflow/mangentle_logo.svg";
import flowstudio_logo from "../../../public/assets/onyxflow/flowstudio_logo.svg";
import ox_logo from "../../../public/assets/onyxflow/ox_logo.svg";
import left_arrow_icon from "../../../public/assets/icons/left_arrow_icon.svg";
import right_arrow_icon from "../../../public/assets/icons/right_arrow_icon.svg";
import onyxflow_bg from "../../../public/assets/onyxflow/onyxflow_bg.svg";
import Link from "next/link";
import { flowData } from "@/data/flowData";
import { FlowDataInterface } from "@/interfaces/data.interface";

const OnyxFlow = () => {
  return (
    <section className="onyx-flow flex flex-col items-center justify-center gap-36 md:px-16 px-8 my-16">
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col items-center w-full gap-7">
          <Image src={quote_icon} alt="" />
          <div className="flex items-center justify-between w-full gap-5">
            <Image src={left_arrow_icon} alt="" />
            <p className="text-center max-w-[31rem]">
              Accusantium doloremque laudantium, totam rem aperiam. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <Image src={right_arrow_icon} alt="" />
          </div>
        </div>
        <Image src={bad_onynxflow_icon} alt="" />
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5">
          <Image src={boutique_logo} alt="" />
          <Image src={infinity_logo} alt="" />
          <Image src={mangentle_logo} alt="" />
          <Image src={flowstudio_logo} alt="" />
          <Image src={ox_logo} alt="" />
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <Image src={onyxflow_bg} alt="" className="" />
        <div className="absolute flex flex-col items-center gap-5">
          <span className="flex items-center justify-center gap-3 lg:text-6xl md:text-3xl sm:text-xl">
            <p className=" text-white">ONYX</p>
            <Image src={bad_onynxflow_icon} alt="" className="invert" />
            <p className=" text-white">THE FLOW</p>
          </span>
          <Link href={""} className="underline text-white text-xs">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="px-5 md:px-0">
        <h1
          className="noto-sans text-[30px]
           font-normal md:text-[35px] 
           leading-[42px] text-center 
           capitalize"
        >
          read our blog posts
        </h1>
        <h2 className="nunito text-[15px] md:text-[18px] pb-5 md:pb-0 text-center font-normal leading-[22px] max-w-[469px] m-auto pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed
          do eiusmod.
        </h2>
        <div className="flex flex-col px-0 gap-10 md:flex-row md:px-10 lg:px-[140px] mt-5">
          {flowData.map((item: FlowDataInterface, index: number) => (
            <div key={index} className="">
              <Image
                src={item.imageSrc}
                alt={`Image ${index + 1}`}
                width={526}
                height={560}
                className="Img"
              />
              <div className="nunito text-[15px] border-black border-b-[1px] py-3 md:text-[12px] leading-[16px] text-center spacing-[0.6px] capitalize">
                {item.text}
              </div>
              <h1 className="noto-sans text-[20px] leading-[33px] pt-2 text-clip text-center capitalize">
                {item.text2}
              </h1>
              <Link
                href=""
                className="noto-sans text-[15px] hover:underline md:text-[12px] font-semibold leading-[17px] spacing-[1.2px] flex justify-center pt-7"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnyxFlow;

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

const OnyxFlow = () => {
  return (
    <section
      className="onyx-flow flex flex-col items-center justify-center gap-36 md:px-16 px-8 my-16"
      id="portfolio"
    >
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
    </section>
  );
};

export default OnyxFlow;

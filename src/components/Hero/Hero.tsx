import Image from "next/image";
import left_arrow_icon from "../../../public/assets/icons/left_arrow_icon.svg";
import right_arrow_icon from "../../../public/assets/icons/right_arrow_icon.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero h-screen flex flex-col justify-end pb-10 border-b border-black items-start gap-20">
      <div className="flex w-full items-center justify-between lg:invert-0 invert">
        <Image src={left_arrow_icon} alt="" className="cursor-pointer" />
        <Image src={right_arrow_icon} alt="" className="cursor-pointer" />
      </div>
      <div className="section-invert flex flex-col items-start justify-center lg:text-black text-white ml-5">
        <h1 className="text-[45px]">Mixed Textiles</h1>
        <p className="max-w-[24.05rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
        <button className="border lg:border-black border-white hover:bg-white hover:text-black hover:border-black px-12 py-3 mt-5 text-xs font-semibold">
          SHOP COLLECTION
        </button>
      </div>
    </section>
  );
};

export default Hero;

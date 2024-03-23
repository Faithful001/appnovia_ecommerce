import Image from "next/image";
import man_bg from "../../../public/assets/bg/man_bg.svg";
import woman_bg from "../../../public/assets/bg/woman_bg.svg";

const GenderCollection = () => {
  return (
    <section className="md:flex md:flex-row flex-col items-center justify-between ">
      <div className="relative flex items-center justify-center border border-black">
        <Image src={man_bg} alt="" className="" />
        <div className="absolute flex flex-col items-center justify-center gap-5">
          <p className="text-[50px]">MAN</p>
          <button className="border border-black hover:bg-white px-12 py-3 text-xs font-semibold">
            SHOP COLLECTION
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center border border-black">
        <Image src={woman_bg} alt="" className="" />
        <div className="absolute flex flex-col items-center justify-center gap-5">
          <p className="text-[50px]">WOMAN</p>
          <button className="border border-black hover:bg-white px-12 py-3 text-xs font-semibold">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;

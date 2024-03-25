import { BsArrowRight } from "react-icons/bs";
const News = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "url('/assets/sign.svg')",
        backgroundSize: "cover",
        maxWidth: "100%",
      }}
      className="flex flex-col px-5 pt-10 pb-24 mt-10 max-h-[381px] md:mt-5"
    >
      <h1 className="noto-sans leading-[42px] text-[20px] text-white md:text-[35px] lg:text-black text-center m-auto max-w-[582px]">
        Sign up to our newsletter for all the latest news & discounts.
      </h1>
      <div className="flex flex-row m-auto border-b-2 mt-10 text-white lg:text-black border-white  lg:border-black justify-between max-w-[540px] w-full max-h-[37px]">
        <input
          type="email"
          placeholder="E-mail address"
          className="placeholder-bg-transparent placeholder-white lg:placeholder-black  bg-transparent nunito-sans text-[16px] leading-[22px] border-none outline-none"
        />
        <BsArrowRight className="text-3xl text-white md:text-black" />
      </div>
    </div>
  );
};

export default News;
